
/*
	Add code to do the following:
	1. When you click on an `li` it selects it.
  2. If the `li` is already selected, it unselects it.
  3. After each click, update the total count of selected `li`s in the H1.
*/
document.addEventListener('DOMContentLoaded', function () {
  // create an alias for li
  const li = document.querySelectorAll('li')
  const ul = document.querySelector('ul')
  const theSpan = document.querySelector('span')
  var theSpanNum = 1;

  // create a eventlistener that on click highlights selected item and adds a class of selected 
  var highlighter = function highlight(val) {
    var target = val.target;

    // if target classlist has selected remove selected
    if(target.classList.contains("selected")) {
      target.classList.remove('selected');
      
      // remove 1 from the span num
      theSpanNum = theSpanNum - 1;
      theSpan.textContent = theSpanNum;

    } else {
      target.classList.add('selected');

      // add 1 to span num
      theSpanNum = theSpanNum + 1;
      theSpan.textContent = theSpanNum;

    }

  }
  ul.addEventListener('click', highlighter)
})