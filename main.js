const alpha = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const main = document.querySelector('ol');

document.body.addEventListener('keydown', function(event) {
    const randLetter = alpha[Math.floor(Math.random() * 26)];
    console.log(randLetter);
    const type = event.key;
    //console.log(event.key);
    if (type == randLetter) {
    let template = `
         <h2>You guessed the secret letter, ${randLetter}!</h2>
    `;
    const text = document.createElement("ol");
    text.innerHTML = template;
    main.appendChild(text);
    }
})