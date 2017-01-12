//allow user to select a date
//take that date and store it with the name of the event in an object
//store that object or array in local storage
//ability to set background

//timer
//store the event date
//store the date now
//use set interval to update the days left
//when the current date and the event date match up end the timer and display 0 days left
//days left hours left minutes left seconds left

(function() {

  var container = document.querySelector('#container'),
      plusButton = document.querySelector('#add span'),
      eventDiv = document.querySelector('#add > div:nth-child(2)'),
      dateDiv = document.querySelector('#add > div:nth-child(3)')
      addButton = document.querySelector('#add button');

  var events = [];

  function toggleAddEvent() {
    //show and hide add event elements
    var arr = [eventDiv, dateDiv, addButton];

    for(var i = 0, l = arr.length; i < l; i++) {
      arr[i].style.display = isHidden(arr[i]) === 'none' ? 'block' : 'none';
    }
  }

  function isHidden(el) {
    //check the value of display property
    return window.getComputedStyle(el, null).getPropertyValue('display')
  }

  function addEvent() {
    var eventInput = document.querySelector('.event').value,
        m = document.querySelector('.month').value,
        d = document.querySelector('.day').value,
        y = document.querySelector('.year').value,
        eventDate = new Date(y, m-1, d);

    if(document.querySelector('.empty')) {
      document.querySelector('.empty').remove();
    }

    events.push({eventTitle:eventTitle, eventDate:eventDate});
    toggleAddEvent();
  }

  function countdown(eventDate) {

  }

  //function that goes through all the event objects and starts timers for them

  plusButton.addEventListener('click', toggleAddEvent);
  addButton.addEventListener('click', addEvent);

}());
