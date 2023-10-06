# Analizador de texto

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Boilerplate](#5-boilerplate)
* [6. Criterios de aceptación mínimos del proyecto](#6-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. Consideraciones generales

* Este proyecto lo resolvemos de manera **individual**.
* El rango de tiempo estimado para completar el proyecto es de 1 a 3 Sprints.
* Enfócate en aprender y no solamente en "completar" el proyecto.
* Te sugerimos que no intentes saberlo todo antes de empezar a codear.
  No te preocupes demasiado ahora por lo que _todavía_ no entiendas.
  Irás aprendiendo.

## 2. Preámbulo

![Una lupa sobre texto de libro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Un analizador de texto es una aplicación para extraer información útil de un
texto utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos. Otras métricas incluyen el análisis
de sentimientos, que utiliza técnicas de NLP para determinar el tono
general positivo, negativo o neutral del texto, y el análisis de
legibilidad, que utiliza algoritmos para evaluar la complejidad y la
legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información
valiosa y métricas sobre los textos que pueden ayudar a las usuarias a
tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, las usuarias pueden
obtener una comprensión más profunda de los textos.

## 3. Resumen del proyecto

En este proyecto crearás una aplicación web que servirá para que tu usuaria
pueda analizar un texto en el navegador mostrando una serie de indicadores y
métricas específicas sobre caracteres, letras, números, etc. Que hayan sido
enviadas como _input_ por ella. Lo harás utilizando HTML, CSS y JavaScript.

## 4. Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación debe permitir a la usuaria ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación debe calcular las siguientes métricas y actualizar el
resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Recuento de palabras**: la aplicación debe poder contar el número de
    palabras en el texto de entrada y mostrar este recuento a la usuaria
    - **Recuento de caracteres**: la aplicación debe poder contar el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y mostrar este recuento a la usuaria.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación debe poder contar el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento
    a la usuaria.
    - **Recuento de números**: la aplicación debe contar cúantos números hay en
    el texto de entrada y mostrar este recuento a la usuaria.
    - **Suma total de números**: la aplicación debe sumar todos los números que
    hay en el texto de entrada y mostrar el resultado a la usuaria.
    - **Longitud media de las palabras**: la aplicación debe calcular la
    longitud media de las palabras en el texto de entrada y mostrársela a la usuaria.

3. La aplicación debe permitir limpiar el contenido de la caja de texto haciendo
clic en un botón.

![Text analyzer demo](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650556-988dcd6f-bc46-473b-894c-888a66c9fe2d.gif "Text analyzer demo")

## 5. Boilerplate

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript
puro también conocido como Vanilla JavaScript.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_
es la estructura básica de un proyecto que sirve como un punto de partida con
archivos y configuración inicial de dependencias y tests.

El boilerplate que les damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js
```

### Descripción de scripts / archivos

* `README.md`: debes modificarlo para explicar la información necesaria para el
  uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones
  de diseño que tomaron.
* `.github/workflows`: esta carpeta contine la configuracion para la ejecution
  de Github Actions. No debes modificar esta carpeta ni su contenido.
* `docs/images`: contiene las imagenes de este README.
* `read-only/`: esta carpeta contiene las pruebas de criterios mínimos de
  aceptación y end-to-end. No debes modificar esta carpeta ni su contenido.
* [`src/index.html`](./src/index.html): este es el punto de entrada a tu
  aplicación. Este archivo debe contener tu HTML.
* [`src/style.css`](./src/style.css): este archivo debe contener las reglas de
  estilo. Queremos que escribas tus propias reglas, por eso NO está permitido el
  uso de frameworks de CSS (Bootstrap, Materialize, etc).
* [`src/analyzer.js`](./src/analyzer.js): acá debes implementar el objeto
  `analyzer`, el cual ya está _exportado_ en el _boilerplate_. Este objeto
  (`analyzer`) debe contener seis métodos:
  - `analyzer.getWordCount(text)`: esta función debe retornar el recuento de
  palabras que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCount(text)`: esta función debe retornar el recuento
  de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: esta función debe retornar
  el recuento de caracteres excluyendo espacios y signos de puntuación que se
  encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberCount(text)`: esta función debe retornar cúantos números
  se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberSum(text)`: esta función debe retornar la suma de todos
  los números que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getAverageWordLength(text)`: esta función debe retornar la longitud
  media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  En este caso usa 2 dígitos decimales.

  Para ejemplo de uso de cada función recomendamos ver el archivo
  [`test/analyzer.spec.js`](./test/analyzer.spec.js).

  _Nota:  para simplificar las funcionalidades, definiremos las palabras como
  un grupos de caracteres separados por espacios. Por ejemplo las palabras del
  texto de entrada `¡Si, Tú puedes hacerlo!` son cuatro:_

  - _`¡Si,`_
  - _`Tú`_
  - _`puedes`_
  - _`hacerlo!`_

* [`src/index.js`](./src/index.js): acá debes escuchar eventos del DOM, invocar
  los métodos del objeto `analyzer` según sea necesario y actualizar el resultado
  en la UI (interfaz de usuaria).
* [`test/analyzer.spec.js`](./test/analyzer.spec.js): este archivo contiene las
pruebas unitarias para los métodos del objeto `analyzer`.

***

#### Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

El comando `npm run deploy` puede ayudarte con esta tarea y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).

## 6. Criterios de aceptación mínimos del proyecto

A continuación encontrarás los criterios de aceptación mínimos del proyecto
relacionados con cada objetivo de aprendizaje.

### HTML

* **Uso de HTML semántico**

  - [ ] La aplicación tiene un encabezado conformado por un
  [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
  que es padre de un
  [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)
  con texto `Analizador de texto`. Para que puedas practicar más, estos
  elementos no pueden tener atributos `id`, ni `name`, ni `class`.

  - [ ] La aplicación usa un
  [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
  con un el atributo `name` en el valor `user-input` para permitir a la usuaria
  ingresar un texto. Para que puedas practicar más, este elemento no puede
  tener atributos `id`, ni `class`.

  - [ ] La aplicación usa un
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  con 6 hijos [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li),
  uno para mostrar cada métrica.  Para que puedas practicar más, estos
  elementos no pueden tener atributos `id` ni `name` ni hijos.

  - [ ] El [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  para mostrar el _recuento de palabras_ debe tener un atributo
  `data-testid` con valor `word-count`.

  - [ ] El [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  para mostrar el _recuento de caracteres_ debe tener un atributo
  `data-testid` con valor `character-count`.

  - [ ] El [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  para mostrar el
  _recuento de caracteres excluyendo espacios y signos de puntuación_
  debe tener un atributo
  `data-testid` con valor `character-no-spaces-count`.

  - [ ] El [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  para mostrar el _recuento de números_ debe tener un atributo
  `data-testid` con valor `number-count`.

  - [ ] El [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  para mostrar la _suma total de números_ debe tener un atributo
  `data-testid` con valor `number-sum`.

  - [ ] El [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  para mostrar la _longitud media de palabras_ debe tener un atributo
  `data-testid` con valor `word-length-average`.

  - [ ] La aplicación tiene un pie de página conformado por un
  [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
  que es padre de un
  [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
  que tiene como texto el nombre de la estudiante desarrolladora de la aplicación.
  Para que puedas practicar más, estos elementos no pueden
  tener atributos `id`, ni `name`, ni `class`.

  - [ ] La aplicación usa un
  [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  con el atributo `id` en el valor `reset-button` para permitir a la usuaria,
  mediante un clic, limpiar el contenido de la caja de texto.

### CSS

* **Uso de selectores de CSS**

  - [ ] La aplicación usa
  [`selectores CSS de tipo`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#type_selectors)
  para darle estilo al
  [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
  y al
  [`<footer>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer).

  - [ ] La aplicación usa
  [`selectores CSS de class`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)
  para darle estilo a los
  [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  descrito anteriormente.

  - [ ] La aplicación usa
  [`selectores de atributo`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
  para darle estilo al
  [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
  usando el atributo `name`.

  - [ ] La aplicación usa
  [`selectores CSS de ID`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#id_selectors)
  para darle estilo al
  [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  con el atributo `id` en el valor `reset-button`.

* **Modelo de caja (box model): border, margen, padding**

  - [ ] Las
  [`clases css`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#class_selectors)
  de los
  [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
  hijos del
  [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
  definen un estilo usando las propiedades del
  [modelo de caja](https://cssreference.io/box-model/),
  ([`background`](https://cssreference.io/backgrounds/),
  `border`,
  [`margin`](https://cssreference.io/property/margin/),
  [`padding`](https://cssreference.io/property/padding/)).

### Web APIs

* **Uso de selectores del DOM**

  - [ ] La aplicación usa el
  [`selector del DOM querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

  - [ ] La aplicación usa el
  [`selector del DOM getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).

* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [ ] La aplicación registra un
  [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
  para escuchar el evento `input` del `<textarea>` para actualizar las métricas
  cuando se haga escriba en el cuadro de texto.

  - [ ] La aplicación registra un
  [Event Listener](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
  para escuchar el evento `click` del `<button>` que limpia el contenido de la
  caja de texto.

* **Manipulación dinámica del DOM**
  - [ ] La aplicación actualiza el atributo
  [`textContent`](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
  o
  [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  de los `<li>` que mostrar las métricas del texto.

### JavaScript

* **Tipos de datos primitivos**

  - [ ] La aplicación convierte valores tipo `string` a tipo `number`.

* **Strings (cadenas de caracteres)**

  - [ ] La aplicación usa métodos para manipular strings como
  [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split),
  [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
  o
  [`replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

* **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con
  [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  y
  [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

  - [ ] La aplicación NO declara variables con  `var`.

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement
  [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
  para evaluar condiciones.

* **Uso de bucles/ciclos (while, for, for..of)**

  - [ ] La aplicación usa el statement
  [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  para crear un bucle.

* **Funciones (params, args, return)**

  - [ ] El objeto `analyzer` contiene un método `getWordCount` para calcular el
  recuento de palabras de un texto.

  - [ ] El objeto `analyzer` contiene un método `getCharacterCount` para calcular
  el recuento de caracteres de un texto.

  - [ ] El objeto `analyzer` contiene un método `getCharacterCountExcludingSpaces`
  para calcular el recuento de caracteres excluyendo espacios y signos de
  puntuación de un texto.

  - [ ] El objeto `analyzer` contiene un método `getNumbersCount` para contar
  cúantos números hay en un texto.

  - [ ] El objeto `analyzer` contiene un método `getNumbersSum` para la suma
  longitud media de los números en un texto.

  - [ ] El objeto `analyzer` contiene un método `getAverageWordLength` para
  calcular la longitud media de las palabras en un texto.

* **Pruebas unitarias (unit tests)**

  - [ ] Se pasan todas las pruebas unitarias.

* **Módulos de ECMAScript (ES Modules)**

  - [ ] La aplicación usan
  [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  y
  [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  para importar y exportar valores desde un modulo JavaScript.

* **Uso de linter (ESLINT)**

  - [ ] Al ejecutar el linter no se muestran errores de formato y estilo.

* **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

  - [ ] En el código se utilizan identificadores descriptivos para variables
  y funciones.

### Control de Versiones (Git y GitHub)

* **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

  - [ ] La estudiante creó una cuenta en Github.

  - [ ] La estudiante configuró su cuenta de Github con una llave SSH.

* **Git: Control de versiones con git (clone, add, commit, push)**

  - [ ] La estudiante creó un _fork_ para su proyecto.

  - [ ] La estudiante clonó su repositorio usando una llave SSH.

  - [ ] La estudiante creó _commits_ y los guardó en Github.

* **GitHub: Despliegue con GitHub Pages**

  - [ ] La aplicación está desplegada en Github Pages.

### Centrado en la usuaria

* **Diseñar y desarrollar un producto o servicio poniendo a las
usuarias en el centro**

### Diseño de producto

* **Diseñar en distintos niveles de fidelidad**

  - [ ] La estudiante creó prototipos de baja fidelidad para la UI (interfaz gŕafica).

* **Seguir los principios básicos de diseño visual**

  - [ ] Se tuvieron en cuenta las reglas básica del
  [diseño visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO)
  para diseñar la UI (interfáz gráfica)


------------------------------------------------------------


El proyecto se comenzo identificando las distintas actividades que se debian realizar, para ello se creo un Planning del proyecto en el sitio web https://trello.com/ . De esta forma se separo las distintas actividades en otras mas pequeñas para ir poco a poco completandolas sin olvidar ninguna.

<img src="./Planning Text Analyzer.jpg" />
*Planning del proyecto en el Sprint final.
<br>
Ademas se creo un prototipo con el fin de identificar el interfaz visual del proyecto que fuera lo mas amigable, legible y entendible para el usuario del proyecto, para que asi la funcionalidad del proyecto no se viera afectada.


<img src="./Prototipo text analyzer.jpg" />
*Prototipo del Analizador de Texto.
<br>
Con todo esto se realizo el codigo del proyecto en Visual Studio Code, siguiendo cada una de las especificaciones requeridas señaladas anteriormente.

<img src="./codigo.jpg" />
*Codigos en Visual Studio Code.
<br>
Finalmente el proyecto se concreto con los parametros exigidos utilizando 4 sprints.
<img src="./web text analyzer.jpg" />
*Proyecto Analizador de texto finalizado.