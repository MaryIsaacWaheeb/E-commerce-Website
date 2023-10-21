var sources = ["90.jpg" ," 100.jpg" ,"200.jpg","300.jpg"]
var img = document.getElementById("image");
 var i = 0;
function changeSrc() {
    img.src = sources[i];
    console.log(i);
     i++;
     if (i == sources.length) {
      i = 0;
}
}
setInterval( changeSrc,2000);

