
function nextImage(i,imgURL,imgInfo,pstyle){
        if (i < (imgURL.length - 1)) {
            i++
        } else {
            i = 0;
        }

    var pstyle = "<p style='font-family:Brush Script Std, cursive;font-weight:bold;font-size:2.0em;margin: 0;padding: 0 auto;text-align:center'>";
    var imgStr = "<img src=" + imgURL[i] + ">";
    var containter = '<div id="ImageInfo" class="containerforcard"><p>' + imgInfo[i] + "</p></div>";
    imgStr += containter;

    $('#ImageDiv').html(imgStr);
}
function knslider() {
    var i = 0;
    var imgURL = [];
    var imgInfo = [];

    //alex.jpg		graceandas.jpg		kaylakarl.jpg		momanddad.jpg		torri.jpg		tristaandcj.jpg
//catherine.JPG		hunter.jpg		lauraandjohn.jpg	priest.jpg		travis.jpg		wed2.jpg

    imgURL.push('images/people/kaylakarl.jpg');
    imgInfo.push('Kayla and Carl, Nikki\'s Mother and step Father');
    imgURL.push('images/people/philandclella.jpg');
    imgInfo.push('Philip and Clella Barbour Nikki\'s Dad and step Mother.');
    imgURL.push('images/people/momanddad.jpg');
    imgInfo.push('Muriel and Karl Gerhards Keith\'s parents');
    imgURL.push('images/people/torri.jpg');
    imgInfo.push('Tori Hurni, Nikki\'s Sister');
    imgURL.push('images/people/priest.jpg');
    imgInfo.push('Andrew Gerhards, Keith\'s nephew and officiant');
    imgURL.push('images/people/alex.jpg');
    imgInfo.push('Alex Gerhards, Keith\'s Son and groomsman');
    imgURL.push('images/people/travis.jpg');
    imgInfo.push('Travis Gerhards, Keith\'s Son and groomsman');
    imgURL.push('images/people/graceandas.jpg');
    imgInfo.push('Grace Gerhards and Austin Scott, Keith\'s daughter. Maid of honor and best man.');
    imgURL.push('images/people/ummers.jpg');
    imgInfo.push('Aubrey Durand Nikki\'s sister and bridesmaid');
    imgURL.push('images/people/shanna.jpg');
    imgInfo.push('Shanna Martin Nikki\'s friend and bridesmaid');

    var pstyle = "<p style='font-family:Brush Script Std, cursive;font-weight:bold;font-size:2.0em;margin: 0;padding: 0 auto;text-align:center'>";

    var imgStr = "<img src=" + imgURL[i] + ">";
    var containter = '<div id="ImageInfo" class="containerforcard"><p>' + imgInfo[i] + "</p></div>";
    imgStr += containter;

    $('#ImageDiv').html(imgStr);

    var timer = setInterval(function() {
        nextImage(i,imgURL,imgInfo,pstyle);
        if (i < (imgURL.length - 1)) {
             i++
         } else {
             i = 0;
         }
    }, 5*1000)

    $("#myImagePage").fadeOut(function () {
        if (i < (imgURL.length - 1)) {
            i++
        } else {
            i = 0;
        }
        var imgStr = "<img src=" + imgURL[i] + " style='width:100%'>";
        imgStr += pstyle + imgInfo[i] + "</p>";
        $('#ImageDiv').html(imgStr);
    });
}
