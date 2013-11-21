
function initApp() {
  bb.pushScreen('href.html', 'href');
}
function setClickHandlers() {
 
  // blank
  var link = document.getElementById('vBlank');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    childWindow = window.open('http://www.gordoncollegeccs.edu.ph/cap/student/index.html', '_blank');
  });

  // top
  var link = document.getElementById('vTop');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    childWindow = window.open('http://www.gordoncollegeccs.edu.ph/cap/parent/index.html', '_blank');
  });

  // self
  var link = document.getElementById('vSelf');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    childWindow = window.open('http://www.gordoncollegeccs.edu.ph/cap/faculty/index.html', '_blank');
  });



}
