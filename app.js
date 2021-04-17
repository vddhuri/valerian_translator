
var textComponent = document.querySelector("#txt-area");
var  buttonComponet =document.querySelector("#btn-translate");
var output =document.querySelector("#output");
console.log("hereee im ");
function errorHandler(error){
    console.log("oops" + error);
    alert("soemthing wrong ... try again after some time")
}

function buttonClick(){
    console.log("clicked");
    var url='https://api.funtranslations.com/translate/valyrian.json'+'?text='+textComponent.value
    fetch(encodeURI(url)).then(response=>response.json()).then(json=> output.innerText=json.contents.translated).catch(errorHandler)
    
}
// textComponent.addEventListener("onchange",showText)
buttonComponet.addEventListener("click",buttonClick)