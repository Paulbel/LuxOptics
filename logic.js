var openedElement = null;

$(document).ready(function () {
    $(".bar").click(function (event) {
        var bar = event.target.parentNode;
        if (bar.classList.contains("bar")) {
            var infodiv = bar.childNodes.item(5);
            if (openedElement == null) {
                tabOpen(infodiv);
            }
            else if (openedElement == infodiv) {
                tabClose(infodiv);
            }
            else {
                tabClose(openedElement);
                tabOpen(infodiv);
            }
        }
    });
});

function tabOpen(tab) {
    tab.classList.remove("infoNotDisplayed");
    tab.classList.remove("reduceInfo");
    tab.classList.add("growInfo");
    openedElement = tab;
}


function tabClose(tab) {
    tab.classList.remove("growInfo");
    tab.classList.add("reduceInfo");
    openedElement = null;
}


