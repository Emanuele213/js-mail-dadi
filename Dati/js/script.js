const eleInizia = document.querySelector('.invia'); 
let outUserNum = document.querySelector('.num-user');
let outCpuNumer = document.querySelector('.num-cpu');
let win = document.querySelector('.win');
let ricomincia = document.querySelector('.reload');

let userNum;
let cpuNum

eleInizia.addEventListener('click', function () {
userNum = Math.floor(Math.random() * 6 ) + 1;
console.log('Il numero della cpu e\'', userNum);
outUserNum.innerHTML = (`Il tuo numero e\' ${userNum}`);
cpuNum = Math.floor(Math.random() * 6 ) + 1;
console.log('Il numero della cpu e\'', cpuNum);
outCpuNumer.innerHTML = (`Il numero della CPU e\' ${cpuNum}`);

if (userNum == cpuNum) {
    win.innerHTML = ('Avete vinto entrambi');
}
if (userNum < cpuNum) {
    win.innerHTML = ('Ha vinto la CPU');
}
if (userNum > cpuNum){
    win.innerHTML = ('Hai vinto');
}
});

ricomincia.addEventListener('click', function () {
    document.location.reload();
 });