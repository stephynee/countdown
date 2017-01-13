(function() {
  var container = document.querySelector('.timers'),
      plusButton = document.querySelector('#add span'),
      eventDiv = document.querySelector('#add > div:nth-child(2)'),
      dateDiv = document.querySelector('#add > div:nth-child(3)')
      addButton = document.querySelector('#add button');

  var events = [];
  var timers = [];
  var counterIndex = 0;

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
        event = {
          eventTitle: eventInput,
          eventDate: new Date(y, m-1, d)
        };

    //validate user input
    if(isNaN(m) || isNaN(d) || isNaN(y) || y.length !== 4) {
      return alert('Use date format MM/DD/YYYY');
    } else if(event.eventDate < Date.now()) {
      return alert('The event must be in the future');
    }

    if(document.querySelector('.empty')) {
      document.querySelector('.empty').remove();
    }

    events.push(event);
    toggleAddEvent();
    buildEvents([event]);
  }

  function countdown(eventDate, timeDivs) {
      var i = counterIndex;

      timers.push (setInterval(function time() {
      var timeRemaining = Math.round((eventDate - Date.now())/1000);

      if(timeRemaining < 0) {
        //this needs a fix
        clearInterval(timer[i]);
        return;
      }
      console.log(i);
      timeDivs[0].firstChild.textContent = Math.floor(timeRemaining / 86400);
      timeDivs[1].firstChild.textContent = Math.floor(timeRemaining / 3600) % 24;
      timeDivs[2].firstChild.textContent = Math.floor(timeRemaining / 60) % 60;
      timeDivs[3].firstChild.textContent = timeRemaining % 60;

      //run the timer immediately and return the time function so that set interval has a function to run subsequent times.
      return time;
    }(), 1000));
    counterIndex++;
  }

  function buildEvents(events) {
    if(events.length > 0) {
      var classes = ['days', 'hours', 'minutes', 'seconds'];

      events.forEach(function(event) {
        var containerDiv = document.createElement('div');
            eventTitle = document.createElement('h1'),
            timeDiv = document.createElement('div');

        for(var i = 0; i < 4; i++ ) {
          var div = document.createElement('div');
            for(var j = 0; j < 2; j++) {
              var span = document.createElement('span');
              div.appendChild(span);

              if(j === 1) {
                span.textContent = classes[i];
              }
            }
          div.setAttribute('class', classes[i]);
          timeDiv.appendChild(div);
        }

        timeDiv.setAttribute('class', 'time');
        eventTitle.textContent = event.eventTitle;

        containerDiv.addEventListener('click', function() {
          clearInterval(timers[getNodeIndex(this)]);
          timers.splice(getNodeIndex(this), 1);
          containerDiv.remove();
        });

        containerDiv.appendChild(eventTitle);
        containerDiv.appendChild(timeDiv);
        container.appendChild(containerDiv);
        countdown(event.eventDate, timeDiv.childNodes);
      });
    }
  }

  function getNodeIndex(element) {
    return Array.from(element.parentNode.children).indexOf(element);
  }

  plusButton.addEventListener('click', toggleAddEvent);
  addButton.addEventListener('click', addEvent);
  buildEvents(events);
}());
