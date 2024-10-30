const btn1 = document.getElementById('btn-car-1');
const btn2 = document.getElementById('btn-car-2');
const box_3 = document.querySelector('.box-3');

btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'rgb(148, 194, 255)';
    btn1.style.color = 'white';

    btn2.style.backgroundColor = 'transparent';
    btn2.style.color = 'rgb(148, 194, 255)';

    box_3.style.right = '0%';

});

btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = 'rgb(148, 194, 255)';
    btn2.style.color = 'white';

    btn1.style.backgroundColor = 'transparent';
    btn1.style.color = 'rgb(148, 194, 255)';

    box_3.style.right = '100%';
});