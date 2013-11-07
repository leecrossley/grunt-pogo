(function() {
    var self = this;
    var singBottlesOfBeerOnTheWall, bottles;
    singBottlesOfBeerOnTheWall = function(n) {
        if (n > 0) {
            console.log(bottles(n) + " of beer on the wall, " + bottles(n) + " of beer.\nTake one down and pass it around, " + bottles(n - 1) + " of beer on the wall.");
            return singBottlesOfBeerOnTheWall(n - 1);
        } else if (n === 0) {
            return console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
        }
    };
    bottles = function(n) {
        if (n === 0) {
            return "no more bottles";
        } else if (n === 1) {
            return "1 bottle";
        } else {
            return n + " bottles";
        }
    };
    singBottlesOfBeerOnTheWall(99);
}).call(this);