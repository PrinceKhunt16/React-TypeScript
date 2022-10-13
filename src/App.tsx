import "./App.css"
import Hellow from './Component/props/Hellow'
import Person from './Component/props/Person'
import PersonList from './Component/props/PersonList'
import Status from "./Component/props/Status"
import Heading from "./Component/props/Heading"
import Award from "./Component/props/Award"
import Button from "./Component/props/Button"
import Input from "./Component/props/Input"
import Style from "./Component/props/Style"

const App = () => {
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
        value='Hay'
        handleChange={(event) => {
          console.log(event)
        }}
      /> */}

      {/* <Style
        styles={{ border: '1px solid black', padding: '1rem' }}
      /> */}

    </div>
  )
}

export default App