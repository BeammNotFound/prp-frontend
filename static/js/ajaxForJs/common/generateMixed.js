function generateMixed(){
    $("img").attr("src", function() {
        return "img/base/" + parseInt(5*Math.random() + 1) + ".jpg"
    }); 
}