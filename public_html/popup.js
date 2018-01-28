// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * 
 * @returns The window id
 */
//function createWindow(url) {
//   // Create the window
//   var window;
//  chrome.windows.create({focused : false, url : url}, (window) => {
//      console.log("Creating window with id: " + window.id);
////      windowId = window.id;   
////        console.log(windowId);
//  });
//  console.log(window);
////  return windowId;
//}

// This extension loads the saved background color for the current tab if one
// exists. The user can select a new background color from the dropdown for the
// current page, and it will be saved as part of the extension's isolated
// storage. The chrome.storage API is used for this purpose. This is different
// from the window.localStorage API, which is synchronous and stores data bound
// to a document's origin. Also, using chrome.storage.sync instead of
// chrome.storage.local allows the extension data to be synced across multiple
// user devices.
var tabCount = 0;
function searchTermGenerator() {
    // The keywords that will be searhed using bing
    return ["a", "b", "c", "d", "e","j"];
}


document.addEventListener('DOMContentLoaded', () => {
    var urlBase = "https://www.bing.com/search?q=";
    var keywords = searchTermGenerator();
    
    // Create the window
    chrome.windows.create({focused : false}, (window) => {
        console.log("Creating window with id: " + window.id);
        var tabCount = 0;
        for(var i = 0; i < keywords.length; ++i) {
            for(var j = 0; j < keywords.length; ++j) {
                tabCount++;
                chrome.tabs.create({active : false, url : urlBase + keywords[i] + keywords[j], windowId : window.id}, (tab) => {});
                    // Wait util the tab has loaded before creating the next tab
            }  
        }
  });
  console.log(tabCount);
//    while (true)
//        chrome.tabs.query({status : "complete", windowId : window.id, index : i}, (tabResults) => {
//             if (tabResults === tabCount) break;
//            });
//      chrome.windows.remove(window.id);
//      chrome.windows.create({focused : false, state : "maximized", url : "https://account.microsoft.com/rewards/dashboard?refd=www.bing.com"});
//
//
//    
//    
//    do {
//        chrome.tabs.query({status : "complete", )
//    } while(t)
  // The number of tabs that have completed loading
//  var len;
  // Wait until all tabs have completed loading
//  do {   
//     chrome.tabs.query({status : "complete", windowId : windowId}, (tabResults) => {
//         len = tabResults.length;
//         console.log("The length of the returned tab array is " + tabResults.length);
//     });       
//   } while (len != keywords.length)
       
  // Once all the tabs have completed loading, close the window

   
});