const button = document.querySelector('open_button')

const Container = {
    container: document.querySelector('container-02'),

    open: function() {
        Container.container.classList.add('open')},
    close: function() {
        Container.container.classList.remove('open')}
}




.open_button.onclick = function(event) {
    event.preventDefault()


    Container.open
}