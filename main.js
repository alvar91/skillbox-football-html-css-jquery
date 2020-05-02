var leftPlayer = 0;
var rightPlayer = 0;

$(function () {
  var score = document.getElementById("score");

  var i = 0;
  var maxY = 90;
  $(".ball").on("click", function () {
    //Генерируем случайные координаты по оси 0Y (вертикаль)
    var randY = Math.random() * maxY;

    //Если мяч на правой стороне
    if (i % 2 == 0) {
      var x = 168;
    }
    //Если мяч на левой стороне
    else {
      var x = 0;
    }
    i++;

    // Настройки для первой анимации
    var cordProp = {
      left: x + "vh",
      top: randY + "vh",
    };
    var cordOpt = {
      duration: 1000,
      easing: "swing",
      complete: callback,
    };

    $(".ball").animate(cordProp, cordOpt);

    // Событие Гол и изменение счета
    function callback() {
      if (randY > 40 && randY < 50) {
        // Если гол в правые ворота
        if (i % 2 != 0) {
          leftPlayer++;
          score.innerText = leftPlayer + ":" + rightPlayer;
        }
        // Если гол в правые ворота
        else {
          rightPlayer++;
          score.innerText = leftPlayer + ":" + rightPlayer;
        }
        alert("Гол!");
      }
    }
  });
});
