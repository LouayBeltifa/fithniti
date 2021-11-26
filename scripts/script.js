//getting elements
const FromInput = document.getElementById("frombox");
const ToInput = document.getElementById("tobox");

const suggboxFrom = document.querySelector(".from");
const suggboxto = document.querySelector(".togo");


// FROM BOX
FromInput.onkeyup = (e) => {
     let userData = e.target.value; // User Data Enetered
     let emptyArray = [];
     
     if(userData){
         emptyArray = suggestions.filter((data) => {
             //filter
             return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
         });
         emptyArray = emptyArray.map((data)=> {
            return data ='<li onclick="selectFrom(this)">' + data + '</li>';
         });
         suggboxFrom.classList.add("showsugg");
     }else {
        suggboxFrom.classList.remove("showsugg");
     }
     showSuggestionsFrom(emptyArray);
}



//TO BOX
ToInput.onkeyup = (e) => {
    let userData = e.target.value; // User Data Enetered
    let emptyArray = [];
     
     if(userData){
         emptyArray = suggestions.filter((data) => {
             //filter
             return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
         });
         emptyArray = emptyArray.map((data)=> {
            return data ='<li onclick="selectTo(this)">' + data + '</li>';
         });
         suggboxto.classList.add("showsugg");
     }else {
        suggboxto.classList.remove("showsugg");
     }
     showSuggestionsTo(emptyArray);

}

function showSuggestionsFrom(list){
    let listData;
    if(!list.length){
        userValue = FromInput.value;
        listData = '<li onclick="selectFrom(this)">' + userValue + '</li>';

    }else{
        listData = list.join('');
    }
    suggboxFrom.innerHTML = listData;
}

function showSuggestionsTo(list){
    let listData;
    if(!list.length){
        userValue = FromInput.value;
        listData = '<li onclick="selectTo(this)">' + userValue + '</li>';

    }else{
        listData = list.join('');
    }
    suggboxto.innerHTML = listData;
}

function selectFrom(element){
    let selectUserData = element.textContent;
    FromInput.value = selectUserData;
    suggboxFrom.classList.remove("showsugg");
}

function selectTo(element){
    let selectUserData = element.textContent;
    ToInput.value = selectUserData;
    suggboxto.classList.remove("showsugg");
}
