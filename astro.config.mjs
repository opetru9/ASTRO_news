import { defineConfig } from 'astro/config';
import icons from 'astro-icon';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [icons(), react()], // Integrarea pentru astro-icon
});