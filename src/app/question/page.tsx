'use client'

import Question from "@/components/ui/Question"
import { useEffect, useState } from "react"

const Page = () => {

  const [question, setQuestion] = useState(null)

  useEffect(() => {
    fetch('http://rcmonteiro:3000/api/question/123')
    .then(resp => resp.json())
    .then(setQuestion)
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Question data={question} />
    </main>
  )
}
export default Page