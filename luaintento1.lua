-- Define the output CSV file path
local csv_file_path = "captured_packets.csv"

-- Open the CSV file for writing
local csv_file = io.open(csv_file_path, "w")

-- Write header line to the CSV file
csv_file:write("Time,Source,Destination,Protocol,Length\n")

-- Define a Wireshark tap to capture packets
local tap = Listener.new(nil, "frame")

-- Function to handle each captured packet
function tap.packet(pinfo, tvb)
    local time = os.date("%Y-%m-%d %H:%M:%S", pinfo.abs_ts)
    local src = tostring(pinfo.src)
    local dst = tostring(pinfo.dst)
    local protocol = tostring(pinfo.cols.protocol)
    local length = tostring(pinfo.len)
    
    -- Write packet details to the CSV file
    csv_file:write(time .. "," .. src .. "," .. dst .. "," .. protocol .. "," .. length .. "\n")
end

-- Close the CSV file when done
function tap.draw()
    csv_file:close()
end


#C:\Users\fodel\Desktop\Wireshark