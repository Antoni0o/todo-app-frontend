import { ReactChild, ReactChildren } from "react";

export default interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  height?: string;
}