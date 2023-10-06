    let btn = document.getElementById("press");
    let close = document.getElementById("close");
    btn.addEventListener("click",()=>{
        document.getElementById("dropdown").style.display = "block";
    })  
    close.addEventListener("click",()=>{
        document.getElementById("dropdown").style.display = "none";
    })
