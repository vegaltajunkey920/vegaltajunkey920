$(document).ready(function() {
  checkAndResetBeerCount();
  updateBeerCountDisplay();
  checkAndResetSakePower();
  fetchData();
  displayRules(); 
// ページのDOM（Document Object Model）が完全に読み込まれて準備が整ったときに
// 指定された関数を実行するという意味。5つの関数が定義されている。

// １．ここから下は「飲みたい！」ボタンに関連するコード
  $('#beer').click(function() {
// 飲みたい！ボタンをクリックすると
      checkAndResetBeerClicked();
      if (!localStorage.getItem('beerClicked')) {
          incrementBeerCount();
// このincrementBeerCount関数は下で定義する。
          localStorage.setItem('beerClicked', 'true');
// ローカルストレージのbeerClickedがtrue（押下済）になる。
          let currentTime = new Date().getTime();
//currentTimeという変数で、new date().gettime()というメソッドで現在の時間をミリ秒で時間を定義。この関数内でだけ使える変数。
          localStorage.setItem('beerClickedTime', currentTime.toString());
          localStorage.setItem('beerCountTime', currentTime.toString());
//toStringメソッドを使い、変数currentTimeを文字列に変換する。（ローカルストレージを確認すると値に数字が入る）
          updateBeerCountDisplay();
          alert('「飲みたい！」を押しました！');
      } else {
          alert('あなたは既に「飲みたい！」を押しています。');
      }
  });

  function incrementBeerCount() {
    let beerCount = parseInt(localStorage.getItem('beerCount') || '0', 10);
    // parseInt()関数は、（変換したい文字列,何進数か）を明示する。
    // localstrageのbeerCountキーに文字列（数字にしない）、初期値0を10進数で表示するという意味。
    beerCount++;
    // 押すと1回カウントが増える
    localStorage.setItem('beerCount', beerCount.toString());
    // ローカルストレージのbeerCountキーに変数beerCountの数字（飲みたい！ボタンが押された回数）
    updateBeerCountDisplay();
    // 直下で定義する、updateBeerCountDisplay関数が発火する。
  }

  function updateBeerCountDisplay() {
    let beerCount = parseInt(localStorage.getItem('beerCount') || '0', 10);
    $('#count').text(`飲みたいと思っている人の数: ${beerCount}`);
  }
  // ローカルストレージのbeerCountの数字をhtmlで定義しているid=count上に表示する。
  // これが何の数字なのかを見る側に伝えるため、数字だけではなく文字も表示する。
  // 表示方法は``で囲う。で、${}で変数分を囲う。

  function checkAndResetBeerClicked() {
  // 制限時間を作る関数
    let clickedTime = localStorage.getItem('beerClickedTime');
  //変数clickedTimeでローカルストレージのbeerClickedtimeの値、として定義。
    if (clickedTime) {
      let currentTime = new Date().getTime();
 //先ほどと同じで、この関数内でだけ使える変数を定義。
 //currentTimeという変数で、new date().gettime()というメソッドで現在の時間をミリ秒で時間を定義。
      let elapsedTime = currentTime - parseInt(clickedTime, 10);
// elapsedtime（時間切れ）の変数。１つ上で定義した現在時間からclicedTime=ローカルストレージの
// beerClickedTimeの値をparseIntで文字列化した時間・・・クリックした時間を引く。10進数。
      let expirationTime = 1 * 1 * 60 * 1000;
// 制限時間=時間切れとなるまでの時間を定義。
// 時間*分*秒*1000（ミリ秒単位のための調整）
      if (elapsedTime > expirationTime) {
        localStorage.removeItem('beerClicked');
        localStorage.removeItem('beerClickedTime');
// 制限時間を経過時間が上回ると、ローカルストレージからbeerClickedとbeerClickedtimeが消される。
      }
    }
  }

// ここから下は「飲みたいパワー」ボタンに関するコード
let sakePower = parseInt(localStorage.getItem('sakePower') || '0', 10);
// まず、sakePower という変数を定義し、ローカルストレージのsakepowerというキーの値を10進数で文字列化
  updateSakePowerDisplay();
  $('#sake').click(function() {
      sakePower++;
//htmlのid=sake=飲みたいパワーボタンを押すと、先ほど定義したsakePowerの数字が増える。
      localStorage.setItem('sakePower', sakePower.toString());
      localStorage.setItem('sakePowerTime', new Date().getTime().toString());
//飲みたい！ボタンのときと同じように、ローカルストレージのキーsakePowerとsakePowerTimeにセットされる。
      updateSakePowerDisplay();
// updateSakePowerDisplay()が実行される。
  });
  function updateSakePowerDisplay() {
    $('#sakepower').text(`飲みたいパワー: ${sakePower}`);
  }
 // ローカルストレージのsakePowerの数字をhtmlで定義しているid=sakepower上に表示する。
 // これが何の数字なのかを見る側に伝えるため、数字だけではなく文字も表示する。
// 表示方法は``で囲う。で、${}で変数分を囲う。

  function checkAndResetSakePower() {
    let powerTime = localStorage.getItem('sakePowerTime');
    if (powerTime) {
      let currentTime = new Date().getTime();
 //先ほどと同じで、この関数内でだけ使える変数を定義。
 //currentTimeという変数で、new date().gettime()というメソッドで現在の時間をミリ秒で時間を定義。
      let elapsedTime = currentTime - parseInt(powerTime, 10);
      let expirationTime = 1* 1 * 60 * 1000;
// 制限時間=時間切れとなるまでの時間を定義。
// 時間*分*秒*1000（ミリ秒単位のための調整）
      if (elapsedTime > expirationTime) {
        localStorage.removeItem('sakePower');
        localStorage.removeItem('sakePowerTime');
        sakePower = 0;
        updateSakePowerDisplay();
      }
    }
  }
// 飲みたい！ボタンと同様。
  function checkAndResetBeerCount() {
    let countTime = localStorage.getItem('beerCountTime');
// checkAndResetBeerCountという関数を作り、その関数内で使える
// countTimeという変数を定義。この変数はローカルストレージ内のbeerCountTimeというキーの値を取るという変数。
    if (countTime) {
      let currentTime = new Date().getTime();
      let elapsedTime = currentTime - parseInt(countTime, 10);
      let expirationTime =1 * 1 * 60 * 1000;
// 制限時間=時間切れとなるまでの時間を定義。
// 時間*分*秒*1000（ミリ秒単位のための調整）
      if (elapsedTime > expirationTime) {
        localStorage.removeItem('beerCount');
        localStorage.removeItem('beerCountTime');
        updateBeerCountDisplay();
// 制限時間を経過時間が上回ると、ローカルストレージからbeerCountとbeerCounttimeが消される。
      }
    }
  }
});

  $('#send-mail').click(function() {
      const emailAddresses = ['email1@example.com'];
      sendEmail(emailAddresses);
  });
