define(function (require, exports, module)
{
    function Counter(parent, options) {

      this.parent = parent;
      this.text = document.createElement('p');
      this.parent.appendChild(this.text);

      this.unit = options.unit;
      this.dataPerSec = options.dataPerSec;
      this.elapsedSeconds = 0;
      this.count = 0;

    }

    Counter.prototype = {

      update : function (deltaTime) {

        this.count++;

        if( this.count > (60 * deltaTime) )
        {
          this.count = 0;
          this.elapsedSeconds++;
          this.text.innerHTML = this.dataPerSec * this.elapsedSeconds + this.unit;
          this.frequency = Math.random() * 2;
        }
      }
    }

    module.exports = Counter;
});
