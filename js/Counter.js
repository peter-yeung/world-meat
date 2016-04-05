function Counter(parent) {

  this.parent = parent;
  console.log('par',parent);
  this.element = document.createElement('div');
  this.element.classList.add('copy')
  this.p = document.createElement('p');
  this.chickenText = document.createElement('p');
  this.parent.appendChild(this.element);
  this.element.appendChild(this.p);
  this.element.appendChild(this.chickenText);

  this.elapsedSeconds = 0;
  this.elapsedMS = 0;
  this.count = 0;
  this.lastTime = performance.now();
  this.deltaTime = 0;
  this.maxElapsedMS = 100;

  this.update = this.update.bind(this);
  this.update();

  // based on 22 million per year / 365.25 = 60232.7
  // http://www.telegraph.co.uk/news/earth/agriculture/10375738/Britain-is-running-out-of-space-to-farm-chickens-warns-poultry-industry.html
  this.numChickenPerDay = 60233;
  this.numCowsPerDay = 100233;
  this.numFishPerDay = 200233;
  this.numLambsPerDay = 20233;

}

Counter.prototype = {
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
      this.chickenText.innerHTML = this.numChickenPerDay * this.elapsedSeconds + ' chickens have been consumed ' + 
      this.numCowsPerDay * this.elapsedSeconds + ' cows have been consumed ' +
      this.numFishPerDay * this.elapsedSeconds + ' fish have been consumed ' +
     this.numLambsPerDay * this.elapsedSeconds + ' lambs have been consumed';
    }
    requestAnimationFrame(this.update);
  }
}
