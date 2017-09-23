# Типичные ошибки

## 1.После отправки pull-request проверяйте наличие конфликтов! ![Alt text](https://monosnap.com/file/dLsopd8TdMYzFGcN3c44FKp2NoQOnp.png)
Помните! Если вы собираетесь делать ДЗ № 6, то вам и нужно отбранчовываться от ветки dz_6 `git checkout dz_6`, а не от master `git checkout -b dz_6`. Вот эта буквочка `-b` многое значит! https://git-scm.com/book/ru/v1/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B2%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8-%D1%81%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D1%8F


## 2.Про именование классов:
1) https://habrahabr.ru/post/303174/
2) https://habrahabr.ru/post/308680/

Они НЕ являются истинной в последней инстанции (то есть там НЕ ВСЁ правильно), но общие принципы именования они должны помочь тебе понять.

За именование классов типа `footer-1, footer-2`, `.fdgfdfgsg, .kkk`, `.shapka-sayta, .podval` - будут лЯщи (и много)!

### 2.1. Пункт № 1: Назначайте классы как можно ниже по DOM-дереву в статье https://habrahabr.ru/post/303174/ и Пункт № 5: Много селекторов / Большая вложенность селекторов в статье https://habrahabr.ru/post/308680/



## 3.Пожалуйста, добавляйте пустую строку в конце файлов: 
https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline,
(чтобы GitHub меня не кошмарил)



## 4.Неправильное подключение шрифтов
Как  нужно: http://nicothin.pro/page/web-fonts

То есть у вас это должно выглядеть примерно так:

@font-face { font-family: "**Arial**"; font-weight: normal; font-style: normal; src: url("..... ArialRegular.eot"); ... <br>
@font-face { font-family: "**Arial**"; font-weight: **bold**; font-style: normal; src: url("..... **ArialBold.eot**"); ...<br>
@font-face { font-family: "**Arial**"; font-weight: normal; font-style: **italic;** src: url("..... **ArialItalic.eot**"); ...<br>



## 5.Ешё раз про box-sizing и как правильно его нужно использовать: https://css-tricks.com/box-sizing/



## 6. Не нужно задавать жёстко высоту (типа такого `height: 700px`).
Chrome умный - и он автоматически подстраивает ВЫСОТУ блоков под размер текста и картинок внутри. Если текста не будет совсем, но нужно сохранить структуру вёрстки, то есть интересное CSS-свойство для высоты min-height http://htmlbook.ru/css/min-height



## 7.Неправильное использование `.clearfix`
Как нужно: http://xiper.net/collect/html-and-css-tricks/css-tricks/clearfix
Как можно в 2017 году (внизу статьи): https://css-tricks.com/snippets/css/clear-fix/



## 8.Семантика тегов. 
В HTML есть много интересных тегов, таких как aside, strong, button, main, menu и прочие. 
https://habrahabr.ru/post/124993/
http://www.wisdomweb.ru/HTML5/semantic.php


## 9.`::before` и `::after` пишется с 2-мя двоеточиями `::`, так как мы используем CSS стандарта 3.0, а не CSS 2.0
http://htmlbook.ru/css3/after - 3.0
http://htmlbook.ru/css/after - 2.0
В чём разница: http://css-live.ru/articles-css/impossible-pseudos.html

## 10. НЕ НУЖНО использовать вендорные префиксы в ИСХОДНЫХ КОДАХ
Сравним 2 кусочка кода:
### Кусочек № 1
<pre>
.example {
    display: flex;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
    border-radius: 0;
}
</pre>
### Кусочек № 2
<pre>
.example {
    display: box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    transition: all .5s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));
    background: -webkit-linear-gradient(top, white, black);
    background: -moz-linear-gradient(top, white, black);
    background: -o-linear-gradient(top, white, black);
    background: linear-gradient(to bottom, white, black);
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
}
</pre>
Из этих 2-х примеров очевидно, что легче проверять и исправлять ошибки в **кусочке № 1**
Если вы хотите использовать вендорные префиксы, то я разрешаю делать это ТОЛЬКО 2-мя вариантами, которые описаны ниже:
1. Использовать миксины SASS в исходном коде (например, такой для flexbox: https://github.com/mastastealth/sass-flex-mixin/blob/master/_flex.scss)
2. Или готовый CSS-файл прогонять через Autoptrefixer и в названии НОВОГО получившегося файла добавлять `prefixed`, например, вот так `style.prefixed.css`. При этом в папке у Вас должен остаться и файл `style.css` (или `style.scss`). Теперь сами способы в порядке увеличения сложности:
 - можно онлайн CTRL+C и CTRL+V: https://autoprefixer.github.io/ru/
 - использовать плагин Autoptrefixer для вашего любимого редактора кода (для Sublime Text - https://github.com/sindresorhus/sublime-autoprefixer, для Atom - https://github.com/sindresorhus/atom-autoprefixer_)
 - использовать его через терминал: https://github.com/postcss/autoprefixer#cli
 - использовать как Gulp-плагин https://github.com/postcss/autoprefixer#gulp
 - использовать как Webpack-плагин https://github.com/postcss/autoprefixer#webpack


## 11. Форматирование и отступы в HTML / CSS / SASS / JS файлах.
Правильное форматирвание кода упрощает разработку. Инструменты для автоматического форматирвания в Sublime Text: https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify и https://packagecontrol.io/packages/CSS%20Format. Для других редакторов существуют аналогичные решения.

## 12. Используйте адекватные названия коммитов:
https://habrahabr.ru/company/Voximplant/blog/276695/

## 13. Несоответствие стиля кода общепринятому:
https://learn.javascript.ru/coding-style

## 14. Неуместное использование "alert" вместо "console" и "debugger":
https://learn.javascript.ru/debugging-chrome

## 15. Именование переменных и функций должно быть понятно людям и соответствовать общепринятым правилам:
https://learn.javascript.ru/coding-style#именование
