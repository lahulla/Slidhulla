
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'slides-reload',
      configureServer(server) {
        server.watcher.add('slides/math.md')

        server.watcher.on('change', (file) => {
          if (file.endsWith('math.md')) {
            server.ws.send({ type: 'full-reload' })
          }
        })
      },
    },
  ],
  server: {
    open: true,
  },
})
