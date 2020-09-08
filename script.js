document.querySelector('#trigger').addEventListener('click', function () {
  chrome.tabs.executeScript({
    code:'document.getElementById("contentViewer").contentWindow.document.getElementById("test_player_html5_api").querySelector("source").src;'
        }, function (result) {
          console.log(result[0]);
          document.querySelector("#result").innerHTML = "<a href= \"" + result[0] + "\" target=\"_blank\" >" + result[0] + "</a>";

    });
});
