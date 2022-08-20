let toss=  document.getElementById("toss");
let temp = Math.random();
if (temp <0.5){
    document.getElementById("toss").src="resources/heads.svg";
    document.getElementById("toss-text").innerHTML= "heads";
}else{
    document.getElementById("toss").src="resources/tails.svg";
    document.getElementById("toss-text").innerHTML= "tails";
}