export function addNav(){
    const nav = document.querySelector('nav');
    nav.innerHTML=`
    <input type="checkbox" id="nav-toggle" class="nav-toggle">
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <ul>
      <li><a class="nav-link" href="../index.html">Inicio</a></li>
      <li><a class="nav-link" href="../index.html/#about">Sobre Mi</a></li>
      <li><a class="nav-link" href="../index.html/#work">Mis Proyectos</a></li>
      <li><a class="nav-link" href="../index.html/#contact">Contacto</a></li>
    </ul>`
}