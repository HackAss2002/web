/*
 $ - переменная для вызова библиотеки jQuery
 Аргументы у $ - селекторы DOM дерева, с которыми будет работать библиотека
 */
$('.main_body_main_information_pictures').slick({
    dots: true,
    arrows: false, // Отображение стрелок вперед/назад
    infinite: true, // Бесконечная прокрутка
    slidesToShow: 1, // Максимальное количество слайдов, которые будут показаны
    slidesToScroll: 1, // Количество слайдов, которые будут прокручены за один раз
    speed: 300, // Скорость прокрутки (в мс)
});