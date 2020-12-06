$(document).ready(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
});

$("#btnSelect").click(function (e) {
    let select = document.querySelector("select.custom-select");
    let url = select.options[select.selectedIndex].value + " " + "div#answer";

    let selectedUrl1 = select.options[select.selectedIndex].value;
    let selectedUser = select.options[select.selectedIndex].innerHTML;
    document.querySelector("#msgLabel").innerHTML = "Сообщение от пользователя " + "<a href=''" + selectedUrl1 +  "target='_blank'>" + selectedUser + "</a>";

    $(".modal-body").load(url, function (response, status, request) {
        document.querySelector(".modal-body>div").id="";
        $("#msgBox").modal("shows");
    });
});