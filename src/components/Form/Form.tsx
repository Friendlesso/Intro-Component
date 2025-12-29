
import { useState } from "react";
import { Promo } from "../Promo/Promo";
import { Input } from "./Input";
import { TAS } from "./TAS";
import { EMAIL_REGEX, FIRST_NAME_REGEX, LAST_NAME_REGEX, PASSWORD_REGEX } from "../../utils/validation";
import { PasswordInput } from "./PasswordInput";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <section className="md:w-1/2 w-full md:min-h-screen flex flex-col justify-center items-center gap-5">
      <Promo />
      <form action="submit" className="py-9 px-8 flex flex-col gap-3.5 bg-white w-full rounded-xl">
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
        <PasswordInput
          type={"password"}
          label={'Password'}
          id={'PasswordInput'}
          value={password}
          setValue={setPassword}
          minLength={8}
          validation={PASSWORD_REGEX}
        />

        <button type="submit" className="bg-(--submit-btn-color) text-white py-3 rounded-lg cursor-pointer hover:opacity-85">
          CLAIM YOUR FREE TRIAL
        </button>
        <TAS />
      </form>
    </section>
  )
}