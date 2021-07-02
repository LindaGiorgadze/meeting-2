
// const button = document.querySelector('button');

const button = document.querySelectorAll('button');
const clickBtn = document.querySelector('.click');
const text = document.querySelector('.text');

console.log(text)



clickBtn.addEventListener('click', (event) => {
    text.style.display = 'block';
})