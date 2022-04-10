# Toolbox

- [X] Se deben llamar al listado de archivos /v1/secret/files
- [X] Descargar cada file usando /v1/secret/file/{file} 
- [X] Formatear la información en los CSV:  
  - [X] Tener en cuenta que pueden existir archivos vacíos y líneas con error (que no tenga la cantidad de datos suficientes).
  - [X] Si una línea tiene error se debe descartar.
  - [X] También pueden existir errores al descargar un archivo.
- [X] Por cada archivo, se debe crear un objeto JSON que contenga las líneas válidas

