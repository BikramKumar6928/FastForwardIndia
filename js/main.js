function openBox(box){
    for(i=0;i<4;i++){
        var dbox = document.getElementById(i);
        dbox.style.display = "none";
    }
    var mybox = document.getElementById(box);
    mybox.style.display = "block";
}