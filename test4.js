// function showup() {
//     document.getElementById('show').style.opacity = 1;
// }
// setTimeout(showup,1000)





function change_style(){
    let a = document.getElementById('show')
    if (window.getComputedStyle(a).color == "red")
    {
        a.style.color = "green"
    }
    else
    a.style.color = "red"
}
