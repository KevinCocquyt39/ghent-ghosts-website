var spookiesCalendarViewModel = function () {
    var self = this;

    // winter events
    self.winterCalendarItems = ko.observableArray();
    self.isVisibleWinterCalendar = ko.observable();

    var q = $.ajax({
        type: "GET",
        url: "http://ghentghostsbackoffice.azurewebsites.net/api/events?teamKey=0c386889-63a9-4c65-b325-b9944079f70d&eventTypeId=1&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp"
    });

    q.success(function (events) {
        self.winterCalendarItems(ko.utils.arrayMap(events, function (event) {
            return new calendarItem(event.DateFormatBE, event.Name, event.Location, event.ExtraInfo);
        }));

        if (self.winterCalendarItems().length > 0) {
            self.isVisibleWinterCalendar(true);
            $('.js-calendar-winter').removeClass('hide');
        }
    });

    // summer events
    self.summerCalendarItems = ko.observableArray();
    self.isVisibleSummerCalendar = ko.observable();

    var q = $.ajax({
        type: "GET",
        url: "http://ghentghostsbackoffice.azurewebsites.net/api/events?teamKey=0c386889-63a9-4c65-b325-b9944079f70d&eventTypeId=2&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp"
    });

    q.success(function (events) {
        self.summerCalendarItems(ko.utils.arrayMap(events, function (event) {
            return new calendarItem(event.DateFormatBE, event.Name, event.Location, event.ExtraInfo);
        }));

        if (self.summerCalendarItems().length > 0) {
            self.isVisibleSummerCalendar(true);
            $('.js-calendar-summer').removeClass('hide');
        }
    });
}

ko.applyBindings(new spookiesCalendarViewModel());