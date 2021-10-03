"use strict";

const debug = false;

chrome.contextMenus.onClicked.addListener(function (infos, tab) {


    let url_ydl = "ydlgui:";

    if (infos.menuItemId.includes("_playlist")) {
        url_ydl += "playlist::";
    }

    if (infos.menuItemId.includes("_save")) {
        url_ydl += "startdownload::";
    }

    let url = "";

    if (infos.menuItemId.includes("_link")) 
    {
        url += decodeURI(infos.linkUrl);
    }
    else if (infos.menuItemId.includes("_frame")) {
            url += decodeURI(infos.frameUrl);
    }
    else if (infos.menuItemId.includes("_video")) {
        url += decodeURI(infos.srcUrl);
    }
    else if (infos.menuItemId.includes("_sound")) {
        url += decodeURI(infos.srcUrl);
    }
    else
    {
        url += decodeURI(infos.pageUrl);
    }


    url_ydl += url;

    if (debug) alert(url_ydl);


    window.open(url_ydl);

  
});




chrome.contextMenus.create({ id: "menu_dl_add_video", title: "URL:  Add as Video", contexts: ["page"] }, null);
chrome.contextMenus.create({ id: "menu_dl_add_playlist", title: "URL:  Add as Playlist", contexts: ["page"] }, null);
chrome.contextMenus.create({ id: "sep1", type: "separator", contexts: ["page"] }, null);

chrome.contextMenus.create({ id: "menu_dl_save_video", title: "URL:  Download as Video", contexts: ["page"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_playlist", title: "URL:  Download as Playlist", contexts: ["page"] }, null);
chrome.contextMenus.create({ id: "sep2", type: "separator", contexts: ["page"] }, null);


chrome.contextMenus.create({ id: "sepmnudl", type: "separator", contexts: ["page"] }, null);



chrome.contextMenus.create({ id: "menu_dl_add_video_link", title: "LINK:  Add as Video", contexts: ["link"] }, null);
chrome.contextMenus.create({ id: "menu_dl_add_playlist_link", title: "LINK:  Add as Playlist", contexts: ["link"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_video_link", title: "LINK:  Download as Video", contexts: ["link"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_playlist_link", title: "LINK:  Download as Playlist", contexts: ["link"] }, null);
chrome.contextMenus.create({ id: "sep4", type: "separator", contexts: ["link"] }, null);

chrome.contextMenus.create({ id: "menu_dl_add_video_frame", title: "FRAME:  Add as Video", contexts: ["frame"] }, null);
chrome.contextMenus.create({ id: "menu_dl_add_playlist_frame", title: "FRAME:  Add as Playlist", contexts: ["frame"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_video_frame", title: "FRAME:  Download as Video", contexts: ["frame"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_playlist_frame", title: "FRAME:  Download as Playlist", contexts: ["frame"] }, null);
chrome.contextMenus.create({ id: "sep6", type: "separator", contexts: ["frame"] }, null);

chrome.contextMenus.create({ id: "menu_dl_add_video_video", title: "VIDEO:  Add as Video", contexts: ["video"] }, null);
chrome.contextMenus.create({ id: "menu_dl_add_playlist_video", title: "VIDEO:  Add as Playlist", contexts: ["video"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_video_video", title: "VIDEO:  Download as Video", contexts: ["video"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_playlist_video", title: "VIDEO:  Download as Playlist", contexts: ["video"] }, null);
chrome.contextMenus.create({ id: "sep8", type: "separator", contexts: ["video"] }, null);

chrome.contextMenus.create({ id: "menu_dl_add_video_sound", title: "SOUND:  Add as Video", contexts: ["audio"] }, null);
chrome.contextMenus.create({ id: "menu_dl_add_playlist_sound", title: "SOUND:  Add as Playlist", contexts: ["audio"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_video_sound", title: "SOUND:  Download as Video", contexts: ["audio"] }, null);
chrome.contextMenus.create({ id: "menu_dl_save_playlist_sound", title: "SOUND:  Download as Playlist", contexts: ["audio"] }, null);
chrome.contextMenus.create({ id: "sep10", type: "separator", contexts: ["audio"] }, null);
