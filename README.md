# Toolbox

## To DO
- [X] Se deben llamar al listado de archivos /v1/secret/files
- [X] Descargar cada file usando /v1/secret/file/{file} 
- [X] Formatear la información en los CSV:  
  - [X] Tener en cuenta que pueden existir archivos vacíos y líneas con error (que no tenga la cantidad de datos suficientes).
  - [X] Si una línea tiene error se debe descartar.
  - [X] También pueden existir errores al descargar un archivo.
- [X] Por cada archivo, se debe crear un objeto JSON que contenga las líneas válidas

-----------------------------
## OpenAPI Documentation

```bash
http://{{domain}}/api-docs/
```

## Run test
```bash
npm test
```
## Run project
### ... with NPM
```bash
npm start
```
### ... with Docker
```bash
$ docker compose -f docker-compose.local.yml build
$ docker compose -f docker-compose.local.yml up
```
## env file
```
NODE_ENV=dev
PORT=3001
TOOLBOX_URL=https://echo-serv.tbxnet.com
TOOLBOX_PK=aSuperSecretKey
```