# Restaurante API Hackademy

Backend para el reto restaurante, este backend estará alojado en IBM Cloud Foundry; la configuración de despliegue para CF se encuentra en el archivo _manifest.yml_.

## Endpoints (Nombre - Método)

* /meals - GET : Retorna una lista con todos los platillos registrados.
* /meals - Post : Recibe un JSON con 4 atributos; name (string), description (string), price (number), picture (string) para crear un nuevo registro de platillo con un id automático.

## Esquema BD

![tb_meals](https://i.imgur.com/jmFAt1j.png)
