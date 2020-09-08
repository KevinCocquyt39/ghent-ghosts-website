var spookiesTeam = new Vue({
	el: "#spookies-team",
	data: {
		boardMemberList: [],
		regularMemberList: []
	},
	created: function () {
		var self = this;

		// board members
		var bmq = $.ajax({
			type: "GET",
			url: "http://ghentghostsbackoffice.azurewebsites.net/api/members?teamKey=0c386889-63a9-4c65-b325-b9944079f70d&isBoardMember=true&apikey=235ddf70cce34e948500df101c15f294",
			data: null,
			dataType: "jsonp"
		});

		bmq.success(function (members) {
			for (var i = 0; i < members.length; i++) {
				self.boardMemberList.push(new teamMember(members[i]));
			}
		});

		// regular members
		var rmq = $.ajax({
			type: "GET",
			url: "http://ghentghostsbackoffice.azurewebsites.net/api/members?teamKey=0c386889-63a9-4c65-b325-b9944079f70d&isBoardMember=false&apikey=235ddf70cce34e948500df101c15f294",
			data: null,
			dataType: "jsonp"
		});

		rmq.success(function (members) {
			for (var i = 0; i < members.length; i++) {
				self.regularMemberList.push(new teamMember(members[i]));
			}
		});
	}
})