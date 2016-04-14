define(function (require,exports,module) {

    var Data = {

        DailyConsumption : [
             // based on 22 million per year / 365.25 = 60232.7
            // http://www.telegraph.co.uk/news/earth/agriculture/10375738/Britain-is-running-out-of-space-to-farm-chickens-warns-poultry-industry.html
            {
                "unit" : "chickens",
                "daily" :  100000
            },
            {
                "unit" : "cows",
                "daily" :  600000
            },
            {
                "unit" : "fish",
                "daily" :  500000
            },
            {
                "unit" : "lambs",
                "daily" :  250000
            }
        ],
        // 2015
        UKResidents : 64679700
    }

    module.exports = Data;

});
