--[[
	2020/12/15 - 2021/01/22
	CSVDISSECTOR-dissector.lua V0.0.2
	Wireshark Lua CSVDISSECTOR protocol dissector

	Source code by Didier Stevens, GPL according to Wireshark Foundation ToS
	https://DidierStevens.com
	Use at your own risk

	"c:\Program Files\Wireshark\Wireshark.exe" -X lua_script:csv-dissector.lua csv-example.pcapng

	Shortcommings, or todo's ;-)
		add table with fieldnames, table with field description,
		use dissector preference dialog

	History:
		2020/12/15: start
		2020/12/24: 0.0.2 refactoring
		2021/01/22: added preferences
--]]

PROTOCOL = 'csvdissector'
PORT = 1234
MAXIMUM_NUMBER_OF_FIELDS = 10
SEPARATOR = '|'
-- FIELD_NAMES = {[1]='start', [4]='command'}
FIELD_NAMES = {}

-- https://stackoverflow.com/questions/2421695/first-character-uppercase-lua
function Capitalize(str)
	return (str:gsub("^%l", string.upper))
end

function string.split(sString, sDelimiter)
	if sString:find(sDelimiter) == nil then
		return {{['field']=sString, ['position']=1}}
	end

	local tResult = {}
	local iIndex = 1
	local iPositionSave
	iPositionSave = 1
	for sPart, iPosition in sString:gmatch('(.-)' .. sDelimiter .. '()') do
		tResult[iIndex] = {['field']=sPart, ['position']=iPositionSave}
		iIndex = iIndex + 1
		iPositionSave = iPosition
	end
	tResult[iIndex] = {['field']=sString:sub(iPositionSave), ['position']=iPositionSave} -- Handle the last field
	return tResult
end

function GenerateFieldName(iKey)
	if FIELD_NAMES[iKey] == nil then
		return 'field' .. iKey
	else
		return FIELD_NAMES[iKey]
	end
end

local function DefineAndRegisterCSVDISSECTORdissector()
	local sProtocol = PROTOCOL
	local iMaximumNumberOfFields = MAXIMUM_NUMBER_OF_FIELDS
	local iPort = PORT

	local oProtoCSVDISSECTOR = Proto(sProtocol, sProtocol:upper() .. ' Protocol')

	local oPref = oProtoCSVDISSECTOR.prefs
	oPref.separator = Pref.string('Separator', SEPARATOR, 'The field separator character')

	for iter = 1,iMaximumNumberOfFields do
		sFieldname = GenerateFieldName(iter)
		oProtoCSVDISSECTOR.fields[sFieldname] = ProtoField.string(sProtocol .. '.' .. sFieldname, Capitalize(sFieldname), 'Content of ' .. sFieldname)
	end

	function oProtoCSVDISSECTOR.dissector(oTvbProtocolData, oPinfo, oTreeItemRoot)
		local sProtocolName = oProtoCSVDISSECTOR.name

		local iProtocolDataLength = oTvbProtocolData:len()

		if iProtocolDataLength == 0 then
			return
		end

		local sCSVData = oTvbProtocolData():string()

		local oTreeItemCSVDISSECTOR = oTreeItemRoot:add(oProtoCSVDISSECTOR, oTvbProtocolData(), sProtocolName .. ' Protocol Data')

		local tFields = sCSVData:split(oPref.separator)

		local iCountFields = 0
		for key1, value1 in pairs(tFields) do
			if key1 <= iMaximumNumberOfFields then
				sFieldname = GenerateFieldName(key1)
				oTreeItemCSVDISSECTOR:add(oProtoCSVDISSECTOR.fields[sFieldname], oTvbProtocolData(value1['position'] - 1, value1['field']:len()))
			end
			iCountFields = iCountFields + 1
		end
		
		if iCountFields > iMaximumNumberOfFields then
			error('Maximum number of fields exceeded, increase iMaximumNumberOfFields (= ' .. iMaximumNumberOfFields .. ') in the code of the CSV dissector to at least ' .. iCountFields)
		end
	end

	DissectorTable.get('tcp.port'):add(iPort, oProtoCSVDISSECTOR)
end

local function Main()
	DefineAndRegisterCSVDISSECTORdissector()
end

Main()
