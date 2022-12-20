import {useState} from "react"

function App() {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState(0)
  const [submit, setSubmit] = useState(false)

  const handleNameChange = (event) => {
    setName(event.target.value)
    console.log(event.target.value)
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value)
    console.log(event.target.value)
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const target = event.target
    console.log(target.name.value, target.gender.value, target.age.value)
    const headers = {"Content-Type": "application/json"}
    const body = JSON.stringify({"name": target.name.value, "gender": target.gender.value, "age": target.age.value})
    const response = await (fetch('http://localhost:3002/', {
      method: 'POST',
      headers,
      body
      }))
    console.log(response)
    setSubmit(true)
  }

  return (
  <div>
    {submit ? <h1>Thank you for submitting your information</h1> :
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input name="name" placeholder="Name" type="text" value={name} onChange={handleNameChange}></input>
        </label><br />
        <label>
          Gender: 
          <select name="gender" value={gender} onChange={handleGenderChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label><br />
        <label>
          Age:
          <input name="age" placeholder="Age" type="number" value={age} onChange={handleAgeChange}></input>
        </label><br />
        <input type="submit" value="Submit"></input>
      </form>
    }
    </div>
  );
}

export default App;
