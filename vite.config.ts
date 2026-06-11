import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		// esbuild can't scan .svelte files; lucide-svelte recommends excluding it
		exclude: ['lucide-svelte']
	}
});
