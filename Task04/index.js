
(function(){
	var btns = document.getElementsByTagName('button');
	var input = document.getElementsByTagName('input')[0];
	var bottom = document.getElementsByClassName('bottom')[0];

	//左侧入
	btns[0].addEventListener("click",function(){
    var but_first = bottom.getElementsByTagName('button')[0],
        button = document.createElement('button');

    button.innerHTML = input.value;
    bottom.insertBefore(button,but_first);
	},false);

	//右侧入
	btns[1].addEventListener("click",function(){
    var button = document.createElement('button');

    button.innerHTML = input.value;
    bottom.appendChild(button);
	},false);

	//左侧出
	btns[2].addEventListener("click",function(){
		var btn_first = bottom.getElementsByTagName('button')[0];
		
		bottom.removeChild(btn_first);
	},false);

	//右侧出
	btns[3].addEventListener("click",function(){
    var but_length = btns.length;

    bottom.removeChild(btns[but_length - 1]);
	},false);
})();