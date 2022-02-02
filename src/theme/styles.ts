import { extendTheme, propNames } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

interface IGlobalStyleProps {
  colorMode: string
}

const styles = {
  global: (props: IGlobalStyleProps) => ({
    body: {
      color: mode('dark.200', 'light.200')(props),
      bg: mode('light.100', 'dark.100')(props),
    },
  }),
};

export { styles };