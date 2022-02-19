// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Mock errorPageController to set and get high score
window.errorPageController = {
  // Track easter egg plays and high scores.
  trackEasterEgg: function () {
    setTimeout(function () {
      const highScore = window.localStorage.getItem('dinoHighScore') ?? '0';
      window.initializeEasterEggHighScore(parseInt(highScore));
    }, 0);
  },

  updateEasterEggHighScore: function (highScore) {
    window.localStorage.setItem('dinoHighScore', String(highScore));
  },

  resetEasterEggHighScore: function () {
    window.localStorage.setItem('dinoHighScore', '0');
  },
};
