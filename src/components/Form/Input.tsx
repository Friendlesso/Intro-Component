import { useState } from "react";
import type { InputProps } from "../../types/InputTypes";


export function Input({ type, validation, label, id, value, setValue, minLength, validateOn = "change" }: InputProps) {
  const [error, setError] = useState("");

  function validate(inputVal: string) {
    if(inputVal.length < minLength) return "";
    if(!validation.test(inputVal)) {
      return `Please provide a valid ${label}!`;
    }
    return "";
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const InputValue = e.target.value;
    setValue(InputValue);

    if (validateOn === "change") {
      setError(validate(InputValue));
    } else {
      setError("")
    }
  }

  function handleBlur() {
    if (validateOn === "blur") {
      setError(validate(value))
    }
  }

  return (
    <>
      <div className="relative flex flex-col">
        <input
          id={id}
          type={type}
          required
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          minLength={minLength}
          className=
          {`
            w-full 
            py-3 px-4 
            rounded-lg 
            border-2 
            outline-none
            ${error
              ? 'border-red-400'
              : 'border-(--purple-300) '
            }
          `}
        />
        <label
          htmlFor={id}
          className=
          {`
          absolute  left-3 top-1/2
          transition-all duration-150
          px-2
          rounded-2xl
          select-none
          ${value
              ? '-translate-y-[175%] bg-white text-sm '
              : '-translate-y-1/2'
            }
            ${error
              ? 'text-red-300'
              : 'text-gray-500'
            }
        `}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-right text-sm text-red-400">{error}</p>}
    </>

  )
}