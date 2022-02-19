# Resources

You can get the resources of the dino game from several different directories:

## The main part

[`components/neterror`](https://source.chromium.org/chromium/chromium/src/+/main:components/neterror) contains the main part of the game.

To checkout `components/neterror` from the [GitHub mirror](https://github.com/chromium/chromium/tree/main/components/neterror) by git:

```bash
# I used the GitHub mirror
git clone \
--filter=blob:none \
--no-checkout \
--depth 1 \
--sparse \
git@github.com:chromium/chromium.git

cd chromium
git sparse-checkout set components/neterror
git checkout
```

See also:

- [Chromium Code Search](https://source.chromium.org/chromium/chromium/src)
- [Where can I find uncompressed source code for the Google browser's "no internet connection" T-Rex side scroller game?](https://www.quora.com/Where-can-I-find-uncompressed-source-code-for-the-Google-browsers-no-internet-connection-T-Rex-side-scroller-game)
- [How can I download a specific folder from a GitHub repo?](https://github.community/t/how-can-i-download-a-specific-folder-from-a-github-repo/278/28)
- [How to download a specific folder of Chromium code?](https://stackoverflow.com/a/64177995/5783347)

## `loadTimeData`

[`ui/webui/resources/js/load_time_data.m.js`](https://source.chromium.org/chromium/chromium/src/+/main:ui/webui/resources/js/load_time_data.m.js) ([GitHub](https://github.com/chromium/chromium/blob/main/ui/webui/resources/js/load_time_data.m.js)) defines the `LoadTimeData` class and a `loadTimeData`(empty) variable

## `loadTimeData.data`

The `data` of `loadTimeData` is set by [`components/error_page/common/localized_error.cc`](https://source.chromium.org/chromium/chromium/src/+/main:components/error_page/common/localized_error.cc;l=895?q=dinoGameA11yAriaLabel&sq=&ss=chromium%2Fchromium%2Fsrc).

Some i18n and a11y strings in `loadTimeData.data` are from [`components/error_page_strings.grdp`](https://source.chromium.org/chromium/chromium/src/+/main:components/error_page_strings.grdp) actually.

And corresponding l10n strings are in `components/strings/components_strings_*.xtb`. [E.g. `components_strings_zh-CN.xtb`](https://source.chromium.org/chromium/chromium/src/+/main:components/strings/components_strings_zh-CN.xtb)

See also:

- [GRIT User's Guide](https://www.chromium.org/developers/tools-we-use-in-chromium/grit/grit-users-guide/)
- [Chromium translations explained: part 1](https://ftagada.wordpress.com/2011/01/08/chromium-translations-explained-part-1/)

## `errorPageController` and high score

`errorPageController` is defined in [`chrome/renderer/net/net_error_page_controller.cc`](https://source.chromium.org/chromium/chromium/src/+/main:chrome/renderer/net/net_error_page_controller.cc;bpv=0;bpt=1).

I mocked the class and used `localStorage` to save high score (thanks to [yell0wsuit/chrome-dino-enhanced](https://github.com/yell0wsuit/chrome-dino-enhanced#features--changes) for this idea).

`initializeEasterEggHighScore` (See it in [`net_error_helper.cc`](https://source.chromium.org/chromium/chromium/src/+/main:chrome/renderer/net/net_error_helper.cc;bpv=0;bpt=1)) is a callback that will be called sometime after `errorPageController.trackEasterEgg()` is called.

## The Olympics limited edition

Encrypted Olympics sprites are hidden in [`components/error_page/common/alt_game_images.cc`](https://source.chromium.org/chromium/chromium/src/+/main:components/error_page/common/) ([GitHub](https://github.com/chromium/chromium/tree/main/components/error_page/common)). (choose a tag between 91 and 98)

The corresponding `components/neterror/offline_sprite_definitions.m.js` lived from version 91 to 95

I've got neither the key nor the sprites

## The birthday limited edition

The birthday limited edition can be found in [Chrome 69](https://source.chromium.org/chromium/chromium/src/+/refs/tags/69.0.3456.0:components/neterror/) ([GitHub](https://github.com/chromium/chromium/tree/69.0.3456.0/components/neterror))

- [As the Chrome dino runs, we caught up with the Googlers who built it](https://www.blog.google/products/chrome/chrome-dino/)

## Misc

- [`interstitial_core.css`](https://source.chromium.org/chromium/chromium/src/+/main:/components/security_interstitials/core/common/resources/interstitial_core.css;bpv=0;bpt=0) and [`interstitial_common.css`](https://source.chromium.org/chromium/chromium/src/+/main:/components/security_interstitials/core/common/resources/interstitial_common.css)
- [`.eslintrc.js`](https://source.chromium.org/chromium/chromium/src/+/main:.eslintrc.js)
