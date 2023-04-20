const jeff = document.getElementById("jeff");
const pipe = document.getElementById("pipe");


function jump(){
    if(jeff.classList.contains("jump")) return
    jeff.classList.add('jump')

    setTimeout(()=>{
        jeff.classList.remove('jump');
    },600)
}

document.addEventListener("keydown",(key)=>{
    if(key.key === " ") jump()
   
})

document.addEventListener("click",jump)