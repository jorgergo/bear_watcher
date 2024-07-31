TODO LIST: ACTUALIZAR IMAGENES (NO PUDE JORGE)
# Bear Watcher

## Descripción
Bear Watcher es nuestro proyecto para el Talent Hackathon, específicamente diseñado para el track de "Detección de anomalías por análisis de tráfico en la navegación". Utilizando una combinación de tecnologías front-end avanzadas y una arquitectura backend modular (pendiente de describir), nuestro objetivo es desarrollar un software capaz de analizar el tráfico de navegación en tiempo real, detectando anomalías que puedan indicar una posible amenaza de ciberseguridad.

## Motivación
La ciberseguridad es un riesgo creciente y de gran impacto para las empresas en todo el mundo. Con el aumento del cibercrimen, es crucial contar con herramientas avanzadas para detectar y prevenir amenazas antes de que causen daño. Nuestro proyecto busca ofrecer una solución accesible y eficaz, especialmente diseñada para ayudar a las PYMES a minimizar sus riesgos y facilitar su crecimiento seguro.

## Objetivo
Desarrollar un software que, mediante el uso de inteligencia artificial, sea capaz de:
- Capturar en tiempo real el tráfico de navegación.
- Analizar y almacenar datos capturados.
- Identificar patrones de comportamiento anómalo.
- Distinguir entre tráfico "normal" y tráfico con anomalías, ayudando así a prevenir posibles ciberataques.

## ODS Al que Está Alineado el Track
Este proyecto contribuye al Objetivo de Desarrollo Sostenible (ODS) número 9: Industria, innovación e infraestructura.

## Tecnologías Utilizadas/Capacidad Tecnológica

# Bear Watcher Frontend

El frontend de Bear Watcher ha sido desarrollado utilizando las últimas tecnologías y librerías para asegurar una experiencia de usuario fluida y una arquitectura escalable. A continuación, se detallan las tecnologías y librerías clave utilizadas en el desarrollo:

## Tecnologías y Librerías:

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Un herramienta de construcción que ofrece una experiencia de desarrollo más rápida.
- **Leaflet**: Una biblioteca de JavaScript para mapas interactivos.
- **React Data Table Component**: Un componente de React para crear tablas de datos con facilidad.
- **React Leaflet**: Integra Leaflet con React para crear mapas.
- **Recharts**: Una biblioteca de gráficos basada en React.
- **Socket.io**: Permite comunicaciones en tiempo real entre clientes y servidores.
- **Autoprefixer**: Un plugin para postprocesar CSS y añadir prefijos de vendor automáticamente.
- **ESLint**: Una herramienta de linting para JavaScript y JSX.
- **PostCSS**: Un herramienta para transformar CSS con plugins de JavaScript.
- **Tailwind CSS**: Un framework de CSS para diseñar rápidamente interfaces sin salir del HTML.

## Pasos de Instalación:

Para poner en marcha el proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**: Obten una copia del proyecto en tu máquina local clonando el repositorio de GitHub.

    ```
    git clone https://github.com/jorgergo02/bear_watcher
    ```

2. **Instala las dependencias**: Navega a la carpeta del frontend y ejecuta el siguiente comando para instalar todas las dependencias necesarias listadas en el `package.json`.

    ```
    cd BearWatcher/Frontend
    npm install
    ```

3. **Ejecuta el entorno de desarrollo**: Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo con Vite para ver la aplicación en tu navegador.

    ```
    npm run dev
    ```

    Esto hará que la aplicación esté disponible en `http://localhost:3000` (o el puerto que se muestre en tu terminal).

4. **Construye el proyecto para producción**: Si necesitas generar una versión para producción, puedes hacerlo con el siguiente comando:

    ```
    npm run build
    ```

Sigue estos pasos para configurar y ejecutar el entorno de desarrollo del frontend de Bear Watcher. Para el funcionamiento completo de la aplicación, asegúrate también de configurar los servicios del backend según las instrucciones proporcionadas en su respectivo README.


## Pasos de Instalacion

Clonamos el repositorio dentro de el se encontraran 2 carpetas 
Backend
Se encuentran 3 carpetas el MQTT, Flask y Mosquito


 ### Flask
```docker
docker build -t flask_image .
docker-compose up
```
Esto hace funcionar la base de datos de postgre y la API de Flask

