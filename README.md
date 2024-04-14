# QuickLoad
QuickLoad.js is a tiny (733B) JS library heavily inspired by HTMX that lets the user build dynamic web pages with minimal effort.
 
 Example:
 ```HTML
<!-- This will load the content of "page.html" into the element with id "target" when the div is clicked. -->
<div ql-get="page.html" ql-event="click" ql-target="#target"></div>

 <!-- This will, when loaded, replace the element with id "target" with the content of "page.html" -->
 <div ql-get="page.html" ql-event="load" ql-target="#target" ql-swap="outerHTML"></div>

<!-- This will load the content of "page.html" into the element itself when the div is clicked -->
 <div ql-get="page.html"></div>
 ```

The library works by finding all elements on the page that have the HTML attribute "ql-get". This is the only attribute that is required for the library to work.
 
Supported attributes:
- **ql-get**: The URL of the page to load content from. Only GET requests are supported.
- **ql-event**: The event that triggers the content load. Can be either "click" or "load".
- **ql-target**: The target element to load the content into. If not specified, the content will be loaded into the element itself.
- **ql-swap**: The element swapping mode. Can either be innerHTML or outerHTML. If not specified, the default mode is innerHTML.
 