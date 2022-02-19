# chrome-dino-game

The dino game extracted from the Chromium [source code](https://source.chromium.org/chromium/chromium/src/+/main:components/neterror/resources/offline.js).

If you are interested in the history of the dino game, read this post: [_As the Chrome dino runs, we caught up with the Googlers who built it_](https://www.blog.google/products/chrome/chrome-dino/).

## Play and build

You can play it on the [live demo](https://lonr.github.io/chrome-dino-game) I deployed. Why not `chrome://dino`？🤣

If you want to play with the code I extracted:

```sh
git clone https://github.com/lonr/chrome-dino-game.git

cd chrome-dino-game
npm install

npm run dev

# or build and preview
npm run build
npx http-server dist
```

## Similar projects

- [wayou/t-rex-runner](https://github.com/wayou/t-rex-runner)
- [yell0wsuit/chrome-dino-enhanced](https://github.com/yell0wsuit/chrome-dino-enhanced)
- [No Internet Game](https://nointernetgame.net/) You can play different versions of the dino game there
