import { useState, type Dispatch, type SetStateAction } from "react";

type NameInputProps = {
  validation: RegExp;
  errorText: string;
  label: string;
  id: string;
  value: string;
  setName: Dispatch<SetStateAction<string>>;
}

export function NameInput({validation, errorText, label, id, value, setName}:NameInputProps) {
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);

    if (value.length > 0 && !validation.test(value)) {
      setError(errorText)
    } else {
      setError("")
    }
  }

  return (
    <>
      <div className="relative flex flex-col">
        <input
          id={id}
          type="text"
          required
          value={value}
          onChange={handleChange}
          minLength={1}
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