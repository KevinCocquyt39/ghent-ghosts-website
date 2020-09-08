var calendarItem = function (date, name, location, extra) {
    var self = this;

    self.date = ko.observable(date);
    self.name = ko.observable(name);
    self.location = ko.observable(location);
    self.extra = ko.observable(extra);
}