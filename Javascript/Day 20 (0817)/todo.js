let itemBox = document.getElementById('item');
let addBtn = document.getElementById('add');
let ul = document.getElementById('itemList');

let itemList = [];

addBtn.addEventListener("click", addList);

function addList(){
    let itemText = itemBox.value;

    if (itemText != "" && itemText != null) {
        itemList.push(itemText);
        console.log(itemList);

        itemBox.value = "";
        itemBox.focus();
    } else {
        alert ("값을 입력해 주세요.");
    }

    showList();
}

function removeBtn(){

    console.log(i + "번째 삭제");

    let indexNum = this.getAttribute('id');
    itemList.splice(indexNum,1);
    console.log(itemList);

    showList();
}

function showList(){  
    let li = "";

    for (let i = 0 ; i < itemList.length ; i++) {
        li += "<li>" + itemList[i] + "<span class='close' id='"+ i + "'> X </span>" + "</li>";
    }
    ul.innerHTML = li;

    let closeBtn = document.querySelectorAll('.close');

    for (i in itemList){
        closeBtn[i].addEventListener("click", removeBtn);
    }
}
