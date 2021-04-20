function formatDate(time) {
    var dt = new Date(parseInt(time));
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    month=("0"+month);
    month=month.substring(month.length-2);
    var date = dt.getDate();
    date=("0"+date);
    date=date.substring(date.length-2);
    
    return  year + "-" + month + "-" + date ;
    // //  console.log(ti);
}