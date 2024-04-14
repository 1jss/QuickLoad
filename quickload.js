/**
 * @param {HTMLElement} parentElement
 * @returns {Array<HTMLElement>}
 */
function findElements(parentElement) {
  var elements = parentElement.querySelectorAll("[ql-get]");
  return elements
}

/**
 * @param {HTMLElement} element
 * @returns {void}
 */
function addEvent(element) {
  var event = element.getAttribute('ql-event');
  if (event === 'load') {
    getContent(element);
  } else {
    element.addEventListener('click', function () {
      getContent(element);
    });
  }
}

/**
 * @param {HTMLElement} element
 * @returns {void}
 */
function getContent(element) {
  var url = element.getAttribute('ql-get');
  var target = element.getAttribute('ql-target');
  var targetElement = target ? document.querySelector(target) : element;
  if (!targetElement) return; // Target wanted, but not found
  var swap = element.getAttribute('ql-swap') || 'innerHTML';
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      if (swap === 'outerHTML' && targetElement.tagName !== 'BODY') {
        var tempElement = document.createElement('div')
        tempElement.innerHTML = request.responseText;
        findElements(tempElement).forEach(element => {
          addEvent(element);
        });
        targetElement.parentNode.replaceChild(tempElement.firstChild, targetElement);
      } else {
        targetElement.innerHTML = request.responseText;
        findElements(targetElement).forEach(element => {
          addEvent(element);
        });
      }
    }
  };
  request.send();
}

// Initialize the library
(function () {
  var elements = findElements(document);
  if (!elements.length) return;
  elements.forEach(element => {
    addEvent(element);
  })
})();