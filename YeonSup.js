var readInput = function() {
    var input = document.getElementById('input1');
    console.log(input.value);
};

var show = document.getElementById('test');
var menu = document.createElement('ul');
menu.id = 'menu1'

var sub1 = document.createElement('li');
sub1.innerHTML = '짜장면'
sub1.id = 'sub1'

var sub2 = document.createElement('li');
sub2.innerHTML = '짬뽕'
sub2.id = 'sub2'

menu.appendChild(sub1);
menu.appendChild(sub2);
show.appendChild(menu);