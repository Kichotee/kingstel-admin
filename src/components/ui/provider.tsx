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
    // Base styles applied to all buttons
    base: {
      fontWeight: "semibold",
      transition: "all 0.2s",
      _hover: { transform: "scale(1.02)" },
    },
    // Different variants
    variants: {
      brand: {
        true: {
          bg: "blue.900",
          color: "white",
          rounded: "xl",
          _hover: {
            bg: "blue.700",
          },
          _active: {
            bg: "blue.800",
          },
        },
      },
      primary: {
        true: {
          bg: "purple.500",
          color: "white",
          rounded: "md",
          _hover: {
            bg: "purple.600",
          },
        },
      },
      secondary: {
        true: {
          bg: "gray.200",
          color: "gray.800",
          rounded: "md",
          _hover: {
            bg: "gray.300",
          },
        },
      },
      outline: {
        true: {
          border: "2px solid",
          borderColor: "current",
          bg: "transparent",
          _hover: {
            bg: "gray.50",
          },
        },
      },
    },
    // Different sizes
   
    // Default values
  
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
