// function change_style(){
//     let a = document.getElementById('show')
//     if (window.getComputedStyle(a).color == "red")
//     {
//         a.style.color = "green"
//     }
//     else
//     a.style.color = "red"
// }



function change_style2(){
    a = document.getElementById('show');
    b = window.getComputedStyle(a).backgroundColor;
    alert (b);
    if ( b != "rgb(255,0,0)" )
    {
        a.style.backgroundColor = "rgb(255,0,0)"
    }
    else
        a.style.backgroundColor = "rgb(0,255,0)"
}



function change_style3(){
    a = document.getElementById('show');
    b = window.getComputedStyle(a).padding;
    alert (b);
    if ( b != "20px" )
    {
        a.style.padding = "20px"
    }
    else
        a.style.padding = "10px"
}
