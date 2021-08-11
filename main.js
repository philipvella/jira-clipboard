(function () {
    let title = document.getElementsByTagName("title")[0].text;
    let prId = title.substring(
        title.lastIndexOf("#") + 1, 
        title.lastIndexOf(":")
    );
    let jiraId = document.getElementsByClassName('jira-issue-link')[0].text;

    function CopyMe(TextToCopy) {
      var TempText = document.createElement("input");
      TempText.value = TextToCopy;
      document.body.appendChild(TempText);
      TempText.select();
      
      document.execCommand("copy");
      document.body.removeChild(TempText);
      
      alert("Copied the text: " + TempText.value);
      console.log("Copied the text: " + TempText.value);
    }

    CopyMe(prId + " " + jiraId)
        
})();

