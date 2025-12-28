import { Promo } from "../Promo/Promo";
import { NameInput } from "./NameInput";

export function Form() {
 return (
  <section className="w-1/2 flex flex-col gap-5">
    <Promo />
    <form action="submit" className="py-5 px-8 bg-white">
      <NameInput />
    </form>
  </section>
 )
}