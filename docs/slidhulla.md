
The reveal engine supports these attributes

```ts

const deck = new Reveal({
  hash: true,
  plugins: [Markdown, Math.KaTeX],

  width: 1280,
  height: 720,

  controls: true,
  progress: true,
  slideNumber: true,

  keyboard: true,
  touch: true,
  overview: true,

  center: true,
  loop: false,
  rtl: false,

  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',

  autoAnimate: true,
  autoSlide: 0,

  fragments: true,
  help: true,
  pause: true,
});

```


### __Navigation__

```
deck.next();
deck.prev();

deck.left();
deck.right();
deck.up();
deck.down();

deck.slide(2);
deck.slide(2, 1);
deck.slide(2, 0, 1);
```

### __Fragments__

```
deck.nextFragment();
deck.prevFragment();
deck.navigateFragment(2);
```

### __Presentation modes__

```
deck.toggleOverview();
deck.togglePause();
deck.toggleAutoSlide();
deck.toggleHelp();

deck.isOverview();
deck.isPaused();
deck.isAutoSliding();
```

### __Reading state__

```
deck.getCurrentSlide();
deck.getPreviousSlide();

deck.getIndices();
deck.getProgress();

deck.getTotalSlides();
deck.getSlides();
deck.getSlide(2);

deck.isFirstSlide();
deck.isLastSlide();
```

### __Configuration and layout__

```
deck.configure({ controls: false });
deck.getConfig();

deck.layout();
deck.sync();
deck.shuffle();
```

### __Events__

```
deck.on('slidechanged', event => {
  console.log(event.indexh, event.indexv);
});

deck.off('slidechanged', handler);
```

### __Lifecycle__

```
await deck.initialize();
deck.destroy();
```


---


# Markdown as Slide - What is needed?

Splits slides using regex attributes.

```html
<section
  data-markdown="/slides.md"
  data-separator="^\r?\n---\r?\n$"
  data-separator-vertical="^\r?\n--\r?\n$"
  data-separator-notes="^Note:">
</section>

``` 

1. `data-markdown`
2. `data-template`

```html
<section data-markdown>
<textarea data-template>
```
