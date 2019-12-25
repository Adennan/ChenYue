function getStyle(obj,attr) {
	if (obj.currenStyle) {
		return obj.currenStyle[attr];
	}
	else{
		return getComputedStyle(obj,null)[attr];
	}
}

function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			// if (attr == 'opacity') {
			// 	var now = parseInt(getStyle(obj,attr)*100)
			// }
			// var now = parseInt(getStyle(obj,attr));
			// if (attr == 'opacity') {
			// 	now = now *100;
			// 	console.log(now);
			// }
			if (attr == 'opacity') {
				var now = parseInt(getStyle(obj,attr)*100);
			}
			else{
				var now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr]-now)/6;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			//只能清除一个定时器
			// if(now == json[attr]){
			// 	clearInterval(timer)
			// }
			// else{

			// }
			var current = now + speed;
			if (attr == 'opacity') {
				obj.style.opacity = current/100;
			}
			else{
				obj.style[attr] = current + 'px';
			}
			if (json[attr] !== current ) {
				isStop = false;
			}
		}
		if (isStop) {
			clearInterval(obj.timer);
			if (callback) {
				callback();
			}
			// callback&&callback();
		}
	},30)
}