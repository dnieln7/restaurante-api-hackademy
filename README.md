# Restaurante API Hackademy

Backend para el reto restaurante, este backend estará alojado en IBM Cloud Foundry; la configuración de despliegue para CF se encuentra en el archivo _manifest.yml_.

## Endpoints (Nombre - Método)

* /meals - GET : Retorna una lista con todos los platillos registrados.
* /meals/admin - POST (protegido) : Recibe un JSON con 4 atributos; name (string), description (string), price (number), picture (string) para crear un nuevo registro de platillo con un id automático.

## Autenticación

Para obtener un token de acceso es necesario realizar un POST a la endpoint _/auth/login_ incluyendo un username y password válidos.

## Autorización  

Para acceder a los endpoints protegidos se debe incluir el token de acceso en la cabecera de la peticion de la forma: 

````
"Authorization" : "Bearer access_token" 
```` 

## Esquema BD

![tb_meals](https://i.imgur.com/jmFAt1j.png)
