console.log("hi");


var challengeOneInput = "jumbo shrimp";
var singleWord= challengeOneInput.split(' ');
var jumbo = singleWord[0].split("");
var shrimp = singleWord[1].split('');
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaSplit = alpha.split('');
//console.log(alphaSplit);
var jumboScore = 0;
var shrimpScore = 0; 


for(i=0; i<jumbo.length; i++){
var score = alphaSplit.indexOf(jumbo[i]) + 1;
jumboScore += score;

}
//console.log(jumboScore);

for(j=0; j<shrimp.length; j++){
    var score = alphaSplit.indexOf(shrimp[j]) + 1;
    shrimpScore += score;
    
} 
var challenge1 = document.getElementById("challenge-1")
if (shrimpScore > jumboScore){
    challenge1.innerHTML= "<p>" + shrimp.join('') +  " = "  + shrimpScore +  "</p>";
} else{
    challenge1.innerHTML= "<p>" + jumbo.join('') +  " = "  + jumboScore + "</p>";

}

//console.log(shrimpScore);