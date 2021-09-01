// //select all element
const add = document.querySelector("#add"); // for saving
const word = document.querySelector("#word");
const card_body = document.querySelector(".card-body");

EventListener();

function EventListener(){
    add.addEventListener("submit", addWord);
}

function showalert(type,message){
    const alert = document.createElement("div");
    const hr = document.createElement("hr");

    alert.className = ` alert alert-${type}`;
    alert.textContent = message;

    card_body.appendChild(hr);
    card_body.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1000)
    
}

function addWord(e) {
    const newWord = word.value.trim();
    console.log(newWord);

    if ( newWord === "") {
        showalert("danger", "Please enter word and meaning!");
    }
    else{  
        addWordsToStorage(newWord);
        showalert("success", "Successfuly added..");

    }

    e.preventDefault();
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


function addWordsToStorage(newWord){

    let words = getWordsFromStorage();
    words.push(newWord);
    localStorage.setItem("words",JSON.stringify(words));

 }



