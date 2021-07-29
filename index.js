
 let randomNum = Math.floor(Math.random()*25 + 1);
    console.log(randomNum)

let gekozenGetal = document.getElementsByClassName("gekozen__nummers")
 gekozenGetal.innerHTML = "guess"
console.log(gekozenGetal)


begroeting = function(){
    naam = prompt("Wat is uw naam?")
   
 
}
 

 guessNumber = function(){
       let guess = 0;
   for (i = 0; i <5;i++){
    let guess = prompt(`${naam}, voer een getal tussen de 1 en 25 in.`)
    console.log("Your guess is "+ guess);
    if(guess < randomNum){
        window.alert("Je zit te laag klik op de knop om nogmaals te raden");
  
    }else if(guess > randomNum){
        window.alert("Je zit te hoog klik op de knop om nogmaals te raden");
    }else if(guess == randomNum){
        window.alert(`Geniaal ${naam}, je hebt het juiste nummer geraden!` );
     break

    }else{
        alert("verkeerde invoer");
        
    }
 
}}


    

begroeting();
guessNumber();






