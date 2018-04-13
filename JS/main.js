
$(document).ready(function(){
    console.log("started");
    var width = window.innerWidth || document.documentElement.clientWidth;
    $("#mainslider img").each(function() {
        var oldSrc = $(this).attr('src');
        if (width >= 768) {
            var newSrc = oldSrc.replace('_normal.','_bigger.');
            //var newWidth = 100;  var newHeight = 100;
        } else if ( width >= 480 ) {
            var newSrc = oldSrc.replace('_normal.','_big.');
           // var newWidth = 50;  var newHeight = 50;
        }
        $(this).attr('src',newSrc);
        //$(this).attr('width',newWidth);
        //$(this).attr('height',newHeight);
    });
});
