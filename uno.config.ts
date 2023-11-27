import { defineConfig, presetIcons, presetUno, presetWind } from 'unocss'
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetIcons(),
    presetIcons(),
    presetHeroPatterns(),
  ],
  theme: {
    colors: {
      primary: '#34D39A',
    },
  },
})
