function showresult(){
    let web=document.querySelector("#web").value;
    let mobile=document.querySelector("#mobile").value;
    let network=document.querySelector("#network").value;
    let algo=document.querySelector("#algo").value;
    let db=document.querySelector("#db").value;
    let signal=document.querySelector("#signal").value;
    

    let total=parseFloat(web)+parseFloat(mobile)+parseFloat(network)+parseFloat(algo)+parseFloat(db)+parseFloat(signal);
    let per=(total*100)/600;
    
    document.querySelector(".to").innerHTML=total;
    document.querySelector(".per").innerHTML=per;
    if(per>=90)
        document.querySelector(".gpa").innerHTML="A"
    else if(per>=85)
    document.querySelector(".gpa").innerHTML="A-"
    else if(per>=80)
    document.querySelector(".gpa").innerHTML="B+"
    else if(per>=75)
    document.querySelector(".gpa").innerHTML="B-"
    else if(per>=70)
    document.querySelector(".gpa").innerHTML="C+"
    else if(per>=65)
    document.querySelector(".gpa").innerHTML="C"
    else if(per>=60)
    document.querySelector(".gpa").innerHTML="D+"
    else if(per>=55)
    document.querySelector(".gpa").innerHTML="D"
    else if(per>=50)
    document.querySelector(".gpa").innerHTML="D-"
    else
    document.querySelector(".gpa").innerHTML="F"



}