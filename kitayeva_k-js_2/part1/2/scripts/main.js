/**
 * Created by user on 9/9/2017.
 */

    "use strict";
    let x;
    let y;
    x=prompt("Введите первое число X:","");
    y=prompt ("Введите второе число Y;","");
    if(x==="")
    {
        alert("Вы не ввели первое число X!")
    }
    else if(y==="")
    {
        alert("Вы не ввели второе число Y!")
    }
    else if(x>y)
    {
        alert("Это X")
    }
    else if(y>x)
    {
        alert("Это Y");
    }
    else if(x===y)
    {
        alert("Числа равны")
    }