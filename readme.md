# Week 3 - Challenge 4 (Weekend)

## Pokémon

### Esta aplicación tendrá tres páginas:

- Todos los pokémon.
- Mis pokémon.
- Detalle de pokémon.

El listado de todos los pokémon se alimentará de la PokéAPI, y deberá ir paginado.
El listado incluirá el nombre del pokemon y su imagen y deberá ir acompañado de dos botones, para avanzar y retroceder de página.
También debe mostrar el total de pokèmon mostrados vs. el total de pokèmon que existen (p.e. 10/1000).

El usuario debe poder añadir los pokémon que quiera a su listado local. El listado de Mis pokémon se alimentará de [una API local].
El usuario debería poder eliminar pokémon de su listado local, y también modificar algún/unos dato/s.

En cualquiera de los listados, el usuario debería poder ir al detalle de un pokémon, donde se le mostrarán más datos. A esta página de detalle se llega pasando una id por la URL (la id del pokémon que queremos ver).

BEM HTML semántico Testing

## Dudas:

- Teniendo el sass fuera de su carpeta "sass" como habíamos hecho al principio, es necesario realizar "npm run sass", o hay que colocarlo en algún lugar específico, o cambiar el comando de ejecución en package.json.
- Tampoco es necesario hacer el "npm start"?
- Hay que hacer siempre un npm run dev antes de cada push?
