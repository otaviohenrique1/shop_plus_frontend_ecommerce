import { HTMLAttributes } from "react";
import { Flex } from "./Flex";

type CenterProps = HTMLAttributes<HTMLDivElement>;

export function Center(props: CenterProps) {
  return (
    <Flex {...props} flexDirection="column" alignItems="center" justifyContent="center" />
  )
}