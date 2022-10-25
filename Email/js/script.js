let inEmail = document.getElementById('email');
let showEmail = document.querySelector('.show');
const bntSub = document.querySelector('.submit');
const eleDetelete = document.querySelector('.cancella');
const listEmail = [
    "vittorio@gmail.com", 
    "emanuele@gmail.com", 
    "giuseppe@gmail.com", 
    "antonio@gmail.com"
    ]

bntSub.addEventListener('click', function () { 
    for (let i = 0; i < listEmail.length; i++) {
        if (listEmail.includes(inEmail.value)) {
            showEmail.innerHTML = ('Acesso eseguito -- Bentornato ');
        }
        else if (listEmail[i] != inEmail) {
            showEmail.innerHTML = ('Acesso negato -- RIPROVA');
        }
    }
});

eleDetelete.addEventListener('click', function () {
    document.location.reload();
 });