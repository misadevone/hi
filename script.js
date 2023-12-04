
console.log("js berfungshen");

var menuList = ['intro', 'about', 'contact'];
var menuMain = document.getElementById("main-menu");
var contentMain = document.getElementById("main-content");
var bodyMain = document.getElementById("mainSuper");
var a = "";
var beautyMode = 0;



LoadMenu(menuList);
drawMenu(a);
drawContent(menuList[0]);

function LoadMenu(item) {
    item.forEach(buildMenu);
}

function buildMenu(item, index) {
    a += "<a href='#"+item+"' onClick='"+'loadContent("'+item+'")'+"'>"+item+"</a>";
}

function drawMenu(e){
    menuMain.innerHTML = e;
}

function drawContent(e){
    var d = document.getElementById("content-"+e);
    contentMain.innerHTML = d.textContent;
}

function loadContent(e){
    drawContent(e);
}

function beautyToggle(e){
    if(beautyMode == 0) {
        e.parentElement.style.backgroundImage = "url('wall1.png')";
        bodyMain.style.fontFamily = "Times New Roman";
        beautyMode = 1;
    } else {
        
        e.parentElement.style.backgroundImage = "url('')";
        bodyMain.style.fontFamily = "Arial, Helvetica, sans-serif";
        beautyMode = 0;
    }
}

function fontSize(e) {
    console.log(bodyMain.style.fontSize);
    if(e == 1) {
        bodyMain.style.fontSize = "22px";

    }
    if(e == -1) {
        bodyMain.style.fontSize = "8px";

    }
}