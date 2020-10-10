class SudokuPlansza{
	PlanszaWzor;
	PlanszaInput;
	PlanszaFinall;
}
function serveGamePart(id) {
	let tabela =
		`<table class="pole">\n` +
		`<tr>\n` +
		`   <td><input type="text" class='input_pl' id='${id + '_1'}'></td>\n` +
		`	<td><input type="text" class='input_pl' id='${id + '_2'}'</td>\n` +
		`	<td><input type="text" class='input_pl' id='${id + '_3'}'</td>\n` +
		`</tr>\n` +
		`<tr>\n` +
		`   <td><input type="text" class='input_pl' id='${id + '_4'}'></td>\n` +
		`	<td><input type="text" class='input_pl' id='${id + '_5'}'</td>\n` +
		`	<td><input type="text" class='input_pl' id='${id + '_6'}'</td>\n` +
		`</tr>\n` +
		`<tr>\n` +
		`   <td><input type="text" class='input_pl' id='${id + '_7'}'></td>\n` +
		`	<td><input type="text" class='input_pl' id='${id + '_8'}'</td>\n` +
		`	<td><input type="text" class='input_pl' id='${id + '_9'}'</td>\n` +
		`</tr>\n` +
		`</table>`;
	return tabela;
}
function makeGame() {
	let pole = document.getElementById('pole_gry');
	let wstaw = '';
	let id = 1;
	for (var i = 0; i < 9; i++) {
		wstaw = wstaw + serveGamePart(id);
		id++;
	}
	pole.innerHTML = wstaw;
}
function provideSudoku(){
	let randomInt = Math.round(Math.random()*10);
	let sudokuPlansza1 = [];
	if(randomInt > 5){
		return [1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9,1,2,4,5,6,7,8,9,1,2,3,5,6,7,8,9,1,2,3,4,6,7,8,9,1,2,3,4,5,7,8,9,1,2,3,4,5,6,8,9,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,8];
	}else{
		return [3,1,6,5,7,8,4,9,2,5,2,9,1,3,4,7,6,8,4,8,7,6,2,9,5,3,1,2,6,3,4,1,5,9,8,7,9,7,4,8,6,3,1,2,5,8,5,1,7,9,2,6,4,3,1,3,8,9,4,7,2,5,6,6,9,2,3,5,1,8,7,4,7,4,5,2,8,6,3,1,9];
	}
}
function messWithGame(sudoku){
	let game = [];
	let randomInt = Math.round(Math.random()*10);
	if (randomInt < 5) {
		game = flipGame2(sudoku);
		game = flipGame1(game);
		game = flipGame2(game);
	}else{
		game = flipGame2(sudoku);
		game = flipGame1(game);
	}
	return game;
}
function fillGame(planszaBP){
	deleteGame();
	let plansza = removeRandomElement(planszaBP,4);
	let id1 = 1;
	let id2 = 1;
		for(var i=0;i<=8;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
		id1++;
		id2 = 1;			
		for(var i=9;i<=17;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
		id1++;
		id2 = 1;			
		for(var i=18;i<=26;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
		id1++;
		id2 = 1;			
		for(var i=27;i<=35;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
		id1++;
		id2 = 1;			
		for(var i=36;i<=44;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
		id1++;
		id2 = 1;			
		for(var i=45;i<=53;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
		id1++;
		id2 = 1;			
		for(var i=54;i<=62;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
		id1++;
		id2 = 1;			
		for(var i=63;i<=71;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
		id1++;
		id2 = 1;			
		for(var i=72;i<=80;i++){
			handleInput(id1,id2,plansza[i])
			id2++;
		}
}
function handleInput(id1,id2,value){
	//debug
	//console.log("Ustawiam wartosc "+value+" dla id="+id1+'_'+id2)
	if(value != 0){
		document.getElementById(id1+'_'+id2).value = value;
		document.getElementById(id1+'_'+id2).disabled = true;
	}
}
function prepareArrayForInterpreter(array){
	let finallArray=[];
	let offset = 0;
	for(var i=0; i<3;i++){
			finallArray.push(array[0+offset]);
			finallArray.push(array[1+offset]);			
			finallArray.push(array[2+offset]);
			finallArray.push(array[9+offset]);
			finallArray.push(array[10+offset]);
			finallArray.push(array[11+offset]);
			finallArray.push(array[18+offset]);
			finallArray.push(array[19+offset]);
			finallArray.push(array[20+offset]);
			offset = offset +3;
		}
		offset = 0;
		for(var i=0; i<3;i++){
			finallArray.push(array[27+offset]);
			finallArray.push(array[28+offset]);			
			finallArray.push(array[29+offset]);
			finallArray.push(array[36+offset]);
			finallArray.push(array[37+offset]);
			finallArray.push(array[38+offset]);
			finallArray.push(array[45+offset]);
			finallArray.push(array[46+offset]);
			finallArray.push(array[47+offset]);
			offset = offset +3;
		}
		offset = 0;
		for(var i=0; i<3;i++){
			finallArray.push(array[54+offset]);
			finallArray.push(array[55+offset]);			
			finallArray.push(array[56+offset]);
			finallArray.push(array[63+offset]);
			finallArray.push(array[64+offset]);
			finallArray.push(array[65+offset]);
			finallArray.push(array[72+offset]);
			finallArray.push(array[73+offset]);
			finallArray.push(array[74+offset]);
			offset = offset +3;
		}
		SudokuPlansza.PlanszaWzor = array;
		SudokuPlansza.PlanszaFinall = finallArray;		
	return finallArray;
}
function removeRandomElement(array,difficulty){
	let parsedArray = [];
	let randomInt;
	for(var i in array){
		randomInt = Math.round(Math.random()*10);
		if(randomInt > difficulty){
			parsedArray.push(array[i])
		}else{
			parsedArray.push(0);
		}
	}
	return parsedArray;
}
function deleteGame(){
	let inputs = document.getElementsByClassName('input_pl');
    for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
		inputs[i].disabled = false;
	}
	document.getElementById("tekst_w").innerText = "Rozwiąż sudoku";
}
function flipGame1(array){
	let parsedArray = [];
	for(i in array){
		parsedArray.push(array[80-i])
	}
	return parsedArray;
}
function flipGame2(array){
	let parsedArray = [];
	for(var i=0; i <9;i++){
		parsedArray.push(array[i])
		parsedArray.push(array[9+i])
		parsedArray.push(array[18+i])
		parsedArray.push(array[27+i])
		parsedArray.push(array[36+i])
		parsedArray.push(array[45+i])
		parsedArray.push(array[54+i])
		parsedArray.push(array[63+i])
		parsedArray.push(array[72+i])																
	}
	return parsedArray;
}