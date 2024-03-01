'use client'

import { useEffect, useState } from "react"

const Main = () => {
  
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [people, setPeople] = useState([])

  const saveUser = async () => {
    await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, age })
    })
    setName('')
    setAge(0)
    const res = await fetch('/api/form')
    const users = await res.json()
    setPeople(users)
  }

  useEffect(() => {
    fetch('/api/form')
      .then(resp => resp.json())
      .then(setPeople)
  },[])

  const renderPeople = () => (
    <>
      {people.map((person: any,index) => (
        <div key={index}><strong>{person?.name}</strong> tem <strong>{person?.age}</strong> anos</div>
      ))}
    </>
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Integrando com API #02</h1>
      <div className="flex flex-row gap-2">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(+e.target.value)} />
        <button onClick={saveUser}>Salvar</button>
      </div>
      <div className="flex flex-col gap-2">
        {renderPeople()}
      </div>
    </main>
  )
  
}
export default Main