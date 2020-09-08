$(function () {
    // tooltips
    $('[rel=tooltip]').tooltip();

    // load controls
    $('.nav-ghosts').load('/controls/menu-ghosts.html', function () {
        var currentFileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        $('.nav').find('[href="' + currentFileName + '"]').closest('li').addClass('active');
    });

    $('.nav-spookies').load('/controls/menu-spookies.html', function () {
        var currentFileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        $('.nav').find('[href="' + currentFileName + '"]').closest('li').addClass('active');
    });

    // fancybox
    if (typeof $.fn.fancybox === "function") {
        $(".fancybox-custom").fancybox({
            'autoSize': true,
            'autoDimensions': true,
            'minWidth': 500
        });
    }

    // season numbers
    var seasonNumbers = getSeasonNumbers(8, new Date()); // starting in August
    $(".js-season-numbers").text(seasonNumbers);
});

function getSeasonNumbers(startMonth, currentDate) {
    var currentMonth = currentDate.getMonth() + 1; // JS method is 0 based
    var currentYear = currentDate.getFullYear();

    if (currentMonth >= startMonth) {
        return currentYear.toString() + " - " + (currentYear + 1).toString()
    }
    else {
        return (currentYear - 1).toString() + " - " + currentYear.toString();
    }
}