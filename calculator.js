function action(val){
    
    document.getElementById("screen").value= document.getElementById("screen").value+val;

}
function clear_display(){
    document.getElementById("screen").value=""
}
function equal_button(){
    text=document.getElementById("screen").value
    document.getElementById("screen").value=eval(text)

}