import 'reveal.js/reveal.css';
import '../pastel_peach.css';
import 'katex/dist/katex.min.css';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
import Math from 'reveal.js/plugin/math';
import { slideNames } from './content';

const slidesContainer = document.querySelector('.reveal .slides') as HTMLElement;

slidesContainer.innerHTML = slideNames()
  .map(
    (file) => `<section
        data-markdown="${file}"
        data-separator="^\\r?\\n---\\r?\\n$"
        data-separator-vertical="^\\r?\\n--\\r?\\n$"
        data-separator-notes="^Note:"
      ></section>`
  )
  .join('');

const deck = new Reveal({
  hash: true,
  plugins: [Markdown, Math.KaTeX],
  progress: true,
  fragments: true,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
});

deck.initialize().then(() => {});
