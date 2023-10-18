import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    compression({
      algorithm: 'gzip', // 使用 gzip 压缩算法
      ext: '.gz', // 将压缩后的文件扩展名设置为 .gz
    }),
  ],
});