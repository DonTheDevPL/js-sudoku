let pole = document.getElementById("pole_gry");
let wstaw = "";
let tabela = `<table class="pole">\n`+
`<tr>\n`+
`    <td>1</td><td>2</td><td>3</td>\n`+
`</tr>\n`+
`<tr>\n`+
`    <td>4</td><td>5</td><td>6</td>\n`+
`</tr>\n`+
`<tr>\n`+
`    <td>7</td><td>8</td><td>9</td>\n`+
`</tr>\n`+
`</table>`;
for(i=0;i<9;i++){
    wstaw = wstaw+tabela;
}
pole.innerHTML = wstaw;