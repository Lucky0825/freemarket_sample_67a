$(document).ready(function(){
  $(function(){
    $(".price").on("keyup", function(){   //リアルタイムで表示したいのでinputを使う｡入力の度にイベントが発火するようになる｡
      var data = $(".price").val(); 
      if(data >= 300 && data <= 9999999) {
      var profit = Math.round(data * 0.9)  // 手数料計算を行う｡dataにかけているのが0.9なのは単に引きたい手数料が10%のため｡
      var fee = (data - profit) // 入力した数値から計算結果(profit)を引く｡それが手数料となる｡
      $('.right_bar').html(fee) //  手数料の表示｡html()は追加ではなく､上書き｡入力値が変わる度に表示も変わるようにする｡
      $('.right_bar').prepend('¥') // 手数料の前に¥マークを付けたいので
      $('.right_bar_2').html(profit)
      $('.right_bar_2').prepend('¥')
      }
      else {
      $('.right_bar_2').html('');
      $('.right_bar').html('');
      }
    });
  });
})