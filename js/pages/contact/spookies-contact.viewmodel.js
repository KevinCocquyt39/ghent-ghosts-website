var spookiesContactViewModel = function () {
    var self = this;

    self.jerseyNumbers = ko.observable("");
    self.forms = ko.observableArray();

    // jersey numbers
    var q = $.ajax({
        type: "GET",
        url:
            "https://ghentghostsbackoffice.azurewebsites.net/api/jerseys?teamKey=0c386889-63a9-4c65-b325-b9944079f70d&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp",
    });

    q.success(function (jerseyNumbers) {
        for (var i = 0; i < jerseyNumbers.length; i++) {
            if (i === jerseyNumbers.length - 1) {
                self.jerseyNumbers(self.jerseyNumbers() + " en " + jerseyNumbers[i].toString());
            } else if (i === jerseyNumbers.length - 2) {
                self.jerseyNumbers(self.jerseyNumbers() + jerseyNumbers[i].toString());
            } else {
                self.jerseyNumbers(self.jerseyNumbers() + jerseyNumbers[i].toString() + ", ");
            }
        }
    });

    // forms
    var q = $.ajax({
        type: "GET",
        url:
            "https://ghentghostsbackoffice.azurewebsites.net/api/forms?teamKey=0c386889-63a9-4c65-b325-b9944079f70d&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp",
    });

    q.success(function (forms) {
        self.forms(
            ko.utils.arrayMap(forms, function (form) {
                return new formItem(form.Description, form.FormUrl);
            })
        );
    });
};

ko.applyBindings(new spookiesContactViewModel());
