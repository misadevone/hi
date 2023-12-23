
console.log("js berfungshen");

var menuList = ['intro', 'about', 'contact', 'calculator','login', 'menu-switch'];
var menuMain = document.getElementById("menu-top");
var menuSide = document.getElementById("menu-side");
var contentMain = document.getElementById("main-content");
var bodyMain = document.getElementById("mainSuper");
var a = "";
var beautyMode = 0;

// nti letak betul2
menuMain.style.display = "flex";
// menuSide.style.display = "flex";

LoadMenu(menuList);
drawMenu(a);
drawContent(menuList[0]);

function LoadMenu(item) {
    item.forEach(buildMenu);
}

function buildMenu(item, index) {
    if(item == "menu-switch") {
        a += "<a href='#"+item+"' class='a-right' onClick='"+'toggleLayout("'+item+'")'+"'>"+item+"</a>";
    } else {
        a += "<a href='#"+item+"' onClick='"+'loadContent("'+item+'")'+"'>"+item+"</a>";
    }
}

function drawMenu(e){
    menuMain.innerHTML = e;
    menuSide.innerHTML = e;
}

function drawContent(e){
    var d = document.getElementById("content-"+e);
    contentMain.innerHTML = d.innerHTML;
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
function toggleLayout(e) {
    console.log("Toggle Pressed");
    
    if(menuMain.style.display == "flex"){
        menuMain.style.display = "none";
        menuSide.style.display = "flex";
    } else {
        menuMain.style.display = "flex";
        menuSide.style.display = "none";

    }

}