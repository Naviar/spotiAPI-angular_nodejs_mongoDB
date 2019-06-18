# spotiAPI-angular_nodejs_mongoDB

# CREAR BASE DE DATOS NECESARIA (MONGODB)
1) iniciar mongo en el terminal escribir el comando : mongo. (esto debe iniciar mongo).
2) escribir en el terminal: >use spoti (esto creara la bd).


# instrucciones para correr el programa.

# BACK:
1)iniciar el servidor con la terminal ir a la ruta : prueba-cobrandoSAS\back.
2)correr el comando en el terminal: npm install (descargar los modulos de node).
3)ejecutar el comado npm run dev.(en el terminal debe salir que el servidor esta corriendo en el puerto:3000 y la bd esta conectada).

# FRONT:
1) ir a la ruta: prueba-cobrandoSAS\spotiapp
2) levantar el front mediante el comando : ng serve -o (se debe abrir el navegador por defecto)

* el programa muestra una interfaz donde el usuario puede escribir el nombre de una cancion y al oprimir enter o el boton de buscar , el front se comunica con el back mediante una peticion http get , el servidor recibe la peticion y se comunica con el API de spotify y obtiene las canciones que cumplen con el criterio de busqueda solicitado por el cliente(front) , luego de obetener los datos guarda la informacion en la BD spoti de mongo y responde al front mediante formato JSON el cual se encarga de mostrar los resultados de las canciones encontradas.

# verificar data en mongoDB
1) abrir el terminal y escribir : mongo. 
2) escribir el comando: show dbs (se deben ver las bases de datos en la cual debe estar una llamada spoti).
3) escribir el comando : use spoti (el terminal debe repsponder con un mensaje "switched to db spoti").
4) mediante el comando : db.albums.count(); (muestra el numero de items guardados de las busquedas que ha hecho el usuario).
5)mediante el comando : db.albums.find(); (se pueden ver todas las colecciones guardadas en la BD de las busquedas del usuario).
