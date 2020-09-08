var spookiesRulesViewModel = function () {
    var self = this;

    // winter events
    self.ruleItems = ko.observableArray();
    self.isVisibleRules = ko.observable();

    var q = $.ajax({
        type: "GET",
        url: "http://ghentghostsbackoffice.azurewebsites.net/api/rules?teamKey=0c386889-63a9-4c65-b325-b9944079f70d&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp"
    });

    q.success(function(rules){
        self.ruleItems(ko.utils.arrayMap(rules, function(rule){
            return new ruleItem(rule.OrderNumber, rule.Title, rule.Content);
        }));

        self.isVisibleRules(self.ruleItems().length > 0);
        $('.js-rules').removeClass('hide');
    });
}

ko.applyBindings(new spookiesRulesViewModel());