$(document).ready(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $(".modal-body").load("https://artart241.github.io a.nav-link.active", function (response, status, request) {

    });
});
$("#btnSelect").click(function (e) {
    let select = document.querySelector("select.custom-select")
    let url = select.optoins[select.selectedIndex].values + " " + "div#answer";

    $(".modal-body").load(url, function (response, status, request) {
        document.querySelector(".modal-body>div").id="";
    });
});