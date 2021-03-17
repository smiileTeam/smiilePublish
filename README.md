# Smiile Publish

Official Smiile library to publish content from an external website (yours ;-) to Smiile.

## Getting Started

### With CDN
```html
<!-- Use standard HTML tag to let you customize appearance of your button. -->
<button id="smiileShare_1">My publication button</button>
<script src="https://unpkg.com/@smiileteam/smiile-publish/dist/smiile-publish.min.js"></script>
<script>
    const publisher = new SmiilePublish();
    document.getElementById('smiileShare_1').addEventListener('click', () => publisher.publish({
        description: "Your content to upload", // The text content and url to upload on your Smiile network
        medias: [] // Url array of images to share with your post
    }));
</script>
```


### With npm

```bash
npm i @smiileteam/smiile-publish
```

```js
import {SmiilePublish} from '@smiileteam/smiile-publish';
const publisher = new SmiilePublish();
document.getElementById('smiileShare_1').addEventListener('click', () => publisher.publish({
    description: "Your content to upload", // The text content and url to upload on your Smiile network
    medias: [] // Url array of images to share with your post
}));
```


### Custom implementation

Our mecanism is really simple. It is just a POST call to [Smiile API](https://www.smiile.com/api/doc/publish) that will return to you the url to open in
a new window. You can see our readable implementation of this in [the non minified source code](src/smiile-publish.js).

For tests and while developing, please use our demo environnement
```js
const publisher = new SmiilePublish({apiDomain: 'demo-api.smiile.com'});
```

## Build and tests

```bash
npm install
npm run build
npm run test
```
