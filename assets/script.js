//Helper functions to modify classes
function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const regexing = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(regexing, ' ');
  }
}

//Listen for the click
function init() {
  document.getElementById("js-toggle").addEventListener("click", toggleContact);
}

//Do the thing
function toggleContact() {
  const content = document.getElementsByTagName('body')[0];
  if (!hasClass(content, "js-opened")) {
    addClass(content, "js-opened");
  } else {
    removeClass(content, "js-opened");
  }
}

//Only run after document load
document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
    init();
  }
});
