var bodyParser = require('body-parser');
var path = require('path');

var friendTable = require('../app/data/friend.js');

module.exports = function (app) {
    app.get('/api/friend', function (req, res) {
        res.json(friendTable);
    });

    app.post("/api/friend", function (req, res) {
        var person = req.body;
        var newFriend = -1;
        var scores = 100;
        var friendScore = 0;
        for (i = 0; i < friendTable.length; i++) {
            console.log('person scores');
            console.log(person.scores);
            console.log('friendtable[i].scores');
            console.log(friendTable[i].scores);
            var sum= 0;
            for(var j=0; j< friendTable[i].scores; j++){
                sum += Math.abs(friendTable[i].scores[j] - person.scores[j]);
            }
                friendScore = sum;
            console.log('friendscore');
                console.log(friendScore);
            if (friendScore <= scores) {
                newFriend = i;
                scores = friendScore;
            }
            friendScore = 0;
        }
        friendTable.push(person);
        newFriendDetails = friendTable[newFriend];
        res.json(newFriendDetails);

    });
}