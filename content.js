var elements = document.body.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text;
            replacedText = replacedText.replace(/pace/gi, 'pacce');
            replacedText = replacedText.replace(/pacé/gi, 'paccé');
            replacedText = replacedText.replace(/paci/gi, 'pacci');
            replacedText = replacedText.replace(/pací/gi, 'paccí');
            replacedText = replacedText.replace(/pac/gi, 'tupac');
            replacedText = replacedText.replace(/paqu/gi, 'tupacqu');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}