let toss=  document.getElementById("toss");
let temp = Math.random();
if (temp <0.5){
    document.getElementById("toss").src="files/resources/heads.svg";
    document.getElementById("toss-text").innerHTML= "heads";
}else{
    document.getElementById("toss").src="files/resources/tails.svg";
    document.getElementById("toss-text").innerHTML= "tails";
}