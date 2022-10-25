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
            console.log = ('Acesso eseguito');
            showEmail.innerHTML = ('Acesso eseguito');
        }
        else if (listEmail[i] != inEmail) {
            showEmail.innerHTML = ('Acesso negato');
        }
    }
});

eleDetelete.addEventListener('click', function () {
    document.location.reload();
 });