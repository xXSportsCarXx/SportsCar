// function setText(){
    
//     console.log("test")
//     var element= document.getElementById("id-test")
//     console.log(element)
//     element.textContent="test2"
//     element.style.color="blue"
//     element.style.display="none"
// }
// // setText()

// var myButton=document.getElementById("id-button")
// myButton.addEventListener("click",onClick)
// function onClick(){
    
    // setInterval(setText,2000)
    // console.log("test")
    // var element= document.getElementById("id-test")
    // console.log(element)
    // element.textContent="test2"
    // element.style.color="blue"
    // element.style.display="none"   




var datenElement= document.getElementById("daten")
datenElement.style.display="none"

var buttonElement=document.getElementById("buttonShow")
buttonElement.addEventListener("click", clickButton)

function clickButton(){
datenElement.style.display="block"
}

var datenElement= document.getElementById("lamborghiniHuracane")


var datenElement= document.getElementById("buttonClose")
datenElement.addEventListener("click", closeKauf)
function closeKauf(){
    $('#bd-example-modal-sm').modal('hide')
    $('#exampleModalCenter').modal('hide')
console.log("working")
}



var datenElement= document.getElementById("spenden100")
datenElement.style.display="none"

var buttonElement=document.getElementById("100")
buttonElement.addEventListener("click", clickButton)

function clickButton(){
datenElement.style.display="Block"
}