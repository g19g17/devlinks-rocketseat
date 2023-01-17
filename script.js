function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector('#profile img')
  
  html.classList.toggle('light')
  
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/cof-profile-light.png')
    img.setAttribute("alt", "foto de perfil do usuário g19g17 com tema natalino")
  } else {
    img.setAttribute('src', './assets/cof-profile-dark.png')
    img.setAttribute("alt", "foto de perfil do usuário g19g17 sem tema natalino")
  }
}