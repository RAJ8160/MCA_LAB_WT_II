function formate(date){
    var year = date.getFullYear();
    var month = date.getMonth()+1;//Becuase month Start in JavaScript with 0
    var day = date.getDate();

    if(day<10) day = "0"+day
    if(month<10) month = "0"+month

    let months = ['January','February','March','April','May','June','July','August','September','octomber','November','December'];
    return {
        formate1: year +'-'+month+'-'+day , // yyyy/mm/dd
        formate2: day + '/'+month+'/'+year, // dd/mm/yyyy
        formate3: months[date.getMonth()]+" "+day+" "+year  // mm dd yyyy
    }
}

var date = new Date();
console.log(formate(date));