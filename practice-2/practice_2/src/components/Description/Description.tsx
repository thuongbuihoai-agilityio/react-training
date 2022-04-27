import React from "react";
import { TitleProps } from "../../types/commonType/title";

export default function Description({
  children,
}: TitleProps): JSX.Element {
  return (
    <p className="description">
      {children}
    </p>
  )
}