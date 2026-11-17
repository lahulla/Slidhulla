
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'
import '../pastel_peach.css';
import 'katex/dist/katex.min.css'

import Reveal   from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown'
import Math     from 'reveal.js/plugin/math'

const deck = new Reveal({
  hash: true,
  plugins: [Markdown, Math.KaTeX],
  progress: true,
  fragments: true,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
})

deck.initialize()
