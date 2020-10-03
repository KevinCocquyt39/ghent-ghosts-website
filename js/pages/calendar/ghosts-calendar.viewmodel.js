var ghostsCalendarViewModel = function () {
    var self = this;

    // winter events
    self.winterCalendarItems = ko.observableArray();
    self.isVisibleWinterCalendar = ko.observable();

    var q = $.ajax({
        type: "GET",
        url:
            "https://ghentghostsbackoffice.azurewebsites.net/api/events?teamKey=22ab0b24-5b1a-4452-b3f8-423d92628e5d&eventTypeId=1&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp",
    });

    q.success(function (events) {
        self.winterCalendarItems(
            ko.utils.arrayMap(events, function (event) {
                return new calendarItem(event.DateFormatBE, event.Name, event.Location, event.ExtraInfo);
            })
        );

        if (self.winterCalendarItems().length > 0) {
            self.isVisibleWinterCalendar(true);
            $(".js-calendar-winter").removeClass("hide");
        }
    });

    // summer events
    self.summerCalendarItems = ko.observableArray();
    self.isVisibleSummerCalendar = ko.observable();

    var q = $.ajax({
        type: "GET",
        url:
            "https://ghentghostsbackoffice.azurewebsites.net/api/events?teamKey=22ab0b24-5b1a-4452-b3f8-423d92628e5d&eventTypeId=2&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp",
    });

    q.success(function (events) {
        self.summerCalendarItems(
            ko.utils.arrayMap(events, function (event) {
                return new calendarItem(event.DateFormatBE, event.Name, event.Location, event.ExtraInfo);
            })
        );

        if (self.summerCalendarItems().length > 0) {
            self.isVisibleSummerCalendar(true);
            $(".js-calendar-summer").removeClass("hide");
        }
    });
};

ko.applyBindings(new ghostsCalendarViewModel());
