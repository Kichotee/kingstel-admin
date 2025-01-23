"use client";

import {
  ChakraProvider,
  createSystem,
  defaultBaseConfig,
  defaultSystem,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  const buttonRecipe = defineRecipe({
    variants: {
      brand: {
        true: {
          bg: "blue.900",
          color: "white",
          rounded: "xl",
        },
      },
    },
  });

  const config = defineConfig({
    theme: {
      recipes: { button:buttonRecipe },
      tokens: {
        colors: {},
      },
    },
  });
  const system = createSystem(defaultBaseConfig, config);
  return (
    <ChakraProvider value={{...system, ...defaultSystem}}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
