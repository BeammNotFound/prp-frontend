function MyPathConfig(Path){

    var DefaultPath = "http://192.168.1.233:8080/";

// var DefaultPath = "http://47.94.104.224:8080/";

    return DefaultPath + Path;
}

function error404(){
    // opener.location.href = 'manError404.html';
    window.location.href = "../../html/man/manError404.html";
}


function error500(){
    opener.location.href = '../../html/man/manError500.html';
}