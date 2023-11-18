


let buttonOne = $('<button></button>').text('click!').addClass('btn')

const friendList = ['korbin', 'bryan', 'steven', 'fetchy', 'sunny', '6', '7', '8', '9', 'ouch'];

$(document).ready(function() {

    $('body').prepend(buttonOne);


    $('.btn').on('click', function(){

        alert('HellO!');

    })

    $('#button2').on('click', function(){

        alert($('#btn2Txt').val());

    })

    $('#3').on('mouseover', function(){

        $('#3').css('background-color', 'cyan');
    })

    $('#3').on('mouseout', function(){

        $('#3').css('background-color', '');
    })

    $('#colorTxt').on('click', function(){

        let randColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        $('#colorTxt').css('color', randColor);
    })

    $('#buttonSpan').on('click', function(){

        $('#divSpan').append('<span>' + 'Austin R' + '</span>');
    })

    $('#buttonFriends').on('click', function(){

        for(let c = 0; c < friendList.length; c++){

            $('#listFriend').append('<li>' + friendList[c] + '</li>');
        }
    })


});