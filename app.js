let base = document.querySelector('.base');
const premiereCase = document.querySelector('#premiere-case');
const boxs = document.querySelectorAll('.case');
const destroy =  document.querySelector('.destroy');
const allCases = [];
let indexBase = 1;
let remplissage = 0;
for (let index = 0; index < boxs.length; index++) {
    allCases.push(boxs[index]);
}
allCases.push(destroy);
let indexPhoto = 1;
base.style.backgroundImage =  `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
function nvBase(){
    const newBase = document.createElement('div');
    newBase.setAttribute('class', 'base');
    newBase.setAttribute('draggable', 'true');
    newBase.setAttribute('id', indexBase);
    indexBase++;
    indexPhoto++;
    newBase.style.backgroundImage =  `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    premiereCase.appendChild(newBase);
    base = newBase;
}
for(const vide of allCases) {
    vide.addEventListener('dragover',dragOver);
    vide.addEventListener('dragenter',dragEnter);
    vide.addEventListener('drop',dragDrop);
}
function dragDrop(){
    if(this.id === "premiere-case"){
        return;
    }
    if(this.id === "destroy"){
        base.remove();
        nvBase();
        return;
    }

    if(this.classList.contains("true")){
        this.setAttribute('draggable',false);
        return;
    }
    this.appendChild(base);
    this.classList.add('true');
    nvBase();
    remplissage++;
    if(remplissage === 3) {
        alert('Sélection terminée !');
    }
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}