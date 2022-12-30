const three=document.getElementById("button-three");
const sum=document.getElementById("button-sum");
const five=document.getElementById("button-five");

const text=document.getElementById("textshow");

const include=document.getElementById("include")

three.addEventListener("click",showtime)

function showtime(e)
{
e.preventDefault();
text.value+=three.value
}
sum.addEventListener("click",summer)

function summer()
{
    text.value+=sum.value
}

five.addEventListener("click",endshow)

function endshow()
{
text.value+=five.value
}

include.addEventListener("click",includer)

function includer()
{
text.value=parseInt(three.value)+parseInt(five.value)
}
