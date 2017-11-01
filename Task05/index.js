(function() {
    var btns = document.getElementsByTagName('button');
    var input = document.getElementsByTagName('input')[0];
    var bottom = document.getElementsByClassName('bottom')[0];

    //给div添加样式
    function addstyle(param1, param2) {
        // param1.innerHTML = param2;
        param1.style.height = param2 + 'px';
        param1.style.backgroundColor = 'red';
    }

    //左侧入
    btns[0].addEventListener("click", function() {
        var but_first = bottom.getElementsByTagName('div')[0];
        var div = document.createElement('div');

        if (input.value >= 10 && input.value <= 100) {
            getAllDiv();
            addstyle(div, input.value);
            bottom.insertBefore(div, but_first);
        } else {
            alert("你输入的数值不在10-100的范围内~请重新输入！");
        }

    }, false);

    //右侧入
    btns[1].addEventListener("click", function() {
        var div = document.createElement('div');

        if (input.value >= 10 && input.value <= 100) {
            getAllDiv();
            addstyle(div, input.value);
            bottom.appendChild(div);
        } else {
            alert("你输入的数值不在10-100的范围内~请重新输入！");
        }

    }, false);

    //左侧出
    btns[2].addEventListener("click", function() {
        var div_first = bottom.getElementsByTagName('div')[0];
        var divs = bottom.getElementsByTagName('div');
        var divLength = divs.length;

        if (divLength < 1) {
            alert("请输入几个队列元素再出队!");
        } else {
            bottom.removeChild(div_first);
        }


    }, false);

    //右侧出
    btns[3].addEventListener("click", function() {
        var divs = bottom.getElementsByTagName('div');
        var divLength = divs.length;

        if (divLength < 1) {
            alert("请输入几个队列元素再出队!");
        } else {
            bottom.removeChild(divs[divs.length - 1]);
        }

    }, false);

    //获取队列元素的总数
    function getAllDiv() {
        var count = document.getElementsByClassName('bottom')[0].getElementsByTagName('div');

        if (count > 60) {
            alert("队列个数有限!");
            return;
        }
    }

    //冒泡排序算法
    function sort() {
        var divs = bottom.getElementsByTagName('div');
        var divLength = divs.length;

        if (divLength <= 1) {
            return;
        }
        console.log(divLength);
        for (var m = 0; m < divs.length; m++) {
            for (var n = 0; n < divs.length - m - 1; n++) {

                var k0 = parseInt(divs[n].style.height);
                var k1 = parseInt(divs[n + 1].style.height);
                if (k0 > k1) {
                    var temp;
                    temp = divs[n].style.height;
                    divs[n].style.height = divs[n + 1].style.height;
                    divs[n + 1].style.height = temp;
                }
            }
        }
    }

    //排序
    btns[4].addEventListener("click", function() {
        sort();
    }, false);

})();