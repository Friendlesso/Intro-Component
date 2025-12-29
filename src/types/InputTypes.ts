import type { Dispatch, SetStateAction } from "react";

type validateOn = "change" | "blur";

export type InputProps = {
  type: React.HTMLInputTypeAttribute;
  validation: RegExp;
  label: string;
  id: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  minLength: number;
  validateOn?: validateOn;
}