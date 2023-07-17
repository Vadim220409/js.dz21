// let openButton = document.querySelector(".open-button");
// let closeButton = document.querySelector(".close-button");
// let backdrop = document.querySelector(".js-backdrop");


// function openModal(){
//     backdrop.style.display = 'block';
// }

// function closeModal(){
//     backdrop.style.display = 'none'
// }

// openButton.addEventListener('click', openModal);

// closeButton.addEventListener('click', closeModal);

// closeButton.addEventListener('click', closeModal);

// backdrop.addEventListener('click', function(event) {
//     if (event.target === backdrop) {
//         closeModal();
//     }
// });








// let radios = document.getElementsByTagName("input");


// for (const radio of radios) {
//     radio.addEventListener('change', function() {
//         document.body.style.backgroundColor = this.value;
//     });
// }






// window.addEventListener('DOMContentLoaded', (event) => {
//     let nameInput = document.getElementById('name-input');
//     let nameOutput = document.getElementById('name-output');

//     nameInput.addEventListener('input', () => {
//         let name = nameInput.value.trim();
//         nameOutput.textContent = name === '' ? 'незнайомець' : name;
//     });
// });



let fontSizeControl = document.getElementById('font-size-control');
let text = document.getElementById('text');

  fontSizeControl.addEventListener('input', function() {
    let fontSize = fontSizeControl.value + 'px';
    text.style.fontSize = fontSize;
  });