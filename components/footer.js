export function addFooter(){
    const footer = document.querySelector('footer');
    footer.innerHTML=` 
    <svg style="overflow:visible" class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#1d277d" fill-opacity="0.8" d="M0,32L60,26.7C120,21,240,11,360,21.3C480,32,600,64,720,112C840,160,960,224,1080,261.3C1200,299,1320,309,1380,314.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1d277d" fill-opacity="0.6" d="M0,160L60,170.7C120,181,240,203,360,176C480,149,600,75,720,64C840,53,960,107,1080,144C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1d277d" fill-opacity="0.7" d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,192C840,160,960,96,1080,80C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
  </svg>
  <div class="container-fluid">
    <div class="row info align-items-center">
      <div class="col-sm-12 col-lg-4">
        <img src="../img/Logo.png" alt="">
      </div>
      <div class="col-sm-12 col-lg-4">
        <p>
          <i class="fa-solid fa-envelope"></i>
          <span> EMAIL: </span>
          contacto@youssefmedmourh.com
        </p>
      </div>
      <div class="col-sm-12 col-lg-4">
        <p>
          <i class="fa-solid fa-location-dot"></i>
           <span> LOCALIZACIÓN: </span>  
           Donostia, Gipuzkoa
          </p>
      </div>             
     </div>
  <div class="row">
    <div class="social-icon">
      <a href="https://es.linkedin.com/in/youssef-medmourh-6780b8197"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/YoussefDevp"><i class="fa-brands fa-github"></i></a>
      <a href="https://twitter.com/Youssef_Devp"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <div class="social-links">
      <ul>
        <li><a href="./index.html/#">Inicio</a></li>
        <li><a href="./index.html/#about">Sobre Mí</a></li>
        <li><a href="#work">Proyectos</a></li>
        <li><a href="#contact">Contacta conmigo</a></li>
      </ul>
    </div>
    <p>&copy; Youssef Medmourh All Right Reserved 2023.</p>
  </div>
</div>`         
}

