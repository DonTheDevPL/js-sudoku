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