import type { Answer } from "../../../types/answer"

const answers: Answer[] = [
  {
    question: 'What network are the NFTs on?',
    answer: (<span className='blockchain ethereum'>Ethereum</span>)
  },
  {
    question: 'When will the first payment be?',
    answer: 'Feb 1st 2023'
  },
  {
    question: 'How much will the first payment be?',
    answer: (<>$20 split between <span className='text-btc'>wBTC</span> and <span className='text-usdc'>USDC</span></>)
  }
]

export default answers
