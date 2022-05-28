import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { name } from './package.json'

export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			name,
			entry: './src/exports.ts',
			fileName: f => `index.${f}.js`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: [Vue(), Unocss()]
})
