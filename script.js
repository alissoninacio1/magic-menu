// instead of putting all active in all elements, I can add this class in all .list elements with JS - it's more cleaner 


const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

//function to click in all elements withou add onclick to each of them, just assign one class, loop for it and add an event
list.forEach((item) =>
item.addEventListener('click', activeLink))