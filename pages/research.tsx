import type { NextPage } from 'next'
import Link from 'next/link'
import Page from '../Components/Page'

const Research: NextPage = () => {

  const title = 'People: Sam Pitman'
  const content = (
    <>
      <h1>Research Tools</h1>

      <h2>UK Companies</h2>
      <p><a href='https://find-and-update.company-information.service.gov.uk/' target='_blank' rel='noopener noreferrer'>Companies House</a> - Check if a company is actually registered in the UK</p>
      <p><a href='https://www.fca.org.uk/' target='_blank' rel='noopener noreferrer'>Financial Conduct Authority</a> - For companies registered to handle investor funds in the UK</p>
    </>
  )

  return (
    <Page {...{
      title,
      slug: 'research',
      content,
      description: 'Research Tools',
    }} />
  )
}

export default Research
