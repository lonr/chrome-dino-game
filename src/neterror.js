// https://source.chromium.org/chromium/chromium/src/+/main:/components/neterror/resources/neterror.js

// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @typedef {{
 *   downloadButtonClick: function(),
 *   reloadButtonClick: function(string),
 *   detailsButtonClick: function(),
 *   diagnoseErrorsButtonClick: function(),
 *   trackEasterEgg: function(),
 *   updateEasterEggHighScore: function(number),
 *   resetEasterEggHighScore: function(),
 *   launchOfflineItem: function(string, string),
 *   savePageForLater: function(),
 *   cancelSavePage: function(),
 *   listVisibilityChange: function(boolean),
 * }}
 */
// eslint-disable-next-line no-var
var errorPageController;

const HIDDEN_CLASS = 'hidden';

// Subframes use a different layout but the same html file.  This is to make it
// easier to support platforms that load the error page via different
// mechanisms (Currently just iOS). We also use the subframe style for portals
// as they are embedded like subframes and can't be interacted with by the user.
const isSubFrame = false;

// Adds an icon class to the list and removes classes previously set.
function updateIconClass(newClass) {
  const frameSelector = isSubFrame ? '#sub-frame-error' : '#main-frame-error';
  const iconEl = document.querySelector(frameSelector + ' .icon');

  if (iconEl.classList.contains(newClass)) {
    return;
  }

  iconEl.className = 'icon ' + newClass;
}

// Called on document load, and from updateForDnsProbe().
function onDocumentLoadOrUpdate() {
  const iconClass = loadTimeData.valueExists('iconClass') && loadTimeData.getValue('iconClass');

  updateIconClass(iconClass);

  if (!isSubFrame && iconClass === 'icon-offline') {
    document.documentElement.classList.add('offline');
    new Runner('.interstitial-wrapper');
  }
}

function onDocumentLoad() {
  onDocumentLoadOrUpdate();
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);
