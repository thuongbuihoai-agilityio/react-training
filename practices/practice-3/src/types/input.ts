import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  className?: string;
  type?: string;
  name?: string;
  value?: string | number;
  min?: number;
  multiple?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}