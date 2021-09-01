const wordList = document.querySelector(".list-group");

EventListener();

function EventListener() {  // Tüm event listenerler
    document.addEventListener("DOMContentLoaded",loadAllWordsToUI);
}

function addWordsToUI(e) {  // dinamik olarak element üretme
    // List item oluşturma
    const listitem = document.createElement('li');
    // Link oluşturma

    const link = document.createElement('a');
    // console.log(link);
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listitem.className = "list-group-item d-flex justify-content-between";

    // Text Node ekleme
    listitem.appendChild(document.createTextNode(e));
    listitem.appendChild(link);

    // todoliste list item ı ekleme
    wordList.appendChild(listitem);
    // console.log(listitem);
}

function getWordsFromStorage(){ // Storagedan todoları alacak
    let words;

    if(localStorage.getItem("words") === null){
        words = [];
    }
    else{
        words = JSON.parse(localStorage.getItem("words"));
    }

    return words;
}

function getMeaningsFromStorage(){ // Storagedan todoları alacak
    let meanings;

    if(localStorage.getItem("meanings") === null){
        meanings = [];
    }
    else{
        meanings = JSON.parse(localStorage.getItem("meanings"));
    }

    return meanings;
}

function loadAllWordsToUI(){
    let words = getWordsFromStorage();
    let meanings = getMeaningsFromStorage();

    words.forEach(function(word) {
        addWordsToUI(word);
    })
}