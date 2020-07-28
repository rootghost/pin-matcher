//generator button 
var generateBtn = document.getElementById("generator-btn");
generateBtn.addEventListener('click',function(){
    var generateNumber=Math.floor(1000 + 9000 * Math.random());
    document.getElementById("pin-generate").value = generateNumber;
})
//number key button
document.getElementById("0").addEventListener('click',function(){
   inputValue("0");
    
})
document.getElementById("1").addEventListener('click',function(){
    inputValue("1");
})
document.getElementById("2").addEventListener('click',function(){
    inputValue("2");
})
document.getElementById("3").addEventListener('click',function(){
    inputValue("3");
})
document.getElementById("4").addEventListener('click',function(){
    inputValue("4");
})
document.getElementById("5").addEventListener('click',function(){
    inputValue("5");
})
document.getElementById("6").addEventListener('click',function(){
    inputValue("6");
})
document.getElementById("7").addEventListener('click',function(){
    inputValue("7");
})
document.getElementById("8").addEventListener('click',function(){
    inputValue("8");
})
document.getElementById("9").addEventListener('click',function(){
    inputValue("9");
})

//back space button
document.getElementById("backspace").addEventListener('click',function(){
    var inputValue=document.getElementById("inputArea").value;
    var value='';
    for(var i = 0;i<inputValue.length-1;i++){
    value=value+inputValue[i];
   }
    document.getElementById("inputArea").value=value;
})

//clear button
document.getElementById("clear").addEventListener('click',function(){
    var inputValue=document.getElementById("inputArea").value;
    document.getElementById("inputArea").value='';
    document.getElementById("dont-match").style.display="none";
    document.getElementById("matched").style.display='none';
})

//submit button 
document.getElementById("submit-btn").addEventListener('click',function(){
    var inputValue = document.getElementById("inputArea").value;
    var generatedKey = document.getElementById("pin-generate").value;
    var leftTry = document.getElementById("try").innerText;
    if(inputValue == generatedKey){
        document.getElementById("matched").style.display='block';
        document.getElementById("dont-match").style.display='none';
    }
    else{
        document.getElementById("dont-match").style.display="block";
        document.getElementById("try").innerText = leftTry-1;
        var leftTryNew = document.getElementById("try").innerText;
        if(leftTryNew == 0){
            document.getElementById("submit-btn").style.display="none";
        }
    }
})

//function
function inputValue(id){
    var inputValue=document.getElementById("inputArea").value;
    document.getElementById("inputArea").value=inputValue+id;
}
