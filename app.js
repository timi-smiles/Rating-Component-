let displaybtn = document.querySelector('#submit')
 let Ratebtn2 = document.querySelectorAll('.btn2')
let Mybtn = document.querySelector('#mybtn')
let Container2 = document.querySelector('.container2')


function david(){
    document.getElementById('container2').style.display = "block";
}

let btnClick;
displaybtn.addEventListener('click', david);
for(let i = 0; i< Ratebtn2.length; i++){
    // console.log(Ratebtn2[i])
    Ratebtn2[i].addEventListener("click", ()=>{
        // console.log("clicked")
        btnClick = Ratebtn2[i].innerHTML
        // console.log(btnClick)
    })
}


Mybtn.addEventListener ('click', ()=>{
console.log(btnClick)

    // let randOptionNum = Math.floor(Math.random() * options.length)+ 1
    document.getElementById('h3').innerHTML=`You selected ${btnClick} out of 5` 
})














