let output=document.getElementById('input')
// console.log(output.value)

function show(num){
output.value +=num
    
}
function calculate(){
    try{
      output.value=eval(output.value)
    }
    catch{
        output.value='error'
    }
}
function clr(){
    output.value=""

}
function del(){
    output.value=output.value.slice(0,-1)

}