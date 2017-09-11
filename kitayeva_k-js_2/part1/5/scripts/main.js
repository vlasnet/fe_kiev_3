/**
 * Created by user on 9/9/2017.
 */
function myFunction() {
    let x = document.getElementById("myNumber1").value;
    let y = document.getElementById("myNumber2").value;
    let z = document.getElementById("myNumber3").value;
    document.getElementById("demo").innerHTML = Math.max(x, y, z);
}