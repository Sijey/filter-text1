'use strict';


function f() {
  const str1 = document.getElementById('form1').value;
  const str2 = document.getElementById('form2').value;
  const arr1 = str1.split(',');
  const arr2 = str2.split(',');
  const uniqueFromArr1 = [];
  const uniqueFromArr2 = [];
  const uniq1 = document.querySelector('#uniq1');
  const uniq2 = document.querySelector('#uniq2');

  for (const phrase of arr1) {
    if (!arr2.includes(phrase)) {
      uniqueFromArr1.push(phrase);
      uniqueFromArr1.join('');
    }
  }

  for (const phrase of arr2) {
    if (!arr1.includes(phrase)) {
      uniqueFromArr2.push(phrase);
      uniqueFromArr2.join('');
    }
  }


  uniq1.innerHTML = `
    ${uniqueFromArr1.map(item => `
      <tr>
        <td>${item}</td>
      </tr>
    `).join('')}
  `
  uniq2.innerHTML = `
    ${uniqueFromArr2.map(item => `
      <tr>
        <td>${item}</td>
      </tr>
    `).join('')}
  `
}


const submit = document.querySelector('#submit');
submit.addEventListener('click', f);

