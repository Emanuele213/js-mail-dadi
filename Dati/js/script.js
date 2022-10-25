const eleInizia = document.querySelector('.invia'); 
let outUserNum = document.querySelector('.num-user');
let outCpuNumer = document.querySelector('.num-cpu');
let winUser = document.querySelector('.win-user');
let winCpu = document.querySelector('.win-cpu');
let winBoth = document.querySelector('.win-both');
let ricomincia = document.querySelector('.reload');

eleInizia.addEventListener('click', function () {
let userNum = Math.floor(Math.random() * 6 ) + 1;
console.log('Il numero della cpu e\'', userNum);
outUserNum.innerHTML = (`Il tuo numero e\' ${userNum}`);
let cpuNum = Math.floor(Math.random() * 6 ) + 1;
console.log('Il numero della cpu e\'', cpuNum);
outCpuNumer.innerHTML = (`Il numero della CPU e\' ${cpuNum}`);

if (userNum == cpuNum) {
    winBoth.innerHTML = ('Avete vinto entrambi')
}else if (userNum < cpuNum) {
    winCpu.innerHTML = ('Ha vinto la CPU')
}else {
    winUser.innerHTML = ('Hai vinto')
}
});

ricomincia.addEventListener('click', function () {
    document.location.reload();
 });