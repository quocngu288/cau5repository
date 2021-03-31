const handleClickOpenSidebar=()=> {
    console.log("cllick")
    document.querySelector('.sidebar').classList.add("opensidebar")
}

const handleClickCloseSidebar=()=> {
    document.querySelector('.sidebar').classList.remove("opensidebar")
}

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
