function MyPathConfig(Path){

    var DefaultPath = "http://192.168.1.233:8080/";

// var DefaultPath = "http://47.94.104.224:8080/";

    return DefaultPath + Path;
}

function error404(){
    // opener.location.href = 'error404.html';
    window.location.href = "../../../error404.html";
}


function error500(){
    opener.location.href = '../../../error500.html';
}