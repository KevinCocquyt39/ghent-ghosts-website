var ruleItem = function (orderNumber, title, content) {
    var self = this;

    self.orderNumber = ko.observable(orderNumber);
    self.title = ko.observable(title);
    self.content = ko.observable(content);
}