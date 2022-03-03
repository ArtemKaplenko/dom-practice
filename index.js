// 1
function getAttributes() {
    const attrOfLink = document.querySelector('#w3r');
    console.log(attrOfLink.href);
    console.log(attrOfLink.hreflang);
    console.log(attrOfLink.rel);
    console.log(attrOfLink.target);
    console.log(attrOfLink.type);
}

// 2
function js_style() {
    const forStyle = document.querySelector('#text');
    forStyle.style.fontStyle = 'italic';
}

// 3
const tableBody = document.querySelector('tbody');
const row = tableBody.querySelectorAll('tr');
const td = row[3].querySelectorAll('td')[1];
td.textContent = '04.04.2021';

// 4
const randRow = Math.floor(Math.random() * 4);
row[randRow].style.backgroundColor = 'green';

const tableHead = document.querySelector('thead');
const th = tableHead.querySelector('td');
th.textContent += ' Cкидка';