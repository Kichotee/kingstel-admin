"use client";

import {
  ChakraProvider,
  createSystem,
  defaultBaseConfig,
  defaultConfig,
  defaultSystem,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  

const config = defineConfig({
      cssVarsRoot: ":where(:root, :host)",  

  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e3f2fd' },
          100: { value: '#bbdefb' },
          200: { value: '#90caf9' },
          300: { value: '#64b5f6' },
          400: { value: '#42a5f5' },
          500: { value: '#0F00BD' },
          600: { value: '#1e88e5' },
          700: { value: '#1976d2' },
          800: { value: '#1565c0' },
          900: { value: '#0d47a1' },
        },
      },
    },
    recipes: {
      button: {
        base: {
          colorPalette: 'brand',  // default color palette
        },
        
      },
      badge: {
        base: {
          colorPalette: 'brand',
        },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)
  return (
    <ChakraProvider value={{ ...system, ...defaultSystem }}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
