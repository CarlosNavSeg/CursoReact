El frontend de estilo clásico era de otra manera, teníamos la lógica y los estilos separados, y luego las plantillas de cada sección de la página(contacto, about...), y en interfaces más complicadas, más lógicas diferenciadas y una lógica común.
La encapsulación que añade react, lo que hace es contener en esa lógica, los estilos y las plantillas. Para el caso, lo lógico es tener un supracomponente, que es App, y más componentes anidados.
El tipo de diseño que vamos a conseguir lo denominaremos "atómico", y para explicarlo diremos que los átomos forman moléculas, las moléculas, organismos y esos organismos forman plantillas y páginas.
Un componente esencial del diseño en react es el javascript moderno y su sintaxis:
Los identificadores: el principal componente que tenemos es el let, que la idea es que sustituya al var cuando se pueda
Las funciones flecha o lambda: se usan para hacer el volcado de un resultado (foreach(element-> ({

}))) 
Los templates de string(string literals): Son partes de un String que en vez de evaluarse como parte del String se evalúan como códidgo, para un array de libs, introducir ${libs[0]}, devolvería el primer elemento de libs.
Destructuración: La deestructuración consiste en usar como parámetros de funciones índices de arrays compuestos, y que devuelvan su valor. También, si quisieramos sacar otro objeto igual, usaríamos ...nomObjeto + el nombre del atributo que queremos cambiar
Las clases: Son clases del lenguaje orientado a objetos.
Los modulos: Son clases que exportamos hacia otros archivos.
La anatomía de React, la reconciliación:
Cuando hacemos modificaciones en archivos HTML, se recorre todo el árbol, para mostrarla en la pantalla, React para este caso lo que hace es crear un DOM Virtual, en el que actualiza lo que pasa en el DOM, para poder aislar las modificaciones en vez de tener que imprimir todo por pantalla, haciendo así respirar al navegador.
El ecosistema de React:
La primera funcionalidad aditiva con la que trabaja React, es el render, que es la que vemos con el React DOM, con la virtualización del DOM y la modificación de la diferencia aislada.
La segunda el routing, para hacerse cargo de las rutas de la App.
La tercera el state management, que se basa en tratar los datos de nuestra aplicación para comunicar los datos, redux.
La de los formularios.
La de los tests, Jest recomendada.
El empaquetado, que viene muy bien con las estructuras de datos tan complicadas que tenemos.
La estructura de una aplicación react tendría que tener dentro de la carpeta del proyecto, las carpetas src y dist y el package.json y todas las config files.
Lo más lógico a la hora de estructurar los componentes es hacerlo por componentes, que cada componente tenga su lógica, estilos y declaración.
Ya hemos visto el lint para el formateo del código, ahora veremos prettier para los espaciados, la sangría y cosas similares. Una de estas herramientas sería prettier.
El render es una de las herramientas que se utilizan para formar aplicaciones con React, ya que se encarga de darle forma a los componentes que diseñamos. Los componentes en React se pueden equiparar a las funciones en Javascript, reciben parámetros y devuelven el cálculo que se ha derivado de estos(datos, vista).
Aunque existe el diseño por componentes clase, React recomienda que usemos los componentes funcionales.
Una función pura es aquella cuya funcionalidad solo depende de los parámetros de entrada, es determinista, fácil de testear y fácil de optimizar, para unos parámetros determinados devolver simepre la misma vista. Será en la declaración donde pasemos las props de la vista. Las proptypes aseguran el tipado de las propiedades, podemos con ellas asegurar el tipo o la obligación de su uso, así como darle un valor por defecto.
El estado se usa, así como los props para modificar la vista. El useState() se usa para definir el estado por defecto que va a tener el componente, esta función devuelve un array con el value y un setValue, que valdrá para cambiarlo.
La herencia vertical no existe en React, para heredar estados es conveniente gestionar el estado lo más arriba posible.
El ciclo de vida de un componente clásico React: el primer paso desde su vida hasta su muerte es su montado, después recibe parámetros, y cada vez que se hace un setstate estos cambian. Cuando un componente se renderiza al principio, tenemos el componentDidMount() para asegurar el montado, después de recibir parámetros, se recibe el estado derivado del componente, se comprueba si debería actualizarse el componente, si es así, pasa por el render, y luego pasamos al componentDidUpdate(), antes del componentWillUnomunt() y su muerte.
En un componente funcional, por la otra parte, solo tenemos el render, y para controlarlo usaremos el useEffect().