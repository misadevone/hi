
console.log("js berfungshen");

var menuList = ['intro', 'about', 'contact'];
var menuMain = document.getElementById("main-menu");
var contentMain = document.getElementById("main-content");
var a = "";



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