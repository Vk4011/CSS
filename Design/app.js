

let b=document.getElementById("button")
b.addEventListener('click',fun)


function fun(){
    
    b.textContent="wait..!"
    fetch('api.txt').then((res)=>{
        console.log(res)
    }).then((data)=>{
        console.log(data)
        document.getElementById('data').innerText = data;
    })
    
}