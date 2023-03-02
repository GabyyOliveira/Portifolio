// ======= MENU SHOW ======= //
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ===== SCROLL ACTIVE ===== //
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const src = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

src.reveal('.home_title', {})
src.reveal('.home_scroll', {delay: 200})
src.reveal('.home_img', {origin: 'right', delay: 400})


src.reveal('.sobre_img', {delay: 500})
src.reveal('.sobre_subtitle', {delay:300})
src.reveal('.sobre_profissao', {delay: 400})
src.reveal('.sobre_text', {delay:500})
src.reveal('.sobre_social-icon', {delay: 600, interval: 200})


src.reveal('.skills_subtitle', {})
src.reveal('.skills_name', {distance: '20px', delay:50, interval:100})
src.reveal('.skills_img', {delay:400})

src.reveal('.portfolio_img', {interval: 200})

src.reveal('.contato_subtitle', {})
src.reveal('.contato_text', {interval: 200})
src.reveal('.contato_input', {delay:400})
src.reveal('.contato_button', {delay:600})

//dropdown
function show(anything){
    document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active2')
}

// traduções
function ingles(){
    // nav translate
    $('#homet').text('Home')
    $('.sobret').text('About')
    $('.skillst').text('Skills')
    $('.port').text('Portfolio')
    $('.contact').text('Contact')

    $('#he').text("HE")
    $('#llo').text('LLO.')

    $('#sobre2').text('About')
    $('#eusou').text("I'am Gabyy Oliveira")
    $('#profissao').text("Web Developer Full Stack")
    $('.sobre_text').text("I'm 19 years old, I'm from Campinas/SP. I am an enthusiast of the world of Technology, I like to learn and always go further!")

    $('#skills2').text('Skills')
    $('#dev').text('Development')
    $('#others').text('Others')
    $('#meth').text("Agile Methodologies")

    $('.detalhes').text("View Details")

    $('#text-cont').text("I am always interested in hearing suggestions and new opportunities for professional development!")
    $("#email").text("Send Email")
}

function portugues(){
    // nav translate
    $('#homet').text('Home')
    $('.sobret').text('Sobre')
    $('.skillst').text('Habilidades')
    $('.port').text('Portfólio')
    $('.contact').text('Contato')

    $('#he').text("HE")
    $('#llo').text('LLO.')


    $('#eusou').text("Eu sou a Gabyy Oliveira")
    $('#profissao').text("Desenvolvedora Web Full Stack")
    $('.sobre_text').text(`Tenho 19 anos, sou de Campinas/SP. Sou uma entusiasta do mundo da Tecnologia, Gosto de aprender e sempre ir além! `)

    $('#dev').text('Desenvolvimento')
    $('#others').text('Outros')
    $('#meth').text("Metodologias Ágeis")

    $('.detalhes').text("Ver Detalhes")

    $('#text-cont').text("Estou sempre interessada em ouvir sugestões e novas oportunidades de desenvolvimento profissional!")
    $("#email").text("Enviar Email")
}


