import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { styles } from "./styles";

const overrides = {
  colors,
  styles
}

const theme = extendTheme(overrides)

export default theme;