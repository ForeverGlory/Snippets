//核心对象变量
var xmlHttp;

//区分浏览器创建XMLHttpRequest核心对象
function create(){
    if(window.XMLHttpRequset){
        xmlHttp = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
}

//ajax核心执行方法（此处为提交到servlet处理后,返回纯文本）
function run(){
    create();
    var value = document.getElementById("id").value;
    var URL = "/ajax/servlet/ajax?name="+value;
    xmlHttp.open("GET",URL,true);
    xmlHttp.onreadystatechange=callback;
    xmlHttp.send(null);
}

//回调函数
function callback(){
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            var v = xmlHttp.responseText;
            alert(v);
        }
    }
}