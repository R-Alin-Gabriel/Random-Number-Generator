const number = document.querySelector('.number');
const btn = document.querySelector('.btn');

const generateNumber = () => {
    const randomNumber = Math.trunc(Math.random() *99 +1 );
    number.innerHTML = randomNumber
}

btn.addEventListener("click", generateNumber);