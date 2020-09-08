var ghostsContactViewModel = function () {
    var self = this;

    self.jerseyNumbers = ko.observable("");
    self.forms = ko.observableArray();
    
    // jersey numbers
    var q = $.ajax({
        type: "GET",
        url: "http://ghentghostsbackoffice.azurewebsites.net/api/jerseys?teamKey=22ab0b24-5b1a-4452-b3f8-423d92628e5d&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp"
    });

    q.success(function(jerseyNumbers){
        for(var i = 0; i < jerseyNumbers.length; i++) {
            if (i === jerseyNumbers.length - 1) {
                self.jerseyNumbers(self.jerseyNumbers() + " en " + jerseyNumbers[i].toString());
            }
            else if (i === jerseyNumbers.length - 2) {
                self.jerseyNumbers(self.jerseyNumbers() + jerseyNumbers[i].toString());
            }
            else {
                self.jerseyNumbers(self.jerseyNumbers() + jerseyNumbers[i].toString() + ", ");
            }
        }
    });

    // forms
    var q = $.ajax({
        type: "GET",
        url: "http://ghentghostsbackoffice.azurewebsites.net/api/forms?teamKey=22ab0b24-5b1a-4452-b3f8-423d92628e5d&apikey=235ddf70cce34e948500df101c15f294",
        data: null,
        dataType: "jsonp"
    });

    q.success(function(forms){
        self.forms(ko.utils.arrayMap(forms, function(form){
            return new formItem(form.Description, form.FormUrl);
        }));
    });
}

ko.applyBindings(new ghostsContactViewModel());