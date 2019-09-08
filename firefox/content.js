document.addEventListener("DOMContentLoaded", function (event)
{
	var hrefs = document.getElementsByTagName('a');
	for (var i = 0, l = hrefs.length; i < l; i++)
	{
		hrefs[i].removeAttribute("ping")
	}
});

/*
 * Re-enable paste
 * This is meant for sites with stupid develoeprs or security engineers 
 * who prevent the pasting of passwords. There is no reason to do that!
 * EVER
 */

 document.addEventListener('paste', function(event){
 	e.stopImmediatePropagation();
 	return true;
 }, true);
