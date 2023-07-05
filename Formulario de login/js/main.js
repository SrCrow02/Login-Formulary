const mode = document.getElementById('mode_icon')
const form = document.getElementById('login_form')

mode.addEventListener('click', () =>{
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        form.classList.add('dark')
        return
    } //Vendo se contam a class fa-moon

    mode.classList.add('fa-moon')
    mode.classList.add('fa-sun')
    form.classList.remove('dark')
})