

function RemovePing(event)
{
    var hrefs = document.getElementsByTagName('a');
    var count = 0
    for (var i = 0, l = hrefs.length; i < l; i++)
    {
        if(hrefs[i].hasAttribute("ping")){
            count += 1
        }
        
        hrefs[i].removeAttribute("ping")
    }
    safari.extension.dispatchMessage(count)
}

document.addEventListener("DOMContentLoaded", RemovePing);

/*
 * Re-enable paste
 * This is meant for sites with stupid develoeprs or security engineers 
 * who prevent the pasting of passwords. There is no reason to do that!
 * EVER
 */
 var allowPaste = function(e){
    e.stopImmediatePropagation();
    return true;
};
document.addEventListener('paste', allowPaste, true);
