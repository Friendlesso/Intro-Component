import { Form } from "./components/Form/Form"
import { Title } from "./components/Title/Title"


function App() {


  return (
    <>
      <main className="flex md:flex-row flex-col md:gap-20 gap-10 w-full max-w-[95vw] md:p-0 py-10">
        <Title />
        <Form />
      </main>
    </>
  )
}

export default App
