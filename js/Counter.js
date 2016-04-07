define(function (require, exports, module)
{

    var Data = require('../datasets/Data');


    function Counter(parent) {

      this.parent = parent;
      this.element = document.createElement('div');
      this.element.classList.add('counter');
      this.chickenText = document.createElement('p');
      this.parent.appendChild(this.element);

      this.chickenText = document.createElement('p');
      this.element.appendChild(this.chickenText);

      this.cowText = document.createElement('p');
      this.element.appendChild(this.cowText);

      this.fishText = document.createElement('p');
      this.element.appendChild(this.fishText);

      this.lambText = document.createElement('p');
      this.element.appendChild(this.lambText);

      this.elapsedSeconds = 0;
      this.elapsedMS = 0;
      this.count = 0;
      this.lastTime = performance.now();
      this.deltaTime = 0;
      this.maxElapsedMS = 100;

      this.update = this.update.bind(this);
      this.update();



      var secsPerDay = 86400;

      this.numChickenPerSec = this.dayToSecs(Data.DailyConsumption.chickens);
      this.numCowsPerSec = this.dayToSecs(Data.DailyConsumption.cows);
      this.numFishPerSec = this.dayToSecs(Data.DailyConsumption.fish);
      this.numLambsPerSec = this.dayToSecs(Data.DailyConsumption.lambs);

    }

    Counter.prototype = {

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

        if(this.count > 60 * this.deltaTime)
        {
          this.count = 0;
          this.elapsedSeconds++;
          this.chickenText.innerHTML = this.numChickenPerSec * this.elapsedSeconds + ' chickens have been consumed ';
          this.cowText.innerHTML = this.numCowsPerSec * this.elapsedSeconds + ' cows have been consumed ';
          this.fishText.innerHTML = this.numFishPerSec * this.elapsedSeconds + ' fish have been consumed ';
          this.lambText.innerHTML = this.numLambsPerSec * this.elapsedSeconds + ' lambs have been consumed';
        }
        requestAnimationFrame(this.update);
      }
    }

    module.exports = Counter;
});
