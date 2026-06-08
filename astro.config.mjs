// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 自定义域名 taixu.icu：站点根服务（base '/'）。本机网关也在根服务，故统一 '/'。
// （Pages 用 github.io/taixu-site 子路径时才需 base '/taixu-site'；现走自定义域名。）
export default defineConfig({
	site: 'https://taixu.icu',
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
