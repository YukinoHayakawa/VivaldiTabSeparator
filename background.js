// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}


function create_seprator()
{
        let title = prompt("Input Tab Separator Name");
    if(!title) return;
    title = title.trim();
    if(title.charAt(0) == '-')
    {
        title = title.substring(1).trim();
        len = title.length;
        padding = (70 - len) / 2;
        if(padding > 0)
        {
            pad_str = '-'.repeat(padding);
            title = `${pad_str} ${title} ${pad_str}`;
        }
    }
    else if(title.charAt(0) == '!')
    {
        title = title.substring(1).trim();
        title = toTitleCase(title);
    }
    chrome.tabs.create({url: `data:text/html,<title>${title}</title>`});
}

chrome.browserAction.onClicked.addListener(function(tab) {
    create_seprator();
});

chrome.commands.onCommand.addListener(function (command) {
    if (command === "separator") {
        create_seprator();
    }
});
