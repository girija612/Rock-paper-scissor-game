var c=0,k;

// GETTING USER INPUT FROM BUTTON
function select(op){
	if(c==0){
	var d=document.getElementById(op);
	d.style.backgroundColor="rgb(0,250,20)";
	}
	c++;
	k=op;
}

// TO START THE GAME 
function start(){
	let sel;
	if(c==0) { // MAKING SURE THAT USER SELECT FIRST
		alert('please select your choice fisrt');
		return;
	}
	else{
	for(let i=0;i<3;i++){  // TO GET 0,1,2 FREQUENTLY EACH ONE
	document.getElementById('bt').style.backgroundColor="";
	document.getElementById('bt2').style.backgroundColor="";
	document.getElementById('bt3').style.backgroundColor="";
	sel = Math.floor(Math.random()*3);
	}
	comp(sel);
	}
}

// RANDOMLY SELECTED THAT IS BY COMPUTER OPTION
var inter;
function comp(sel){
	console.log(sel);
	switch(sel){
		case 0:
			document.getElementById('bt').style.backgroundColor="rgb(0,20,250)";
			// res('bt');			
			inter = setInterval(res,1000,'bt');
			break;
		case 1:
			document.getElementById('bt2').style.backgroundColor="rgb(0,20,250)";
			// res('bt2');
			inter = setInterval(res,1000,'bt2');
			break;
		case 2:
			document.getElementById('bt3').style.backgroundColor="rgb(0,20,250)";
			// res('bt2');
			inter = setInterval(res,1000,'bt3');
			break;
	}
}

// TO RETURN OPTION BY TAKING ID 
function check(ele){
	if(ele=='bt')
		return "Rock";
	if(ele=='bt2')
		return "Paper";
	if(ele=='bt3')
		return "Scissor";
}
function tex(){
	return 		"<a href='index.html'><button class='but' ><p class='text'>RESTART</p></button></a>"+
		"</div>";
}

// CALCULATING THE RESULT
function res(r){
	clearInterval(inter);
	console.log("entered");
	var ml=document.getElementById('main');	
	var dis=document.getElementById('fin');
	/*  bt - rock  
		bt2 - paper 
	    bt3 - scissor
	 	r - computer   
	 	k - player  */
	 	console.log("r and k "+r+" "+k);
	if(r==k){
		console.log("tie");
	ml.innerHTML="<h3 align='center' style='color:white;'>YOU : "+check(k)+"<br>COMPUTER : "+check(r)+"</h3><br><br>"+
		"<h1 align='center' style='color:white;'>IT'S TIE</h1>"+
		"<div class='fin'>"+tex();

	}
	else if(k=='bt' && r=='bt2' || k=='bt2' && r=='bt3' || k=='bt3' && r=='bt'){
		console.log("com");
		ml.innerHTML="<h3 align='center' style='color:white;'>YOU : "+check(k)+"<br>COMPUTER : "+check(r)+"</h3><br><br>"+
		"<h1 align='center' style='color:white;'>COMPUTER WON</h1>"+
		"<div class='fin'>"+tex();
	}
	else if(k=='bt' && r=='bt3' || k=='bt2' && r=='bt' || k=='bt3' && r=='bt2'){
		console.log("you");
		ml.innerHTML="<h3 align='center' style='color:white;'>YOU : "+check(k)+"<br>COMPUTER : "+check(r)+"</h3><br><br>"+
		"<h1 align='center' style='color:white;'>YOU WON</h1>"+
		"<div class='fin'>"+tex();
	}
}
// document.getElementsByClassname('but').onclick= function(){
// 	location.href="index.html";
// }
