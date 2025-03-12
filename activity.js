let btn=document.querySelector("button")
btn.addEventListener("click",function() 
{
    let div=document.querySelector("div");

    let h3=document.querySelector("h3");

    let randomm=randomcolor();
    div.style.backgroundColor=randomm;
    h3.innerText=randomm;
    console.log('color updated');
    
});
function randomcolor()
{
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let color=`rgb(${red},${blue},${green})`;
    return color;

}