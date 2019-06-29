function RemovePing(event)
{
        var hrefs = document.getElementsByTagName('a');
        var count = 0
        for (var i = 0, l = hrefs.length; i < l; i++)
        {
            count += 1
            hrefs[i].removeAttribute("ping")
        }
        safari.extension.dispatchMessage(count)
}

document.addEventListener("DOMContentLoaded", RemovePing);

