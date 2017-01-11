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
  var plusButton = document.querySelector('#add span'),
      eventDiv = document.querySelector('#add > div:nth-child(2)'),
      dateDiv = document.querySelector('#add > div:nth-child(3)')
      addButton = document.querySelector('#add button');

  function toggleAddEvent() {
    eventDiv.style.display = isHidden(eventDiv) === 'none' ? 'block' : 'none';
    dateDiv.style.display = isHidden(dateDiv) === 'none' ? 'block' : 'none';
    addButton.style.display = isHidden(addButton) === 'none' ? 'block' : 'none';
  }

  function isHidden(el) {
    return window.getComputedStyle(el, null).getPropertyValue('display')
  }

  plusButton.addEventListener('click', toggleAddEvent);
}());
