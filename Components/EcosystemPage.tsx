import Page from "./Page"
import { NextPage } from "next"
import ExternalLink from "./ExternalLink"

const EcosystemCard = ({title, datapoint}: any) => {
  return (
    <div className='card'>
      <h2 className='mb-2'>{title}</h2>
      {
        datapoint.map((p: any) => <ExternalLink key={p.name} text={p.name} href={p.link} />)
      }
    </div>
  )
}

const EcosystemPage = ({ name, slug, data }: { name: string; slug: string; data: any }) => {
  const title = name

  const sections = [
    { name: 'wallets', title: 'Wallets' },
    { name: 'explorers', title: 'Block Explorer' },
    { name: 'centralisedExchanges', title: 'Exchanges (Centralised)' },
    { name: 'decentralisedExchanges', title: 'DEXs (Token Swap)' },
    { name: 'nftMarketplaces', title: 'NFT Marketplaces' },
    { name: 'defi', title: 'DeFI (Decentralised Finance)' },
    { name: 'protocols', title: 'Projects / Protocols' },
    { name: 'riskyProjects', title: (<>&quot;Risky&quot; Projects / Protocols</>) },
  ]

  const content = (
    <>
      <p className='mb-4'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
      <div className='grid md:grid-cols-3 gap-2'>
        {sections.map(section => {
          return data[section.name] && (
            <div className='card'>
              <h2 className='mb-2'>{section.title}</h2>
              <div className='grid grid-cols-2 gap-2'>
              {
                data[section.name].map((cex: any) => <ExternalLink key={cex.name} href={cex.link} text={cex.name} />)
              }
              </div>
            </div>
          )
        })}
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: `ecosystems/${slug}`,
      description: title
    }} />
  )
}

export default EcosystemPage
