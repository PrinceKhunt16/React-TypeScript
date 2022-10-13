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
/*
  import Counter from "./components/state/Counter"
*/
import Counter from "./components/class/Counter"
import ThemeContextProvider from "./components/context/ThemeContext"
import Box from "./components/context/Box"
import { UserContextProvider } from "./components/context/UserContext"
import DomRef from "./components/ref/DomRef"
import MutableRef from "./components/ref/MutableRef"
import Private from "./components/auth/Private"
import Profile from "./components/auth/Profile"
import { List } from "./components/generics/List"
import RandomNumber from "./components/restriction/RandomNumber"
import Toast from "./components/template/Toast"

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

  const items = [
    {
      id: 1,
      firstName: 'Bruce',
      lastName: 'Wayne'
    },
    {
      id: 2,
      firstName: 'Clark',
      lastName: 'Kent'
    },
    {
      id: 3,
      firstName: 'Princess',
      lastName: 'Diana'
    }
  ];

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

      {/* <MutableRef /> */}

      {/* <Counter 
        message="Count number is "
      /> */}

      {/* <Private 
        isLoggedIn={true} 
        Component={Profile}
      /> */}

      {/* <List
        items={items}
        onClick={item => console.log(item)}
      /> */}

      {/* <RandomNumber
        value={10} 
        isPositive={true}
      /> */}

      <Toast
        position='center'
      />

    </div>
  )
}

export default App