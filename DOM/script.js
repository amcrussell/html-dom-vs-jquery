


let btn = document.createElement('button');

let btnTxt = document.createTextNode('Button');

let btn2 = document.getElementById('button2');

let form = document.getElementById('form');

let divHover = document.getElementById('3');

let colorTxt = document.getElementById('colorTxt');

let divSpan = document.getElementById('divSpan');

let buttonSpan = document.getElementById('buttonSpan');

let buttonFriend = document.getElementById('buttonFriends');

let listFriend = document.getElementById('listFriend');

const friendList = ['korbin', 'bryan', 'steven', 'fetchy', 'sunny', '6', '7', '8', '9', 'ouch'];

btn.appendChild(btnTxt);

document.body.prepend(btn);

btn.addEventListener('click', function () {

    alert('clicked!');

});

form.addEventListener('click', function () {
    event.preventDefault();
});

btn2.addEventListener('click', function () {

    let txt = document.getElementById('btn2Txt');

    alert(txt.value);

});

divHover.addEventListener('mouseover', function () {

    divHover.style.backgroundColor = 'cyan';

});

divHover.addEventListener('mouseout', function () {

    divHover.style.backgroundColor = '';

});

colorTxt.addEventListener('click', function () {

    let randColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    colorTxt.style.color = (randColor);

});

buttonSpan.addEventListener('click', function () {

    let span = document.createElement('span');
    let spanText = document.createTextNode('Austin R')

    span.appendChild(spanText);

    divSpan.appendChild(span);

});

buttonFriend.addEventListener('click', function () {

    for (let c = 0; c < friendList.length; c++) {
        let itemFriend = document.createElement('li');
        let friend = document.createTextNode(friendList[c]);

        itemFriend.appendChild(friend);

        listFriend.appendChild(itemFriend);

    }
});