import { useState } from "react";

export function NameInput() {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFirstName(value);

    if (!firstNameRegex.test(value)) {
      setError("First name must contain letters only")
    } else {
      setError("")
    }
  }



  // \p{L} = any Unicode letter
  // u = flag required
  const firstNameRegex = /^[\p{L}]+$/u;

  return (
    <>
      <div className="relative flex flex-col">
        <input
          id="iname"
          type="text"
          required
          value={firstName}
          onChange={handleChange}
          minLength={1}
          className="w-full py-2 bg-white border-2 border-black"
        />
        <label
          htmlFor="iname"
          className=
          {`
          absolute  left-3 top-1/2
          transition-all px-2
          ${firstName
              ? '-translate-y-[140%] bg-white '
              : '-translate-y-1/2'
            }
        `}
        >
          First Name
        </label>
      </div>
      {error && <p className="text-right">{error}</p>}
    </>

  )
}