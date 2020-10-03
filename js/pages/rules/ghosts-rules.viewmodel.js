var ghostsRulesViewModel = function () {
    var self = this;

    // winter events
    self.ruleItems = ko.observableArray();
    self.isVisibleRules = ko.observable();

    var q = $.ajax({
        type: "GET",
        url:
            "https://ghentghostsbackoffice.azurewebsites.net/api/rules?teamKey=22ab0b24-5b1a-4452-b3f8-423d92628e5d&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp",
    });

    q.success(function (rules) {
        self.ruleItems(
            ko.utils.arrayMap(rules, function (rule) {
                return new ruleItem(rule.OrderNumber, rule.Title, rule.Content);
            })
        );

        self.isVisibleRules(self.ruleItems().length > 0);
        $(".js-rules").removeClass("hide");
    });
};

ko.applyBindings(new ghostsRulesViewModel());
