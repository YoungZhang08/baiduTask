(function() {
    var btns = document.getElementsByTagName('button');
    var input = document.getElementsByTagName('input')[0];
    var bottom = document.getElementsByClassName('bottom')[0];

    //给div添加样式
    function addstyle(param1, param2) {
        param1.innerHTML = param2;
        param1.style.height = param2 * 10 + 'px';
        param1.style.backgroundColor = 'red';
    }

    //左侧入
    btns[0].addEventListener("click", function() {
        var but_first = bottom.getElementsByTagName('div')[0];
        var div = document.createElement('div');

        if (input.value >= 10 && input.value <= 100) {
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
            addstyle(div, input.value);
            bottom.appendChild(div);
        } else {
            alert("你输入的数值不在10-100的范围内~请重新输入！");
        }

    }, false);

    //左侧出
    btns[2].addEventListener("click", function() {
        var div_first = bottom.getElementsByTagName('div')[0];

        bottom.removeChild(div_first);
    }, false);

    //右侧出
    btns[3].addEventListener("click", function() {
        var divs = bottom.getElementsByTagName('div');

        bottom.removeChild(divs[divs.length - 1]);
    }, false);

    //获取要排序的数组div的innerHTML
    function getData() {
        var divs = bottom.getElementsByTagName('div');
        var loop_arr = [];

        for (var i = 0; i < divs.length; i++) {
            loop_arr.push(Number(divs[i].innerHTML));
        }
        console.log(loop_arr);

        return loop_arr;
    }

    //冒泡排序
    function sort(data) {
        for (var m = 0; m < data.length; m++) {
            for (var n = 0; n < data.length - m; n++) {
                if (data[n] > data[n + 1]) {
                    var temp;
                    temp = data[n];
                    data[n] = data[n + 1];
                    data[n + 1] = temp;
                }
            }
        }
        console.log(data);
        return data;
    }

    //排序
    btns[4].addEventListener("click", function() {
        sort(getData());
    }, false);

})();