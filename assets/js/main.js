const handleClickOpenSidebar=()=> {
    console.log("cllick")
    document.querySelector('.sidebar').classList.add("opensidebar")
}

const handleClickCloseSidebar=()=> {
    document.querySelector('.sidebar').classList.remove("opensidebar")
}
//----------------------------------------------------------------------------------------------------------
var modal = document.getElementById("myModal");
function clickToShowModal(obj){
    var modalImg = document.getElementById("img01");

    var parentObj=obj.parentNode
    console.log(parentObj)
    image=parentObj.children[0]
    modalImg.src=image.src
    modal.style.display = "block";
}
function closeModal(){
    // var span = document.getElementsByClassName("close")[0];
modal.style.display="none"
}

//---------------------------------------------------------------------------------------------------------
btnTop=document.getElementById("btnTotop");
window.onscroll=function (){scrollFunction()}
function scrollFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        btnTop.style.display="block";
    }else {
        btnTop.style.display = "none";
    }
}
function topFunc (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
//------------------------------------------------------------------------------------------


