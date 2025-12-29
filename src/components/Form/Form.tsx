
import { useState } from "react";
import { Promo } from "../Promo/Promo";
import { Input } from "./Input";
import { TAS } from "./TAS";
import { EMAIL_REGEX, FIRST_NAME_REGEX, LAST_NAME_REGEX } from "../../utils/validation";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");



  return (
    <section className="w-1/2 flex flex-col gap-5">
      <Promo />
      <form action="submit" className="py-5 px-8 flex flex-col gap-2.5 bg-white">
        <Input
          type={"text"}
          validation={FIRST_NAME_REGEX}
          label={'First Name'}
          id={'FirstNameInput'}
          value={firstName}
          setValue={setFirstName}
          minLength={1}
        />
        <Input
          type={"text"}
          validation={LAST_NAME_REGEX}
          label={'Last Name'}
          id={'LastNameInput'}
          value={lastName}
          setValue={setLastName}
          minLength={1}
        />
        <Input
          type={"email"}
          validation={EMAIL_REGEX}
          label={'Email Address'}
          id={'EmailInput'}
          value={email}
          setValue={setEmail}
          minLength={1}
          validateOn="blur"
        />

        <button type="submit" className="bg-(--submit-btn-color) text-white py-3 rounded-lg cursor-pointer hover:opacity-85">
          CLAIM YOUR FREE TRIAL
        </button>
        <TAS />
      </form>
    </section>
  )
}