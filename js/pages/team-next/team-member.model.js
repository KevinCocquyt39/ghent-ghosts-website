var teamMember = function (member) {
	var self = this;

	self.key = member.Key;
	self.name = member.Name;
	self.avatarCode = member.AvatarCode === null ? "player" : member.AvatarCode;
	self.avatarUrl = "/img/profiles/id/" + self.avatarCode + ".jpg";
	self.jobTitle = member.JobTitle;
	self.number = member.Number;
	self.positionCode = member.PositionCode;
	self.nhlTeamCode = member.NhlTeamCode === null ? "" : member.NhlTeamCode.toLowerCase();
	self.facebookUrl = member.FacebookUrl === null ? "" : member.FacebookUrl;
	self.twitterUrl = member.TwitterUrl === null ? "" : member.TwitterUrl;

	if (self.nhlTeamCode === "bos") {
		self.nhlTeamUrl = "http://bruins.nhl.com";
	}
	else if (self.nhlTeamCode === "buf") {
		self.nhlTeamUrl = "http://sabres.nhl.com";
	}
	else if (self.nhlTeamCode === "chi") {
		self.nhlTeamUrl = "http://blackhawks.nhl.com";
	}
	else if (self.nhlTeamCode === "col") {
		self.nhlTeamUrl = "http://avalance.nhl.com";
	}
	else if (self.nhlTeamCode === "det") {
		self.nhlTeamUrl = "http://redwings.nhl.com";
	}
	else if (self.nhlTeamCode === "edm") {
		self.nhlTeamUrl = "http://oilers.nhl.com";
	}
	else if (self.nhlTeamCode === "mtl") {
		self.nhlTeamUrl = "https://canadiens.nhl.com";
	}
	else if (self.nhlTeamCode === "nyr") {
		self.nhlTeamUrl = "http://rangers.nhl.com";
	}
	else if (self.nhlTeamCode === "pit") {
		self.nhlTeamUrl = "http://penguins.nhl.com";
	}
	else if (self.nhlTeamCode === "sjs") {
		self.nhlTeamUrl = "http://sharks.nhl.com";
	}
	else if (self.nhlTeamCode === "tor") {
		self.nhlTeamUrl = "http://mapleleafs.nhl.com";
	}
	else if (self.nhlTeamCode === "wpg") {
		self.nhlTeamUrl = "http://jets.nhl.com";
	}
	else if (self.nhlTeamCode === "wsh") {
		self.nhlTeamUrl = "https://capitals.nhl.com";
	}
}