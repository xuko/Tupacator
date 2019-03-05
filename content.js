function tupacate() {
    var elements = document.body.getElementsByTagName('*');

    var element = document.getElementById("primary-inner");
    var info = document.getElementById("info");

    if (element && info && info.innerText.includes('tupac')) {
        location.reload();
    }

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text;
                replacedText = replacedText.replace(/pace/gmi, 'pacce');
                replacedText = replacedText.replace(/pacé/gmi, 'paccé');
                replacedText = replacedText.replace(/paci/gmi, 'pacci');
                replacedText = replacedText.replace(/pací/gmi, 'paccí');
                replacedText = replacedText.replace(/tupac/gmi, 'pac');
                replacedText = replacedText.replace(/pac/gmi, 'tupac');
                replacedText = replacedText.replace(/paqu/gmi, 'tupacqu');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
setTimeout(function () {


    var element = document.getElementById("primary-inner");
    if (element && info && info.innerText.includes('tupac')) {
        var ytPlayer = element.firstElementChild;
        if (ytPlayer) {
            ytPlayer.innerHTML = "<iframe id='tupacVideo' width='" + ytPlayer.clientWidth + "' height='" + ytPlayer.clientHeight + "' src='https://www.youtube.com/embed/41qC3w3UUkU?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen ></iframe>"
        }
    }
    }, 2000)
}

var oldURL = ""

//window.setInterval takes a function and executes it after
//a given time (defined by the second parmeter)in miliseconds


function checkURLChange() {
    newURL = document.URL;
    if (newURL !== oldURL) {
        tupacate();
        oldURL = newURL;
    }
}

var urlChangeHandler = window.setInterval(checkURLChange, 5000)
tupacate();