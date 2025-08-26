let changeColorL = () => {
    let view_text_l = document.getElementById("view-text-box-left");
    
    if (view_text_l.classList.contains("hidden")) {
        view_text_l.classList.remove("hidden")
        view_text_l.classList.add("text-left")
    } else {
        view_text_l.classList.remove("text-left")
        view_text_l.classList.add("hidden")
    }
    
}

let changeColorR = () => {
    let view_text = document.getElementById("view-text-box-right");
    
    if (view_text.classList.contains("hidden")) {
        view_text.classList.remove("hidden")
        view_text.classList.add("text-right")
    } else {
        view_text.classList.remove("text-right")
        view_text.classList.add("hidden")
    }
    
}
