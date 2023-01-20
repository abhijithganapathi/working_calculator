function displayData(data){
    result.value+=data
}

function clearData(){
    result.value=''
}

function evaluateData(){
    result.value=eval(result.value)
}

function backSpace(){
    data=result.value
    result.value=data.slice(0,-1)
}