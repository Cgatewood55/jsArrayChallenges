console.log("hi");
 
//challenge 1 named as challenge 5 branch 

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

//challenge4
var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]

function doubleNum(dubnum) {
    var doubled = [];
for (var k=0; k<dubnum.length;k++){
    doubled.push(dubnum[k] *2);
    }
    return doubled;
}
var challenge4 = doubleNum(challengeFourInputA);
 document.getElementById("challenge-4").innerHTML = "<h3>" + "challenge 4:" + challenge4 + "</h3>";

 function doubleNum(dubnum) {
    var doubled = [];
for (var k=0; k<dubnum.length;k++){
    doubled.push(dubnum[k] *2);
    }
    return doubled;
}

 var challenge4 = doubleNum(challengeFourInputB);
 document.getElementById("challenge-4").innerHTML =  "<h3>" + "challenge 4: " + challenge4 + "</h3>"

