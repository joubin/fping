function createHooks() {
    ids = new Set();
    thistab = 0;
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.storage.sync.get("ignoreList", function(value) {
            fping(value["ignoreList"], changeInfo, tab)

        })
    });
}

function fping(ignorelist = [], changeInfo, tab) {
 chrome.storage.sync.get("playpause", function(value){
    setTimeout(function(){
        console.log("starting")
                if (!value.playpause) {
                    console.log(changeInfo.status)
           if (changeInfo.status == 'complete' && tab.active) {
            console.log("in complete")
               setTimeout(function() {
                    console.log("running function")
                    var div=document.createElement("div"); 
document.body.appendChild(div); 
div.innerText="test123";
                    var hrefs = document.getElementsByTagName('a');
                    console.log(hrefs.length)
                    for (var i = 0, l = hrefs.length; i < l; i++) {
                        console.log("Found ping and removing it"+i)
                        hrefs[i].removeAttribute("ping")
                    }
                }, 1000)
        }else{
            console.log("asd")
        }
    }
    }, 1000)
})

}

function getDomain(url, prematch) {
    var prefix = /^https?:\/\//;
    var domain = /^[^\/]+/;
    var postfix = /\//
        // remove any prefix
    url = url.replace(prefix, "");
    url = url.replace(postfix, "");
    // assume any URL that starts with a / is on the current page's domain

    // now extract just the domain
    var match = url.match(domain);
    if (match) {
        return (match[0]);
    }
    return (null);
}

function getIgnores(urls) {
    newurls = []
    urls.forEach(function(url) {
        newurls.push(getDomain(url));
    })
    return newurls;
}

function getHostName(url) {
    var match = url.match(/(https?:\/\/)?(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[3] === 'string' && match[3].length > 0) {
        return match[3];
    } else {
        return null;
    }
}

function _getDomain(url) {
    var hostName = getHostName(url);
    var domain = hostName;

    if (hostName != null) {
        var parts = hostName.split('.').reverse();

        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }

    return domain;
}

function isDomainIgnored(domain, Ignores) {
    check_lists = getIgnores(Ignores)
    this_domain = getDomain(domain)
    for (index in check_lists) {
        url = check_lists[index]
        if (url.indexOf("*") > -1) {
            // we just care if the Ignores match
            url = _getDomain(url)
            if (_getDomain(this_domain) === url) {
                return false
            }
        }
        if (this_domain === url) {
            return false
        }

    }
    return true

}

function main() {

}


document.addEventListener('DOMContentLoaded', function() {
    createHooks();
    main();
});