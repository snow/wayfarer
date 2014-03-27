/**
 * content scripts
 *
 * @author : snow@firebloom.cc
 * @license : MIT
 */

(function() {
  // show page action
  // ------------------
  chrome.runtime.sendMessage({});

  // do the job
  // -----------
  window.addEventListener('beforeunload', function(){
    return 'douban.fm';
  });
})();

