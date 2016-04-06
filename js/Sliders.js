function Sliders(parent) {

  this.resultsText = document.querySelector('.interactive-results')
  this.daySlider = document.querySelector('#slider-days');
  this.peopleSlider = document.querySelector('#slider-people');

  this.daySlider.addEventListener('change',this.updateDays.bind(this),false);
  //this.daySlider.addEventListener('input',this.updatePeople.bind(this),false);
  this.peopleSlider.addEventListener('change',this.updatePeople.bind(this),false);
  this.peopleSlider.addEventListener('input',this.updatePeople.bind(this),false);
  this.numPeople = 0;
  this.numDays = 0;
  this.PEOPLE_UNIT = 1000;
}

Sliders.prototype = {

  updateDays : function (evt) {
      this.numDays = evt.target.value;
      this.updateResults();
  },

  updatePeople : function (evt) {
    this.numPeople = evt.target.value * this.PEOPLE_UNIT;
    this.updateResults();
  },

  updateResults : function () {

    // TODO create data object
    var numChickenPerDay = 60233;
    var UKResidents2015 = 64679700;
    var chickenPerDayPerPerson = numChickenPerDay / UKResidents2015;

    var result = chickenPerDayPerPerson * this.numDays * this.numPeople;

    this.resultsText.innerHTML = "It would save : "+Math.round(result) + " chickens";
  }
}
