import { mode } from "@chakra-ui/theme-tools";

import { IGlobalStyleProps } from "../IGlobalStylesProps";

const styles = {
  global: (props: IGlobalStyleProps) => ({
    body: {
      color: mode('dark.400', 'light.200')(props),
      bg: mode('light.400', 'dark.400')(props),
    },
  }),
};

export { styles };