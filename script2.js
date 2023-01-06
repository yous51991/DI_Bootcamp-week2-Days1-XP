let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = "myWatchedSeries.length";
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);
console.log("I watched 3 series:" + myWatchedSeriesSentence);
let ii = myWatchedSeries.indexOf("the big bang theory");
console.log(ii)
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries)
myWatchedSeries.push("Titanic");
console.log(myWatchedSeries)
myWatchedSeries.unshift("swat");
console.log(myWatchedSeries)
myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries)
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries)
