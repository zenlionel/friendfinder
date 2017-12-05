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

                friendScore = friendScore + Math.abs(friendTable[i].scores - person.scores);
            
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