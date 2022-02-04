import { mode } from "@chakra-ui/theme-tools";

import { IGlobalStyleProps } from "../IGlobalStylesProps";

const styles = {
  global: (props: IGlobalStyleProps) => ({
    body: {
      color: mode('blue.100', 'light.200')(props),
      bg: mode('light.400', 'blue.100')(props),
    },
  }),
};

export { styles };