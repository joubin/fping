fPing is a Chrome/Firefox/Safari Extension that removes the [ping](https://html.spec.whatwg.org/multipage/links.html#ping) attribute from the html page.

The `ping` attribute is used to provide tracking to page owner. Personally, I think it's not anyones business when I click on a link to take me to another site.

This extension simply removes that attribute for once the page loads. It does so by injecting the following JavaScript code into every page. 

```javascript
document.addEventListener("DOMContentLoaded", function (event)
                          {
                          var hrefs = document.getElementsByTagName('a');
                          for (var i = 0, l = hrefs.length; i < l; i++)
                          {
                          hrefs[i].removeAttribute("ping")
                          }
                          });

```

See the demo video on [youtube](https://youtu.be/7rkC7p6NWRA)