// send-mailボタンを押すと自動的にメーラーが出てくるように関数を組む。

  function sendEmail(emailAddresses) {
    let subject = "飲み会開催のお願い";
    let body = "飲み会の開催アンケートをメンバーに送信してください！";
    let mailtoLink = `mailto:${emailAddresses.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
// mailtoLinkというコードを使えば定形のフォームが表示される。送信ボタンを押せば指定のメールアドレスにメールを送れる。

  function fetchData() {
      const url = 'https://script.google.com/macros/s/AKfycbyHY3-U3Y5GK0sal3qKy4rkZ-5VU78b_8W8d833Ldg-W8_KLSVOaTyPBx2DNdZWPFLA/exec';
// このurlはGASを使ってグーグルフォームの回答をスプレッドシートにし、それをデプロイしたもの。
// 他の回答フォームでも同じようにデプロイして貼り付ければ使える。
      fetch(url)
          .then(function(response) {
              return response.json();
  // fetch(url)javascriptでWebAPIやリソースを非同期で取得するに使用される組み込み関数のこと。
  // .then(function(response))と.catch(function(error))を使って、成功or失敗で違うレスポンスを返す。
  // fetch関数は汎用性が高く、多くのウェブアプリケーションで使われている。
  // 特に、RESTAPIやその他ウェブベースのサービスとの通信で重要。
          })
          .then(function(data) {
              displayResponseCount(data);
              if (data.length === 1) {
                  // オブジェクトの個数が1つ・・・つまり一人しか飲みたい人がいないときは
                  displayStandBarInfo();
                  // このdisplayStandBarInfoという関数を返す。内容は後述。
              } else {
                  // それ以外は、下記の関数を返す。
                  let mostFrequentPlace = displayMostFrequentPlace(data);
                  // 変数mostFrequentPlaceでdisplayMostFrequentPlaceという関数を定義
                  let closestCost = displayCostAverage(data);
                   // 変数closestCost でdisplayCostAverageという関数を定義
                  displayRecommendedRestaurant(data, mostFrequentPlace, closestCost);
                  // 関数displayRecommendedRestaurantを実行
                  displayMeetingInfo(data);
                   // 集合場所・時間を表示する関数displayMeetingInfoを実行（内容後述）
              }
              displayBestNumber(data);
              createTable(data);
  // そのあと、createTable関数を使う。これは、テーブルを生成するためのコード。
  // "data" を使用してテーブルの行や列を作成する
          })
          .catch(function(error) {
              console.error('Error:', error);
              // 何らかの条件でurlを読めなかったときにはこちらのエラーが出る。
          });
  }

  function displayStandBarInfo() {
    // 1人しか飲みたい！を押していないときの関数。
      let standBarName = '立ち飲み屋 ななつぼ';
      let standBarURL = 'https://tabelog.com/tokyo/A1309/A130901/13290828/';
      $('#recommended-restaurant').html(`${standBarName} <a href="${standBarURL}">${standBarURL}</a>`);
  }
  // これをhtml上でid化しているrecommended-restaurantに、居酒屋名とURLを返す。

  function displayResponseCount(data) {
    // 一人じゃないときに返す。
    let responseCount = data.length;
    $('#response-count').text(`${responseCount}人`);
  }
    // 何人回答したか、を表示。オブジェクトの長さ（個数）で出る。

  function displayBestNumber(data) {
    let bestNumber = calculateOptimalMinimumNumber(data);
    $('#result').text(`${bestNumber}人`);
  }
  // 最少催行人数を表示する。下記の関数で計算。
  function calculateOptimalMinimumNumber(data) {
    let counts = data.map(function(item) {
        return parseInt(item.person, 10);
    });

    let maxNumber = 0;

    for (let i = counts.length - 1; i >= 0; i--) {
        let number = counts[i];
        let supporters = counts.filter(function(count) {
            return count >= number;
        }).length;

        if (supporters >= number) {
            maxNumber = number;
            break;
        }
    }
    return maxNumber;
  }

  function displayCostAverage(data) {
    // アンケートに回答した人の予算の平均値を出す関数
    let totalCost = 0;
    for (let i = 0; i < data.length; i++) {
      totalCost += parseInt(data[i].cost, 10);
    }
    // オブジェクトの数だけループし10進数でスプレッドシートのcost列の数字を文字列化
    let averageCost = totalCost / data.length;
    // トータルコストを数で割る（平均値）
    let scaledAverageCost = averageCost * 1000; 
    //円単位に直す 
    let valuesToRound = [3000, 5000, 8000, 10000];
    // その価格を丸める。近似値を取る。この近似値はアンケートで選択できる4種類の価格。
    let closestValue = getClosestValue(scaledAverageCost, valuesToRound);
    // 一番近い価格を出す。
    $('#costaverage').text(`${closestValue}円`);
    // htmlのcostaverageに表示する。
    return closestValue;
  }
  
  function getClosestValue(num, arr) {
    return arr.reduce(function(prev, curr) {
      return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
    });
  }
  // 上のgetClosestValue関数の計算式

  function displayMostFrequentPlace(data) {
    let placeCounts = {};
    for (let i = 0; i < data.length; i++) {
 // オブジェクトの数だけループする。
      if (placeCounts[data[i].place]) {
        placeCounts[data[i].place]++;
      } else {
        placeCounts[data[i].place] = 1;
      }
    }
  
    let mostFrequentPlace = Object.keys(placeCounts).reduce(function(a, b) {
      return placeCounts[a] > placeCounts[b] ? a : b;
    });
    // 最も頻繁に出現する場所を出す。
  
    $('#most-frequent-place').text(`${mostFrequentPlace}`);
    return mostFrequentPlace;
    // それをhtmlのid=most-frequent-placeに表示させる。
  }
  
  function displayRecommendedRestaurant(data, mostFrequentPlace, closestCost) {
    let recommendedURL = '';
    let restaurantName = '';
  
    if (mostFrequentPlace === '居酒屋' && closestCost === 3000) {
      restaurantName = 'ゆかり';
      recommendedURL = 'https://tabelog.com/tokyo/A1306/A130601/13050072/';
    } else if (mostFrequentPlace === '居酒屋' && closestCost >= 5000) {
      restaurantName = '串すけ';
      recommendedURL = 'https://tabelog.com/tokyo/A1306/A130601/13012985/';
    } else if (mostFrequentPlace === '中華料理' && closestCost >= 3000) {
      restaurantName = '南国酒家';
      recommendedURL = 'https://tabelog.com/tokyo/A1306/A130601/13001136/';
    } else if (mostFrequentPlace === '肉' && closestCost === 3000) {
      restaurantName = 'なかめ';
      recommendedURL = 'https://tabelog.com/tokyo/A1306/A130601/13280087/';
    }else if (mostFrequentPlace === '肉' && closestCost >= 5000) {
      restaurantName = '原宿焼肉 KINTAN';
      recommendedURL = 'https://tabelog.com/tokyo/A1306/A130601/13186036/';
    }
  // アンケート結果で出た行きたいお店（場所）と近いコストから最適なお店を出力する。
    $('#recommended-restaurant').html(`${restaurantName} <a href="${recommendedURL}">${recommendedURL}</a>`);
  }

  function createTable(data) {
    let table = `
      <table class='table table-bordered'>
        <tr>
          <th>最少催行人数</th> 
          <th>行きたいお店</th> 
          <th>予算</th> 
        </tr>
    `;
 // 引数として data を受け取り、そのデータを基にHTMLテーブルを生成する。
// 関数内で table という変数(let)が宣言され、初期のHTMLテーブル構造が文字列として代入される。
// その後、この関数は data の各要素をループして、テーブルの行を動的に生成し、
// table 変数に追加するコードを含む。

    for (let i = 0; i < data.length; i++) {
      table += `
        <tr>
          <td>${data[i].person}</td>
          <td>${data[i].place}</td>
          <td>${data[i].cost}</td>
        </tr>
      `;
    }
    table += "</table>";
    $('#table-container').html(table);
}

function displayMeetingInfo(data) {
  //集合場所・時間の関数。
   let meetingPlace = "原宿駅竹下口"; 
   let meetingTime = "21:10";    
   $('#meeting').html(`${meetingPlace} <br> ${meetingTime}`);
 }
 // これをhtml上でid化しているmeetiに、居酒屋名とURLを返す。
//  無条件で出すのでこれだけでOK

function displayRules() {
  let rules = " 回答人数に達数までは集合場所で集合時間まで待機してください。<br> 最少催行人数以上が集まり、集合時間を経過したら移動してOKです。<br>最少催行人数によっては参加しない人もいるためのルールですのでお守りください";
  $('#rule').html(rules);
}
// 最後に、ルールを表示する。これも無条件で出すので、これだけでOK。