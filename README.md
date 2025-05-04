# SemilleroMega2
Semillero Mega Sprint 2
En este sprint se adecuo la responsabilidad en cada pestaña y migración a angular y type script
/n

1.- Responsabilidad, como se puede observar en la imagen cada pantalla cuenta con la configuración para ser responisve almenos para pc y teléfonos
![](/CapturasPantallaEntrega/Responsive1.png)
![](/CapturasPantallaEntrega/Responsive2.png)



2.- Las funciones de los menús son funcionales se entregaron en el sprint 1, lo que procedió ahora es validar con JS las sesiones en este caso los inicios de sesión como el usuario y contraseña, 


Esta imagen muestra que si las credenciales no son correctas no permite entrar y muestra el siguiente mensaje, para logarse se ocupa:


User: user@mega.com
Password: mega2025

![](/CapturasPantallaEntrega/contrasenia.png)


Para cuando se permite entrar nos arroja a la pestaña de movies 
![](/CapturasPantallaEntrega/verificacion.png)


3.- Las ventanas que necesitan almacenar datos se les dio funcionalidad como la de perfil permitiendo gaurdar y alamcenar datos del usuario ademas de cambio de foto.
Se le dio La validación para almacenar campos hacemos uso del Local Storage, para almacenar datos del usuario además permite cambiar la imagen de usuario cuando pulsamos sobre ell. 
![](/CapturasPantallaEntrega/perfil.png)
La interfaz presenta 3 botones, guardar, editar y sali.

El botón guardar: cuando los campos están vacíos permite guardar los datos.

El segundo botón editar permite editar los datos cuando ya se guardan los datos.

El botón salir nos permite salir a la pantalla inicial que es home.


4.- Ahora se agrago un archivo llamado 'detalle.js' para mostrar la informacion correspondiente de cada pelicula o serie y al ser dinamica solo se crearon objetos en lugar de una base de datos que en el futuro se cambiara para almacenar mas stock de peliculas,
una vez en la seccion de peliculas o series al pulsar cualquier elemento lo arroja a este tipo de ventana:


![](/CapturasPantallaEntrega/dinamicaScreen.png)

5.- Ahora empezamos la migración necesitamos la version de Angular 18 instalada: 


![](/CapturasPantallaEntrega/vAngular.png)

Para poder la version en angular cree una carpeta dentro del repo Llamada semillero-Angular, y los archivos de la version 1 en la carpeta normal version.

![](/CapturasPantallaEntrega/directorios.jpg)


Bueno creamos los packages para cada vista en el proyecto

![](/CapturasPantallaEntrega/packAngualr.jpg)

Ahora procedemos a conectar HTML Y CSS de las diferentes vistas










