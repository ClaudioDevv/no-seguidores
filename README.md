# NoSeguidores
🔗 **[noseguidores.com](https://noseguidores.com)**  

## ¿Qué es NoSeguidores?
NoSeguidores es una herramienta para resolver una cuestión que todos hemos querido saber alguna vez: comprobar las personas que no nos siguen en Instagram.

Es 100% **seguro** ya que tus datos nunca salen de tu dispositivo hacia servidores externos de Instagram. Solo envías los archivos JSON que tú mismo descargas.

### Características
- Interfaz moderna y diseño responsive
- Máxima seguridad: Procesamiento local de los datos
- Motor de procesamiento en C++ (Soporte multi-lenguaje)
- Sin registros ni contraseñas
- Gratuito y Open Source

## ¿Cómo usar NoSeguidores?
La forma de utilizar esta herramienta es muy sencilla:
1. Accede a la web [noseguidores.com](https://noseguidores.com)
2. Sigue las instrucciones explicadas paso a paso de cómo conseguir los archivos desde Instagram para garantizar máxima seguridad
3. Introduce los archivos en el formulario requerido
4. La web mostrará los resultados

## Demo
<!-- Insertar demo -->

## Explicación a Alto Nivel
1. El usuario sube los archivos descargados de Instagram (`followers.json` y `following.json`).  
2. El backend recibe los archivos y ejecuta un binario en **C++**.
3. El programa compara los conjuntos de seguidos y seguidores, devolviendo la lista de personas a las que sigues pero que no te siguen de vuelta.  
4. El backend envía los resultados al frontend.  
5. El frontend los muestra en una interfaz moderna y fácil de usar.

## Stack tecnológico
- Para el despliegue del frontend utilizamos Vercel
- Para el despliegue del backend usamos Render junto a UptimeRobot para mandar peticiones cada 5 minutos y el servidor no se "duerma" ya que uso el plan gratuito
- El frontend está hecho en HTML, CSS y JS vanilla
- El backend está construido en Node y express
- El programa binario está hecho en C++
- HTTPS habilitado

### ¿Cómo ejecutarlo en local?
1. Clona el respositorio
2. Compilar el binario
    cd backend/cplusplus
    g++ -o noseguidores main.cpp ./src/*.cpp -I ./include -static
3. Instalar dependencias del backend
    pnpm install
4. Inicia el servidor desde la carpeta de backend
    cd backend && pnpm run dev 
5. Inicia el frontend
    cd .. && npx servor ./frontend
6. Añade los archivos al formulario

### Estado del proyecto
**Estadísticas actuales (Febrero 2026)**
Desplegado y funcionando en producción
Usado por +800 usuarios reales verificados por Google Analytics
Promocionado en redes sociales

<!-- Aquí iría la imagen de los usuarios -->

### Licencia
MIT License — ver [LICENSE](LICENSE)

### Autor
Claudio Rivas, estudiante de Ingeniería Informática en la Universidad de Granada

### Comentarios
Inicialmente lo desarrollé en C++ porque era el lenguaje que dominaba. Más tarde comprendí que la misma lógica se puede implementar en JavaScript con mejor integración. Decidí mantener la versión en C++ porque muestra mi capacidad de integrar múltiples lenguajes en un mismo proyecto, aunque una versión en JS sería más eficiente en este caso.