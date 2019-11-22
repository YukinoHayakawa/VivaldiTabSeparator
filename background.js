function create_seprator()
{
    var title = prompt("Input Tab Separator Name");
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
    chrome.tabs.create({url: chrome.extension.getURL(
        'separator.html?t=' + title)});
}

chrome.browserAction.onClicked.addListener(function(tab) {
    create_seprator();
});

// chrome.commands.onCommand.addListener(function (command) {
//     if (command === "separator") {
//         create_seprator();
//     }
// });
