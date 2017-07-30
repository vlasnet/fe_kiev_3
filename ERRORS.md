# Типичные ошибки

## 1.После отправки pull-request проверяйте наличие конфликтов! ![Alt text](https://monosnap.com/file/dLsopd8TdMYzFGcN3c44FKp2NoQOnp.png)
Помните! Если вы собираетесь делать ДЗ № 6, то вам и нужно отбранчовываться от ветки dz_6 `git checkout dz_6`, а не от master `git checkout -b dz_6`. Вот эта буквочка `-b` многое значит! https://git-scm.com/book/ru/v1/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B2%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8-%D1%81%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D1%8F


## 2.Про именование классов:
1) https://habrahabr.ru/post/303174/
2) https://habrahabr.ru/post/308680/

Они НЕ являются истинной в последней инстанции (то есть там НЕ ВСЁ правильно), но общие принципы именования они должны помочь тебе понять.

За именование классов типа `footer-1, footer-2`, `.fdgfdfgsg, .kkk`, `.shapka-sayta, .podval` - буду лЯщи (и много)!




## 3.Пожалуйста, добавляйте пустую строку в конце файлов: https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline,
чтобы GitHub меня не кошмарил!



## 4.Неправильное подключение шрифтов!
Как  нужно: http://nicothin.pro/page/web-fonts

То есть у вас это должно выглядеть примерно так:

@font-face { font-family: "**Arial**"; font-weight: normal; font-style: normal; src: url("..... ArialRegular.eot"); ... <br>
@font-face { font-family: "**Arial**"; font-weight: **bold**; font-style: normal; src: url("..... **ArialBold.eot**"); ...<br>
@font-face { font-family: "**Arial**"; font-weight: normal; font-style: **italic;** src: url("..... **ArialItalic.eot**"); ...<br>



## 5.Ешё раз про box-sizing и как правильно его нужно использовать: https://css-tricks.com/box-sizing/



## 6. Не нужно задавать жёстко высоту (типа такого `height: 700px`). Chrome умный - и он автоматически подстраивает ВЫСОТУ блоков под размер текста и картинок внутри. Если текста не будет совсем, но нужно сохранить структуру вёрстки, то есть интересное CSS-свойство для высоты min-height http://htmlbook.ru/css/min-height




## 7.Неправильное использование `.clearfix`
Как нужно: http://xiper.net/collect/html-and-css-tricks/css-tricks/clearfix
Как можно в 2017 году (внизу статьи): https://css-tricks.com/snippets/css/clear-fix/



## 8.Семантика тегов. В HTML есть много интересных тегов, таких как aside, strong, button, main, menu и прочие. 
https://habrahabr.ru/post/124993/
http://www.wisdomweb.ru/HTML5/semantic.php
