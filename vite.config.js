import { defineConfig } from 'vite'

import pages from 'vituum/plugins/pages.js'
import twig from '@vituum/vite-plugin-twig'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pages(), twig()]
})