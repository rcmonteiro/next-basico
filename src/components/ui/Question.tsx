'use client'

const Question = (props: any) => {
  return props.data.question ? (
    <>
      <h1>#{props.data.id}: {props.data.question}</h1>
      <ul>
        {props.data.answers.map((answer: string,index: string) => <li key={index}>{answer}</li>)}
      </ul>
    </>
  ) : null
}
export default Question