### Mosquitto
```docker
docker build -t mosquitto_image .
docker-compose up
```

### MQTT
```docker
pip install -r requirements.txt
python3 server.py 
python3 ClientDB.py
python3 CLientModel1.py
python3 ClientCorreo.py
```
Dentro de server.py se debemos especificar la interfaz de escucha y dentro de correo debesmoa autenticarnos e indicar el host de destino

## Estructura del FrontEnd en React
![7](https://github.com/jorgergo02/bear_watcher/assets/102307137/219b4719-88f8-4fad-9817-b982a0708d48)

![8](https://github.com/jorgergo02/bear_watcher/assets/102307137/6d4a08b6-31fc-4c73-ba9e-caabd44d93bb)

## Capturas de pantalla de la interfaz de usuario

### Dashboard
<img width="1440" alt="image" src="https://github.com/jorgergo02/bear_watcher/blob/main/src/assets/e51d02b4-7caa-48f8-a9e4-20e6126dbcea.jpg">

### Tabla de amenazas
<img width="1431" alt="image" src="https://github.com/jorgergo02/bear_watcher/assets/102307137/7dfb3271-2bb6-4bfd-8d69-bf06fe913094">


### Backend
Aqui describimos las tecnologías utilizadas para el backend, incluyendo captura de información del tráfico, entrenamiento de modelos de inteligencia artificial y almacenamiento de resultados.

Para crear los modelos de entrenamiento de Inteligencia Artifical se utilizaron arquitecturas de red neuronal:
  - Bayesian Neural Network (BNN)

Para la parte del almacenamiento de datos utilizamos:
  -PostgreSQL
  -Protocolo MQTT


## Capturas de pantalla del back
En la imagen anexada podemos ver commo de manera efectiva se detecto una anomalia, esta se nos comento por parte del equipo de SISA, que efectivamente lo era y que nuestro modelo es acertado en ese momento.

<img width="1431" alt="image" src="https://github.com/jorgergo02/bear_watcher/blob/main/src/assets/vuln_1.jpg">

## Capturas de trafico
Se utilizaron las herramientas de:
  - Wireshark
  - Tshark: Se utiliza para poder realizar lo que hace wireshark pero a nivel de línea de comandos, tshark esta utilizandose a partir de un script en python para poder hacer la escucha de la red y la caputra de los paquetes sin la necesidad de estar corriendo wireshark como tal.
  - Lua:(alternativa) Lua fue inicialmente pensado apra nuestra propuesta, a pesar de que al final no se utilizo es de valor mencionar su funcionamiento y porque se puede plantear como una alternativa.
  Lua  es un lenguaje de programación de scripting que esta especificamente diseñado para ser  integrado en aplicaciones. Lua se tenia planeado usarlo para escribir scripts que pueden extender la funcionalidad de Wireshark y directamente mandar en vivo desde wireshark a partir del script de Lua, los paquetes en un formato JSON, incluso agregando filtros personalizados. Por temas de tiempo de implementacion y como decision de equipo se opto por utilizar tshark.

## Fases del Hackathon
1. **Fase 1:** Presentación de la idea-solución con justificación.
2. **Fase 2:** Desarrollo del prototipo y entrega de evidencias.
3. **Fase 3:** Demostración del prototipo y pruebas funcionales ante el jurado.

## Recursos
- Equipo de red para hacer mirroring (proporcionado por SISA).

## Evaluación
El proyecto será evaluado en base a los siguientes criterios:
- Capacidad tecnológica
- Creatividad e innovación
- Originalidad y alto impacto
- Alcance de implementación
- Funcionalidad del prototipo

## Mimebros del equipo
- Dario Mejia Castillo
- Rodolfo de la O
- Jose Pablo  Poblette
- Jorge Ramon Gonzalez Ozorno
- Fabian Gonzalez Vera

## Mentores y Jurado
- Luis Gerson Melquiades, Director de Operaciones, SISA
- Enrique Sánchez, Gerente de Desarrollo, SISA
- Edgar Fuentes, Gerente de Soporte, SISA
- Ricardo Flores, Gerente de Proyectos, SISA
- Oscar Ibarra, Director General, SISA
- Omar Ibarra, Consejero Técnico, SISA

## Licencia
(Descripción de la licencia, si aplica)

## Cómo Contribuir
(Información sobre cómo otros desarrolladores pueden contribuir al proyecto)
