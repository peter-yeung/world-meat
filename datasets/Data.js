define(function (require,exports,module) {

    var Data = {

        DailyConsumption : {
            // based on 22 million per year / 365.25 = 60232.7
            // http://www.telegraph.co.uk/news/earth/agriculture/10375738/Britain-is-running-out-of-space-to-farm-chickens-warns-poultry-industry.html
            "chickens"  : 60233,
            "cows"      : 100233,
            "fish"      : 200233,
            "lambs"     : 20233
        },
        // 2015
        UKResidents : 64679700
    }

    module.exports = Data;

});
