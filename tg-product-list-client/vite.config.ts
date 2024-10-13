import react from '@vitejs/plugin-react-swc'

export default {
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
};
