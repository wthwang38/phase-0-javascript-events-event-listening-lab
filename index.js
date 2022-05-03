function addingEventListener() {
    input.addEventListener('click', alertMe);

}


const input = document.querySelector('input');
console.log(input);


function alertMe(e) {
    alert("I was CLICKED!");
    console.log(e)
}

addingEventListener();
