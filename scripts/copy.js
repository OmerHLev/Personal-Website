function copyText(elementId,toolTipId) {
    var textToCopy = document.getElementById(elementId).innerText;
    
    navigator.clipboard.writeText(textToCopy).then(function() {
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
	var tooltip = document.getElementById(toolTipId);
	tooltip.innerHTML = "Copied: " + textToCopy;
}

function outFunc(toolTipId) {
  var tooltip = document.getElementById(toolTipId);
  tooltip.innerHTML = "Copy to clipboard";
}