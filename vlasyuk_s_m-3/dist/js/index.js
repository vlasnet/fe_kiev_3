/*jshint esversion: 6 */ 

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

document.querySelector("button").addEventListener("click", getWords);

function getWords() {
    let keybord = [[alphabet.slice(0, 12)],[alphabet.slice(12, 23)],[alphabet.slice(23)]];
    
    let firstWord = [keybord[1].toString().split("")[5], keybord[0].toString().split("")[2], 
                     keybord[1].toString().split("")[8], keybord[1].toString().split("")[8], 
                     keybord[0].toString().split("")[8]].join("");

    let secondWord = [keybord[1].toString().split("")[6], keybord[1].toString().split("")[0], 
                      keybord[2].toString().split("")[3], keybord[1].toString().split("")[0], 
                      keybord[1].toString().split("")[1], keybord[2].toString().split("")[2], 
                      keybord[0].toString().split("")[3], keybord[0].toString().split("")[7], 
                      keybord[0].toString().split("")[9], keybord[0].toString().split("")[4]].join("");

    let thirdWord = [keybord[0].toString().split("")[4], keybord[0].toString().split("")[3], 
                     keybord[1].toString().split("")[0], keybord[0].toString().split("")[7], 
                     keybord[2].toString().split("")[5], keybord[0].toString().split("")[2], 
                     keybord[0].toString().split("")[3]].join("");

    console.log(firstWord);
    console.log(secondWord);
    console.log(thirdWord);
}
