/**
 * Created by user on 9/9/2017.
 */
let x;
let a = 20;
let b = 64;
let c = 80;


x=prompt("Write the number of flat:","");
if(x==="")
{
    alert("The number doesn't match")
}
if(x<1)
{
    alert("There isn't such flat")
}
else if(1<=x <= a)
{
    alert("The number of entrance is one.");
}
else if(a < x <= b)
{
    alert("The number of entrance is two.")
}
else if(x <= c)
{
    alert("The number of entrance is three.")
}