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

Creamos cada  componente dentro de Pages donde estara cada vista que tenmos de html, las carpetas se ven de la siguiente forma:


![](/CapturasPantallaEntrega/migracionAngularTS.png)


Son lo modulos son con su componente HMLT,JS,CSS, pero tengo unas incosistencias en los paths o rutas dado que no lee imagenes, o no muestra la vista como debe ser ejemplo si solo ejecutop el html y luego de angular se ve asi



Ejmplo la pantalla de bienvenida del lado izquiero tenemos el la vista ejeuta desde angular y del otro solo de live sever del HTML ambos desde visual code.

![](/CapturasPantallaEntrega/comparacion.png)


Ahora despues de presionar el boton de login


![](/CapturasPantallaEntrega/comparacion2.png)


Sigo en reparacion y consultando documentacion porqiue no puedo avanzar a la fase de testing del 3  sprint espro poder resolverlo en la semana. 

Puntos pendientes y logradps del 3 sprint


Puntos cubietos:
  Responisvidad
  Performance 40$

  
Puntos Faltantes:
  Implementacionde asincronos
  RXJS
  Testing

Continuando con la  migracion a angular y esta casi completa como se puede apreciar en estas imagenes

![](/CapturasPantallaEntrega/migraAnfular1.png)
![](/CapturasPantallaEntrega/migraAnfular2.png)
![](/CapturasPantallaEntrega/migraAnfular3.png)


solo tengo un detalle con el componente detalle.component.html Cuando hago el llamado desde movies o series no me carga los datos de la pelicula entra a la pagina pero no carga elemetos


![](/CapturasPantallaEntrega/migraAnfular4.png)

Puse un console log para ver si cargaba detalle. hmtl y si pero no carga elemntos como ya mencione al parecer creo que no me esta guardadno el id en el local storage y no me esta enlazando a la pagina correspondiente
Si pude observar en la parte de movies hago el llamdo con un boton que me redirecciona al metodo que verdetalle donde almaceno el ID y llamo al componente detalle, si vamos al html de detalle.component.html tiene los datos a caragar pero no refleja nada en la vista
sigo investigando como cargar esos estilos espero tenerlos para el fin de semana para completar el sprint 3

![](/CapturasPantallaEntrega/migraAnfular5.png)








