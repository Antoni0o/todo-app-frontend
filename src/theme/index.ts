import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts } from "./fonts";
import { styles } from "./styles";

const overrides = {
  colors,
  styles,
  fonts,
}

const theme = extendTheme(overrides)

export default theme;