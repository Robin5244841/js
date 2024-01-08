function doubbleMe(number) {
  return number * 2;
}

function tripleMe(number) {
  return number * 6;
}

const triple = tripleMe(5);

console.log(triple);
15;

// jhgub  vrdvgg

// function test(e) {
//   const value = parseInt(e.innerText);
//   const output = tripleMe(value);
//   document.getElementById('id').innerHTML = output;
// }

function test(e) {
  const value = parseInt(e.innerText);
  const output = tripleMe(value);
  document.getElementById('id').innerHTML = output;
}

// function test(e) {
//   const value = parseInt(e.innerText);
//   const output = tripleMe(value);
//   document.getElementById('btn').innerHTML = output;
// }
