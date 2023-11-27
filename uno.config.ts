import { defineConfig, presetIcons, presetUno, presetWebFonts, presetWind } from 'unocss'
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        inter: 'Inter:300,400,500,600,700',
      },
    }),
    presetHeroPatterns(),
  ],
  theme: {
    colors: {
      primary: '#34D39A',
    },
  },
})
