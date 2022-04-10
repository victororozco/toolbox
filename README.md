# Toolbox

- [ ] Se deben llamar al listado de archivos /v1/secret/files
- [ ] Descargar cada file usando /v1/secret/file/{file} 
- [ ] Formatear la información en los CSV:  
  - [ ] Tener en cuenta que pueden existir archivos vacíos y líneas con error (que no tenga la cantidad de datos suficientes).    
  - [ ] Si una línea tiene error se debe descartar.
  - [ ] También pueden existir errores al descargar un archivo.
- [ ] Por cada archivo, se debe crear un objeto JSON que contenga las líneas válidas

