// This script scrolls the page to the section that the user clicked on.

window.addEventListener('click', function(event) {
  var target = event.target;

  if (target.tagName === 'A' && target.href.indexOf('#') === 0) {
    var sectionId = target.href.substring(1);
    var section = document.getElementById(sectionId);

    if (section) {
      var top = section.offsetTop;
      window.scrollTo(0, top);
    }
  }
});
