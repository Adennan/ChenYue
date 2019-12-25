//实现标签切换功能
window.onload = function() {
        var oLi = document.getElementById('tab_list');
        var aDiv = document.getElementsByClassName('content');
        aDiv[0].classList.remove('hide');
        oLi.onclick = function(e) {
            e = e ? e : window.event;
            var target = e.target || e.srcElement;
            for (var i = 0; i < aDiv.length; i++) {

                if (target.id == i) {
                    aDiv[i].classList.remove('hide')
                } else {
                    aDiv[i].classList.add('hide')
                }
            }


        }
    }
    //实现名字投射功能
var wrap = document.getElementById('wrap');
var plan = document.getElementsByClassName('plan');
wrap.onclick = showPlans;

var nameList = document.getElementsByClassName('nameList');

var index = 0;
var leftposition = 100;
var toppositon = 700;

function showPlans() {
    if (index == 5) return;
    if (index == 3) {
        toppositon = 750;
        leftposition = 1200;
    }
    animate(nameList[index], { fontSize: 46, left: leftposition, top: toppositon }, showPlans);
    index++;
    if (index >= 3) toppositon = toppositon + 200;
    else toppositon = toppositon + 180;
}

nameList[0].onclick = function() {
    animate(nameList[0], { opacity: 0 }, function() {
        nameList[0].innerHTML = '北京的大学';
        animate(nameList[0], { opacity: 100 });
    });
}

nameList[1].onclick = function() {
    animate(nameList[1], { opacity: 0 }, function() {
        nameList[1].innerHTML = '快乐工作';
        animate(nameList[1], { opacity: 100 });
    });
}

nameList[2].onclick = function() {
    animate(nameList[2], { opacity: 0 }, function() {
        nameList[2].innerHTML = '百度offer';
        animate(nameList[2], { opacity: 100 });
    });
}

nameList[3].onclick = function() {
    animate(nameList[3], { opacity: 0 }, function() {
        nameList[3].innerHTML = '西山居offer';
        animate(nameList[3], { opacity: 100 });
    });
}

nameList[4].onclick = function() {
    animate(nameList[4], { opacity: 0 }, function() {
        nameList[4].innerHTML = '北京邮电大学';
        animate(nameList[4], { opacity: 100 });
    });
}


//实现点击其它标签后，立方体瞬间消失

var tab_list0 = document.getElementById('0');
var tab_list1 = document.getElementById('1');

tab_list0.onclick = function() {
    wrap.style.display = 'block';
}
tab_list1.onclick = function() {
    wrap.style.display = 'none';
}

//实现辰悦计划界面的滑动显现效果
var b_flx = document.getElementsByClassName('b-flx')[0];
var silde_list = document.getElementsByClassName('silde_list')[0];
var now = 0;
var nowleft = 0;

b_flx.onclick = function() {
    setInterval(function() {
        //实现banner图片右移
        nowleft = parseInt(getStyle(b_flx, 'marginLeft'))
        if (nowleft < 150) {
            nowleft += 3;
            b_flx.style.marginLeft = nowleft + 'px';
        }

        //实现文字显现
        now = parseInt(getStyle(silde_list, 'opacity'));

        if (now < 100) {
            now += 10;
            silde_list.style.opacity = now;
        }
    }, 20);
}