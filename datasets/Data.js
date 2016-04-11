define(function (require,exports,module) {

    var Data = {

        DailyConsumption : {
            // based on 22 million per year / 365.25 = 60232.7
            // http://www.telegraph.co.uk/news/earth/agriculture/10375738/Britain-is-running-out-of-space-to-farm-chickens-warns-poultry-industry.html
            "chickens"  : 100000,
            "cows"      : 600000,
            "fish"      : 500000,
            "lambs"     : 250000,
        },
        // 2015
        UKResidents : 64679700
    }

    module.exports = Data;

});
