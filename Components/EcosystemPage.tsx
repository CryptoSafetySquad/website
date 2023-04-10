import Page from "./Page"
import ExternalLink from "./ExternalLink"

const TokenDisplay = ({ name, cmc }: { name: string; cmc?: string; }) => {
  return cmc ? <ExternalLink href={cmc} text={name} /> : (<>{name}</>)
}

const EcosystemPage = ({ name, slug, data, metadata }: { name: string; slug?: string; data: any; metadata?: any; }) => {
  const title = name

  const sections = [
    { name: 'wallets', title: 'Wallets' },
    { name: 'explorers', title: 'Block Explorer' },
    { name: 'centralisedExchanges', title: 'Exchanges (Centralised)' },
    { name: 'decentralisedExchanges', title: 'DEXs (Token Swap)' },
    { name: 'nftMarketplaces', title: 'NFT Marketplaces' },
    { name: 'defi', title: 'DeFI (Decentralised Finance)' },
    { name: 'protocols', title: 'Projects / Protocols' },
    { name: 'launchpads', title: 'Launchpads' },
    { name: 'gaming', title: 'Gaming' },
    { name: 'riskyProjects', title: (<>&quot;Risky&quot; Projects / Protocols</>) },
  ]

  const content = (
    <>
      {metadata && (
        <div className="card">
        {metadata.website && (
          <ExternalLink href={metadata.website} text='Official Website' />
        )}
        {metadata.token && (
          <p>Native Token: <TokenDisplay {...metadata.token} /></p>
        )}
        </div>
      )}
      <p className='mb-4'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
      <div className='grid md:grid-cols-3 gap-2'>
        {sections.map(section => {
          if (data[section.name] && data[section.name].length > 0) {
            return data[section.name] && (
              <div className='card'>
                <h2 className='mb-2'>{section.title}</h2>
                <div className='grid grid-cols-2 gap-2'>
                {
                  data[section.name].map((entry: any) => <ExternalLink key={entry.name} href={entry.link} text={entry.name} />)
                }
                </div>
              </div>
            )
          }
        })}
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: `ecosystems/${slug || name.toLocaleLowerCase()}`,
      description: title
    }} />
  )
}

export default EcosystemPage
