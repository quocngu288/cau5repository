const handleClickOpenSidebar=()=> {
    console.log("cllick")
    document.querySelector('.sidebar').classList.add("opensidebar")
}

const handleClickCloseSidebar=()=> {
    document.querySelector('.sidebar').classList.remove("opensidebar")
}