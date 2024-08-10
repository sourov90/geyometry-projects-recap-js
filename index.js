const container = document.getElementById('calculator');
document.getElementById("tri-btn").addEventListener('click',function(event){
    const int1 = document.getElementById('t-int1').value ;
    const int2 = document.getElementById('t-int1').value ;
    const cal = 0.5 * int1 * int2;
    const p = document.createElement("p");
    p.innerText='Triangle calculator : '+ cal 
    container.appendChild(p)
})

document.getElementById("b-btn").addEventListener('click',function(){
    const b1= document.getElementById("b-1").value 
    const b2 = document.getElementById('b-2').value;
    const p = document.createElement('p');
    p.innerText= 'square result : '+ b1*b2;
    container.appendChild(p)
})