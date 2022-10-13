import { useState } from "react"
import "./App.css"
import Hellow from './components/props/Hellow'
import Person from './components/props/Person'
import PersonList from './components/props/PersonList'
import Status from "./components/props/Status"
import Heading from "./components/props/Heading"
import Award from "./components/props/Award"
import Button from "./components/props/Button"
import Input from "./components/props/Input"
import Style from "./components/props/Style"
import Toggle from "./components/state/Toggle"
/*
  import User from "./components/state/User"
*/
import User from "./components/context/User"
import Counter from "./components/state/Counter"
import ThemeContextProvider from "./components/context/ThemeContext"
import Box from "./components/context/Box"
import { UserContextProvider } from "./components/context/UserContext"
import DomRef from "./components/ref/DomRef"
import MutableRef from "./components/ref/MutableRef"

const App = () => {
  const [value, setValue] = useState('');

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      firstName: 'Hellen',
      lastName: 'Keller'
    },
    {
      firstName: 'Clark',
      lastName: 'Kent'
    },
    {
      firstName: 'Princess',
      lastName: 'Diana'
    }
  ]

  return (
    <div>

      {/* <Hellow
        name={'prince'}
        number={10}
      /> */}

      {/* <Person
        name={personName}
      /> */}

      {/* <PersonList
        nameList={nameList}
      /> */}

      {/* <Status
        status="loading"
      /> */}

      {/* <Heading>
        Placeholder Text
      </Heading> */}

      {/* <Award>
        <Heading>You win award</Heading>
      </Award> */}

      {/* <Button 
        sayHyy={(event, id) => {
          console.log('Hay', event, id)
        }}
      /> */}

      {/* <Input
        value={value}
        handleChange={(event) => {
          setValue(event.target.value);
        }}
      /> */}

      {/* <Style
        styles={{ border: '1px solid black', padding: '1rem' }}
      /> */}

      {/* <Toggle /> */}

      {/* <User /> */}

      {/* <Counter /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      
      {/* <DomRef /> */}

      <MutableRef />

    </div>
  )
}

export default App