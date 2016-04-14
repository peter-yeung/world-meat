define(function (require, exports, module)
{

    var Data = require('../datasets/Data');
    var Counter = require('./Counter');


    function CounterManager(parent) {

      this.parent = parent;
      this.element = document.createElement('div');
      this.element.classList.add('counter');
      this.parent.appendChild(this.element)
      this.counters = [];
      var dataset = Data.DailyConsumption;

      for (var i = 0; i < dataset.length; i++) {
      	var data = dataset[i];
      	data.dataPerSec = this.dayToSecs(data.daily);
        console.log(typeof this.element)
      	var counter = new Counter(this.element,data);
      	this.counters.push(counter);
      };

      this.elapsedSeconds = 0;
      this.elapsedMS = 0;
      this.count = 0;
      this.lastTime = performance.now();
      this.deltaTime = 0;
      this.maxElapsedMS = 100;
    }

    CounterManager.prototype = {

      dayToSecs : function (perDay) {
          var secsPerDay = 86400;
          var perSec = (perDay / secsPerDay);
          return (Math.round(perSec * 2) / 2).toFixed(1);

      },

      update : function (currentTime) {

        this.count++;
        var elapsedMS;

        // Allow calling update directly with default currentTime.
        var currentTime = currentTime || performance.now();
        // Save uncapped elapsedMS for measurement
        elapsedMS = this.elapsedMS = currentTime - this.lastTime;

        // cap the milliseconds elapsed used for deltaTime
        if (elapsedMS > this.maxElapsedMS)
        {
            elapsedMS = this.maxElapsedMS;
        }

        this.deltaTime = elapsedMS * 0.06;

        this.lastTime = currentTime;

        for (var i = 0; i < this.counters.length; i++) {
        	var counter = this.counters[i];
        	counter.update(this.deltaTime);
        }
      }
    }

    module.exports = CounterManager;
});
