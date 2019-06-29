document.addEventListener("DOMContentLoaded", function (event)
                          {
                          var hrefs = document.getElementsByTagName('a');
                          for (var i = 0, l = hrefs.length; i < l; i++)
                          {
                          hrefs[i].removeAttribute("ping")
                          }
                          });
