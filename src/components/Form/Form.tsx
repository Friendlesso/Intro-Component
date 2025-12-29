
import { useState } from "react";
import { Promo } from "../Promo/Promo";
import { NameInput } from "./NameInput";
import { TAS } from "./TAS";
import { FIRST_NAME_REGEX, LAST_NAME_REGEX } from "../../utils/validation";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <section className="w-1/2 flex flex-col gap-5">
      <Promo />
      <form action="submit" className="py-5 px-8 flex flex-col gap-2.5 bg-white">
        <NameInput
          validation={FIRST_NAME_REGEX}
          errorText={"Please provide a valid first name!"}
          label={'First Name'}
          id={'FirstNameInput'}
          value={firstName}
          setName={setFirstName}
        />
        <NameInput
          validation={LAST_NAME_REGEX}
          errorText={"Please provide a valid last name!"}
          label={'Last Name'}
          id={'LastNameInput'}
          value={lastName}
          setName={setLastName}
        />
        <button type="submit" className="bg-(--submit-btn-color) text-white py-3 rounded-lg cursor-pointer hover:opacity-85">
          CLAIM YOUR FREE TRIAL
        </button>
        <TAS />
      </form>
    </section>
  )
}