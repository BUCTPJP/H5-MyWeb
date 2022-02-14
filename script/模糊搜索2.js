window.onload = function(){
    //定义原始数据
    var searchList = [alert(document.getElementById('all').innerHTML)];
    //获取ul
    var oul = document.getElementById("conter");
    //搜索按钮的点击事件
    document.getElementById("an").onclick = function(){
        //获取input框的value值
        var inputcom = document.getElementById("input-com").value;
        //定义新数组，保存符合搜索内容要求的数据
        var a = [];
        var k = 0;
        //循环判断符合要求的数据
        for(var j = 0;j < searchList.length;j ++){
            //数据中不包含搜索内容值的返回-1
            if(searchList[j].indexOf(inputcom) != -1){
                a[k++] = searchList[j];
            }
        }
        //清空ul里面的内容
        document.getElementById("conter").innerHTML = "";
        //循环将数据输出到ul下
        for(var p = 0;p < a.length;p ++){
            //创建li
            let oli = document.createElement("li");
            //定义li里的内容
            oli.innerHTML = a[p];
            //将li添加到ul里
            oul.appendChild(oli);
        }
    };
    //循环将数据渲染到ul下
    for(var i = 0;i < searchList.length;i ++){
        let oli = document.createElement("li");
        oli.innerHTML = searchList[i];
        oul.appendChild(oli);
    }
}