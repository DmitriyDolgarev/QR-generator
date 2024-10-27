/*
Реализуйте функционал генерации QR-кода с помощью следующего алгоритма:
Определите URL API для создания QR-кодов.
На странице найдите все необходимые HTML-элементы: форму, поле ввода и блок для отображения QR-кода.
Добавьте обработчик события для кнопки, который:
Остановит стандартное поведение формы при нажатии.
Очистит блок для QR-кода перед генерацией нового кода.
Соберет данные из поля ввода и сформирует запрос к API для получения изображения QR-кода.
Создаст HTML-разметку для отображения QR-кода.
Добавит полученное изображение на страницу и применит необходимые стили

Первая часть запроса https://api.qrserver.com/v1/create-qr-code/?size=160×160&data= */

let input = document.getElementById("input");
let button = document.getElementsByClassName("btn");
let cardQR = document.getElementById("card-qr");

button[0].addEventListener('click', (event) => {
    event.preventDefault();
    cardQR.innerHTML = "";

    let inputValue = input.value;
    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}!&size=160x160`;

    cardQR.classList.add("open");
    cardQR.innerHTML = `<img src="${url}" alt="" title="" />`;
})
