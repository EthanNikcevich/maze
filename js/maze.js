/**
 * Created by h205p3 on 3/1/17.
 */
$(document).ready(function () {
for(i = 0; i < tops1.length; i++){
    $("#wall").append("<img class='enemy' src='http://cdn.shopify.com/s/files/1/0622/7441/products/pixel-000000_1024x1024.png?v=1408418607' style='position: absolute; top:"+ tops1[i] +"; left: "+ lefts1[i] +"'height='20' width='20'/>");
}
for(o = 0; o < topsFinish.length; o++){
    $("#finish").append("<img class='enemy' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/ZgAqRcUWAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC' style='position: absolute; top:"+ topsFinish[o] +"; left: "+ leftsFinish[o] +"'height='20' width='20'/>");
}
    $("#wall").mouseover(function() {
        document.getElementById("loss").innerHTML = "GAME OVER";
        $("#wall").remove();
        $("#finish").remove();
        $("#timer").remove();
    });
    $("#finish").mouseover(function() {
        document.getElementById("win").innerHTML = "YOU WIN";
        $("#wall").remove();
        $("#finish").remove();
        $("#timer").remove();
        $("#time").append("YOUR TIME: "+count);
    });
});
tops1 = ["0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","0px","20px","20px","20px","20px","20px","20px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","40px","60px","60px","60px","60px","60px","60px","60px","60px","60px","60px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","80px","100px","100px","100px","100px","100px","100px","100px","100px","100px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","120px","140px","140px","140px","140px","140px","140px","140px","140px","140px","140px","140px","140px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","160px","180px","180px","180px","180px","180px","180px","180px","180px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","200px","220px","220px","220px","220px","220px","220px","220px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","240px","260px","260px","260px","260px","260px","260px","260px","260px","260px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","280px","300px","300px","300px","300px","300px","300px","300px","300px","300px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","320px","340px","340px","340px","340px","340px","340px","340px","340px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","360px","380px","380px","380px","380px","380px","380px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px","400px"];
lefts1 = ["0px","80px","100px","120px","140px","160px","180px","200px","220px","240px","260px","280px","300px","320px","340px","360px","380px","400px","420px","440px","460px","480px","500px","520px","540px","560px","580px","600px","0px","80px","240px","320px","480px","600px","0px","80px","120px","140px","160px","180px","200px","240px","280px","320px","360px","380px","400px","420px","440px","480px","500px","520px","560px","580px","600px","0px","80px","120px","200px","280px","320px","360px","440px","480px","600px","0px","20px","40px","80px","100px","120px","140px","160px","200px","240px","260px","280px","320px","360px","400px","440px","480px","500px","520px","540px","560px","600px","0px","80px","200px","240px","320px","400px","440px","560px","600px","0px","40px","80px","120px","140px","160px","200px","240px","280px","300px","320px","340px","360px","400px","420px","440px","480px","500px","520px","560px","600px","0px","40px","80px","160px","240px","280px","200px","400px","480px","520px","560px","600px","0px","40px","80px","100px","120px","160px","180px","200px","220px","240px","280px","320px","340px","360px","400px","440px","460px","480px","520px","560px","600px","0px","40px","120px","160px","360px","480px","520px","600px","0px","40px","60px","80px","120px","160px","200px","220px","240px","260px","280px","320px","360px","380px","400px","420px","440px","460px","480px","520px","540px","560px","580px","600px","0px","80px","160px","200px","320px","360px","600px","0px","20px","40px","80px","100px","120px","140px","160px","200px","240px","260px","280px","300px","320px","360px","400px","420px","440px","480px","500px","520px","540px","560px","600px","0px","80px","200px","240px","320px","360px","440px","520px","600px","0px","40px","80px","120px","140px","160px","180px","200px","240px","260px","280px","320px","360px","380px","400px","440px","460px","480px","520px","560px","580px","600px","0px","40px","200px","280px","400px","440px","480px","520px","600px","0px","40px","60px","80px","100px","120px","140px","160px","200px","220px","240px","280px","300px","320px","360px","380px","400px","440px","480px","520px","540px","560px","580px","600px","0px","120px","240px","320px","360px","440px","480px","600px","0px","20px","40px","60px","80px","120px","160px","180px","200px","240px","260px","280px","320px","340px","360px","400px","420px","440px","480px","500px","520px","600px","0px","120px","200px","280px","520px","600px","0px","20px","40px","60px","80px","100px","120px","140px","160px","180px","200px","220px","240px","260px","280px","300px","320px","340px","360px","380px","400px","420px","440px","460px","480px","500px","520px","540px","560px","580px","600px"];
topsFinish = ["340px","340px","340px","360px","360px","360px","380px","380px","380px"];
leftsFinish = ["540px","560px","580px","540px","560px","580px","540px","560px","580px"];
setInterval(timer, 10);
count = 0;
function timer(){
    count+=.01;
    document.getElementById("timer").innerHTML = "Time: " + count;
}
audio = new Audio('https://ia800504.us.archive.org/33/items/TetrisThemeMusic/Tetris.mp3');
audio.loop = true;
audio.play();