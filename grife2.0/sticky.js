document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');

    if (window.scrollY > 0) {
        header.classList.add('sticky'); // Adiciona a classe 'sticky' ao header
        
    } else {
        header.classList.remove('sticky'); // Remove a classe 'sticky' do header
       
});
