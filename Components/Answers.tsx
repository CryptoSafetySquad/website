
import type { Answer } from "../types/answer"

interface AnswersProps {
  qa: Answer[];
}

const Answers = ({ qa }: AnswersProps) => {
  return (
    <>
      {qa.map(entry => {
        return <div className='text-xs mb-1 grid grid-cols-[60%_1fr]' key={entry.question}>
          <span>{entry.question}</span>
          <span>{entry.answer}</span>
        </div>
      })}
    </>
  )
}

export default Answers
