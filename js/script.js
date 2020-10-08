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
let sudokuPlanszaTest = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9,1,2,4,5,6,7,8,9,1,2,3,5,6,7,8,9,1,2,3,4,6,7,8,9,1,2,3,4,5,7,8,9,1,2,3,4,5,6,8,9,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,8];
function fillGame(plansza){
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
	console.log("Ustawiam wartosc "+value+" dla id="+id1+'_'+id2)
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