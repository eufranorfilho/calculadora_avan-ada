//declaração e seleção de items
let output =  document.getElementById("output").value;

function calc(op){
    const input01 = document.getElementById("input1").value;
    const input02 = document.getElementById("input2").value;
    switch(op){
        case"+": output = parseFloat(input01)+parseFloat(input02); break
        case"-": output = parseFloat(input01)-parseFloat(input02); break
        case"*": output = parseFloat(input01)*parseFloat(input02);break
        case"/": output = parseFloat(input01)/parseFloat(input02);break
    }
    document.getElementById("output").value = output
    const newResults = "<div>" + input01 + " " + op +" "+ input02 + " = "+ output + "</div>"
    const results = document.getElementById("history");
    results.innerHTML = newResults + results.innerHTML;

    if(results.children.length > 15){
        results.removeChild(results.childNodes[15]);
    }
}
function apagar(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("output").value = "";
    document.getElementById("input1").focus(); 
    document.getElementById("output").value = 0.0;
    document.getElementById("history").innerHTML = " ";
}


