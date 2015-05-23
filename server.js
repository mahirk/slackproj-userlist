var Slack = require('slack-node');
var express    = require('express');
var app        = express();
apiToken = "APITOKEN";

slackapp = new Slack(apiToken);

app.get('/', function (req, res) {
  slackapp.api("channels.list", function(err, response) {
    var channels = response.channels;
    var namelist = [];
    for(var i = 0; i < channels.length; i++){
      namelist[i] = channels[i].name;
    }
    res.locals.place = namelist;
    res.send("My Channels:" + namelist);
  });
});

app.listen(8080);
