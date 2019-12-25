var slider = document.getElementById('slider');

var li = document.getElementsByClassName('li');

var bigbox = document.getElementById('bigbox');

var wrap = document.getElementsByClassName('main_wrap')[0];

var content = document.getElementsByClassName('main_content')[0];

li[0].onclick=function(){
    var now = parseInt(getStyle(bigbox,'width'));
    animate(slider,{left:-now*0});
    wrap.style.height = 750 + 'px';
    content.style.height = 750 + 'px';
    for (var i = 0; i < li.length; i++) {
        li[i].style.opacity = 0.7;
    }
    li[0].style.opacity = 1;
}

li[1].onclick=function(){
    var now = parseInt(getStyle(bigbox,'width'));
    animate(slider,{left:-now*1});
    wrap.style.height = 1200 + 'px';
    content.style.height = 1200 + 'px';
    for (var i = 0; i < li.length; i++) {
        li[i].style.opacity = 0.7;
    }
    li[1].style.opacity = 1;
}

li[2].onclick=function(){
    var now = parseInt(getStyle(bigbox,'width'));
    animate(slider,{left:-now*2});
    wrap.style.height = 600 + 'px';
    content.style.height = 600 + 'px';
    for (var i = 0; i < li.length; i++) {
        li[i].style.opacity = 0.7;
    }
    li[2].style.opacity = 1;
}

var img1 = document.getElementById('img1');

var img2 = document.getElementById('img2');

var smallslider = document.getElementById('smallslider');

var tosee = document.getElementById('tosee');

var bigimg = document.getElementById('bigimg');

img1.onmouseover = function(){
	smallslider.style.display='block';
	img2.style.display='block';
}

img1.onmouseout = function(){
    smallslider.style.display='none';
    img2.style.display='none';
}

img1.onmousemove = function(ev){
    var ol = ev.clientX-tosee.offsetLeft-150/2;
    var ot = ev.pageY-700-150/2;

    ol = ol<0?0:ol>150?150:ol;
    ot = ot<0?0:ot>150?150:ot;

    smallslider.style.left = ol + 'px';
    smallslider.style.top = ot +'px';

    var bl = ol * 400 /150;
    var bt = ot * 400/150;

    bigimg.style.left = -bl + 'px';

    bigimg.style.top = -bt + 'px';

}

var change = document.getElementById('change');

var time = 3000;

var size = 65;

var arr = ['社会','你我','科技','生活'];

var index = 0 ;

function Changeits(){
    setTimeout(function(){
        if(time == 3000){
            time = 500;
        } 
        else {
            time = 3000;
        }
        if (size == 8) {
            size = 65;
        }
        else {
            size = 8;
        }
        if (size == 65) {
            change.innerHTML = arr[index];
            index++;
            index = index % 4;
        }
        animate(change,{fontSize:size},function(){
            Changeits();
        });
    },time);
}

Changeits();