// feed this bad boy a players array

module.exports = function populatePlayers(playersObject) {
    const playersDiv = playersObject.map(player => 
        // creates a players tray
        console.log("*slaps roof of function* this bad boy can fit so many " + player + "s into it")
        )
    return playersDiv; 
    }

