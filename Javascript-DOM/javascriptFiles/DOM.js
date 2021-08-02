//============ Selecionando por HTML TAG: ============
var Ptag = document.getElementsByTagName('p');

console.log('Existem ' + Ptag.length + ' tags "p"');
console.log(Ptag[0]);
console.log(Ptag[0].innerHTML);

//Manipulando texto:
Ptag[1].innerHTML = 'Mudado com JavaScript';

Ptag[2].innerHTML = Ptag[2].innerHTML + ' Contatenado com JavaScript';

//============ Selecionando por Id e Classe: ============
var divBox = document.getElementById('box');
var ClassBoxes = document.getElementsByClassName('boxes');

//Manipulando Estilo:
divBox.style.width = '150px';
divBox.style.backgroundColor = 'green';

ClassBoxes[2].style.backgroundColor = 'blue';

//============ Selecionando por QuerySelector: ============
divText = document.querySelectorAll('.texts');
divText[0].style.color = 'red';
divText[1].innerHTML = '<div class="Js-Adicionado">Olá!</div>';

