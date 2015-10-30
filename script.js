$(document).ready(function(){
    makeGrid(initial, 1);

});

var initial = (16); //sets each grid to 16x16 boxes on page load

var makeGrid = function(boxArea, mode){ //The main grid making function. Mode Argumets: 1 is default.  2 is random Colors. 3 is Gray-Gradient.
    var i = 0;
    while (i<boxArea){
            for (var x=0; x<boxArea; x++){
        if (x===(boxArea)-1){
            $("<div class='box'></div><br>").appendTo('#main'); // adds line-break if last box in row.
            i++
        }else{
            $("<div class='box'></div>").appendTo('#main');
        }
}      
    }
$('.box').height(960/boxArea);
$('.box').width(960/boxArea);

if (mode === 1){
    $('.box').on('mouseover', function(){
        $(this).css("background-color","blue");
        })
}else if (mode === 2){
        $('.box').on('mouseover', function(){
            var randNumb = Math.floor((Math.random() * 16777215) + 1);
            hexString = (randNumb).toString(16);
                $(this).css("background-color",'#'+hexString);
})
}else{
        $('.box').on('mouseover', function(){
            var gradiant = $(this).css('opacity');
            if(gradiant > 0){
                $(this).css('opacity',gradiant - 0.1);}
})
}

        };
$('#new').on('click',function(){
    var input = prompt('Choose your grid size. Please Enter a Number Between 1 and 81.');
    if(0 < input && input < 82 && !(isNaN(input)) && input % 1 == 0){
        $('#main').empty();
        makeGrid(input, 1);
    }else{
        alert('Please Enter a Valid Value.');
        }
    });

$('#random').on('click',function(){
    var input = prompt('Choose your grid size. Please Enter a Number Between 1 and 81.');
    if(0 < input && input < 82 && !(isNaN(input)) && input % 1 == 0){
        $('#main').empty();
        makeGrid(input, 2);
    }else{
        alert('Please Enter a Valid Value.');
        }
    });

$('#blackout').on('click',function(){
    var input = prompt('Choose your grid size. Please Enter a Number Between 1 and 81.');   
    if(0 < input && input < 82 && !(isNaN(input)) && input % 1 == 0){
        $('#main').empty();
        makeGrid(input, 3);
    }else{
        alert('Please Enter a Valid Value.');
        }  
    });

$('#clear').on('click',function(){
    $('#main').empty();
    makeGrid(initial, 1);
});

$('.info').on('click', function(){
    var explain = $(this).data('additional')
    $('p').remove();
    var moreInfo = $('<p>'+explain+'</p>');
    $('#main').before(moreInfo);
});

$('.blank').on('click', function(){
    $('p').remove();
});
