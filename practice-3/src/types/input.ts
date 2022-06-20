import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  className?: string;
  value?: string | number;
  type?: string;
  name?: string;
  min?: number;
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}