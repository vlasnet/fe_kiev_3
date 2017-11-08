# Домашние задания (Homeworks). GoFrontend#3: Offline
Repository for homeworks "GoFrontend#3: Offline". Mentor: Dmitriy Lisunov

<hr>

![](http://aws-cf.imdoc.fr/prod/photos/6/4/2/3820642/2844403/img-2844403d28.jpg)

Все домашние задания принимаются только через `pull requests`.
Общая схема работы изложена здесь: https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project

Есть переводы этой статьи:
- [Українська](https://git-scm.com/book/uk/v2/GitHub-%D0%AF%D0%BA-%D0%B7%D1%80%D0%BE%D0%B1%D0%B8%D1%82%D0%B8-%D0%B2%D0%BD%D0%B5%D1%81%D0%BE%D0%BA-%D0%B4%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83)
- [Русский (переведено не полностью)](https://git-scm.com/book/ru/v2/GitHub-%D0%92%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D0%B2-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B)

## Общая схема работы будет выглядеть следующим образом:
1. Делаете `Fork` данного проекта https://github.com/lisunovdv/fe_kiev_3.git как описано в статье
2. Клонируете **СВОЙ** репозиторий `git clone https://github.com/ВАШ_ЛОГИН_GitHub/fe_kiev_3.git` на локальный компьютер
3. Переключаетесь на ветку для домашнего задания (например, для ДЗ №4): `git checkout new_modules/m4`
4. (не обязательно) Удаляете ненужные файлы документации `git rm -rf .` (если нужно. Можете оставить .gitignore файл)
5. В проекте создаёте **ПАПКУ** с названием `ivanov_i-m_4` и в ней делаете своё домашнее задание. Название папки должно соответствовать такому *Name Convention* (всё на английском): 

**`Ваша фамилия _ (нижнее подчёркивание) первая буква Вашего имени - (дефис) m_(то есть "module") номер домашнего задания`**

т.е. как было показано в примере выше, например, вот так `ivanov_i-m_4`
##### Commit & Push
6. Далее **коммитите и пушите** ветку на GitHub
7. Переходите по адресу `https://github.com/ВАШ_ЛОГИН_GitHub/fe_kiev_3`
8. Выбираете ветку с вашим ДЗ и жмёте `New pull request`

![New pull request](https://github.com/lisunovdv/fe_kiev_3/blob/master/New%20Pull%20Request.jpg)

или, если у Вас появилась кнопка `Compare & pull request`, жмёте её: 
![Compare & pull request](https://git-scm.com/book/en/v2/images/blink-02-pr.png)

## ВАЖНО!!!
9. **Правильно указывайте условия для pull request, иначе GitHub не даст его сделать (НЕ покажет зелёную кнопку ` Create pull request`):**
- 9.1. `base fork:` указываете `lisunovdv/fe_kiev_3`, а `base:` ветку `new_modules/m4` (Для ДЗ № 4 соответственно)
- 9.2. `head fork:` указываете `ВАШ_ЛОГИН_GitHub/fe_kiev_3`, а `compare:` ветку `new_modules/m4 (Для ДЗ № 4 соответственно. Ну или как Вы назвали свою локальную ветку)
- 9.3. После этого жмёте ` Create pull request`
![Правильные настройки pull request](https://github.com/lisunovdv/fe_kiev_3/blob/master/Pull-Request-proccess.jpg)

10. **Заполняете `Title` реквеста в таком формате:** 

`dz_4:ivanov_i:`*Префикс*`:Необязательное короткое сообщение для ментора`

Где *Префикс* может быть:
- **ADD** - Вы только что создали новое ДЗ и ПЕРВЫЙ раз хотите мне его показать
- **CHANGE** - Вы сами обнаружили ошибку и хотите прислать ментору исправленный вариант
- **FIX** - ментор ранее указал Вам на ошибку и Вы высылаете исправленный вариант

## Пожалуйста, заполняйте правильно заголовок для pull-request!

11. Если необходимо, можете добавить развёрнутый комментарий в поле ниже:
![Comment](https://github.com/lisunovdv/fe_kiev_3/blob/master/Comment.jpg)

12. После этого жмёте `Create pull request`

13. После отправки pull-request проверяйте наличие конфликтов! ![Alt text](https://monosnap.com/file/dLsopd8TdMYzFGcN3c44FKp2NoQOnp.png)

## Разберитесь с ними, если они есть! С конфликтами ДЗ НЕ ПРИНИМАЮ.

14. После этого Ментор принимает решение о принятии ДЗ, либо о его отклонении. Вы можете подписать на уведомления на e-mail о новых комментариях к Вашему ДЗ

## Основная часть обсуждений и комментарии по ДЗ будут здесь, на GitHub, а не в Slack / Facebook
<hr>

### Правила работы с Pull-request соответствуют реальным боевым проектам!
Теперь ПОД КАЖДЫМ моим комментарием вы отписываетесь, что:
1) Комментарий видели
2) С ним согласны / не согласны
3) Исправлено / Вы отказываетесь исправлять

Для того, чтобы ответить на мой комментарий, нужно нажать на поле "Reply":
![](http://share-srv.pulsarfour.com/p4/chrome_2017-07-31_22-12-58.png)

P.S. Не ответили хоть на один комментарий - ДЗ не принято!! Удачи :stuck_out_tongue_closed_eyes::smiling_imp:
<hr>

# 1. INSTALL (in case of trouble)
Если у Вас слетели настройки, нет нужных веток или хотите пересоздать свой новый репозиторий, то Вам нужно:

## 1.1 Если Вы создаёте новый репозиторий из моего:
1) Сделать `Fork` текущего проекта https://github.com/lisunovdv/fe_kiev_3.git
2) После этого у Вас появится СВОЙ репозиторий типа https://github.com/ВАШЕ_ИМЯ_НА_GitHub/fe_kiev_3.git
3) Готово

## 1.1 Если Вы хотите обновить существующий:
1) Добавляем связь с мои репозиторием: `git remote add upstream https://github.com/lisunovdv/fe_kiev_3`, где `upstream` - короткое имя (алиас) моего репозитория
2) `git fetch upstream` - вытащить новые данные из моего репозитория
3) `git pull upstream new_modules/m1` - вытянуть себе на компьютер ветку для ДЗ, имя ветки `new_modules/m1` для 1-го модуля, `new_modules/m2` для 2-го и т.д.
4) Делаем Домашнее задание
5) `git add FILE_NAME_WITH_HOMEWORK`
6) `git commit -m "Create homework for Module 1"`
7) И после этого важный нюанс с push: `git push -u origin new_modules/m1`
8) После этого создаём pull-request.
