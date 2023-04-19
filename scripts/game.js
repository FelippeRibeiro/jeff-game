const jeff = document.getElementById("jeff");
const pipe = document.getElementById("pipe");


function jump(){
    jeff.classList.add('jump')

    setTimeout(()=>{
        jeff.classList.remove('jump');
    },600)
}
document.addEventListener("keydown",(key)=>{
    if(key.key === " ") jump()
   
})