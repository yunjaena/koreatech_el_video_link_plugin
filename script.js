document.querySelector('#trigger').addEventListener('click', function () {
  chrome.tabs.executeScript({
    code:'document.getElementById("contentViewer").contentWindow.document.getElementById("test_player_html5_api").querySelector("source").src;'
        }, function (result) {
            if(result[0]) {
                document.querySelector("#result").innerHTML = '<a href= "' + result[0] + '" target="_blank">' + result[0] + '</a>';
                chrome.downloads.download({url: result[0], saveAs: true});
            } else
                document.querySelector("#result").innerHTML = "URL을 찾을 수 없습니다"
    });
});
