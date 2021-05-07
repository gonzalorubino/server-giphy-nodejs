# Servidor en NodeJS y ExpressJS

### Server para explicar brevemente como construir un servicio API

Instrucciones:

- Instalar Node (recomiendo version LTS) : https://nodejs.org/es/download/
- Clonen el repo : git clone <repo>
- Entren a la carpeta clonada
- Ejecutan `npm install` para poder instalar las dependencias necesarias
- En el raiz, crean un archivo `.env` (https://www.npmjs.com/package/dotenv) y escriben dentro:
  `API_KEY=PONEN_SU_API_KEY_ACA`
- Si no entendieron el punto anterior, cambien en server.js, la linea 14 y agreguen su API KEY
- Ejecutan `npm start` para poder arrancar el server => Deberia aparecer: Server Online...
- Pueden entrar por el browser a `http://localhost:8080/trending` o `http://localhost:8080/search/palabraabuscar`
- Deberia retornarles un JSON por consola y por browser
- Para ver mas bonito el JSON en Chrome => https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=es
- Lectura Adicional: https://stackabuse.com/building-a-rest-api-with-node-and-express/
