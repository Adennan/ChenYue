function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var textbox1 = document.getElementById("textbox1");
var textList = textbox1.children;
var ltext = document.getElementById("ltext");
var rtext = document.getElementById("rtext");
var note = document.getElementById("textbox2").children;
var ul1 = document.getElementById("ul1");
var ul2 = document.getElementById("ul2");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var list3 = document.getElementById("list3");
var list_txt1= list1.innerHTML;
var list_txt2= list2.innerHTML;
var list_txt3= list3.innerHTML;
var img1 = document.getElementById("link_img1");
var img2 = document.getElementById("link_img2");
var img3 = document.getElementById("link_img3");
time = 0;
textbox1.style.top = 0 + "%";
t = 0;
o = 1;
n = 0;
ltext.style.fontSize = 54 + "px";
rtext.style.fontSize = 54 + "px";
rtext.style.right = 12 + "px";
size = 54;
r = 12; 
op = 0;
list1.style.opacity = 0.7;
list3.style.opacity = 0.7;
img1.style.opacity = 0;
img2.style.opacity = 0;
img3.style.opacity = 0;
setInterval(function(){
    time++;
    if(time >= 80){
        if(textbox1.style.top === "-300%"){
            textbox1.style.top = 0 + "%";
            textList[0].style.opacity = 1;
            textList[1].style.opacity = 1;
            textList[2].style.opacity = 1;
            note[0].style.opacity = 0;
            ltext.style.fontSize = 54 + "px";
            rtext.style.fontSize = 54 + "px";
            rtext.style.right = 12 + "px";
            t = 0;
            time = 0;
            size = 54;
            r = 12;
            o = 1;
            n = 0;
        }else{
            textbox1.style.top = --t + "%";
            o -= 0.1;
            n += 0.05;
            textList[0].style.opacity = o;
            textList[1].style.opacity = o;
            textList[2].style.opacity = o;
            note[0].style.opacity = n;
            if(size < 80){
                ltext.style.fontSize = ++size + "px";
                rtext.style.fontSize = ++size + "px";
                r += 6;
                rtext.style.right = r + "px";
            }
        }
        
    } 

}, 60);
function list_change(){
    op = 0;
    var txt1 = this.innerHTML;
    if(this == list1 || this == list3){
        var txt2 = list2.innerHTML;
        this.innerHTML = txt2;
        list2.innerHTML = txt1;
    }
    list2.style.opacity = 1;
    list2.style.fontWeight = 600;
    if(txt1 == list_txt1){
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
    }else if(txt1 == list_txt2){
        img1.style.display = "none";
        img2.style.display = "block";
        img3.style.display = "none";
    }else if(txt1 == list_txt3){
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block";
    }
    setInterval(function(){
        if(list1.style.opacity > 0.2){
            list1.style.opacity -= 0.05;
            list3.style.opacity -= 0.05; 
        }
        if(img1.style.display == "block" && img1.style.opacity < 1){
            if(op != 1){
                op += 0.05;
                img1.style.opacity = op;
            }
        }else if(img2.style.display == "block" && img2.style.opacity < 1){
            if(op != 1){
                op += 0.05;
                img2.style.opacity = op;
            }
        }else if(img3.style.display == "block" && img3.style.opacity < 1){
            if(op != 1){
                op += 0.05;
                img3.style.opacity = op;
            }   
        }      
    }, 60);
}
list1.onclick = list_change;    
list2.onclick = list_change;
list3.onclick = list_change;


