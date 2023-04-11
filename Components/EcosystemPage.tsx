import Page from "./Page"
import ExternalLink from "./ExternalLink"

const TokenDisplay = ({ name, cmc, className }: { name: string; cmc?: string; className?: string; }) => {
  return cmc ? <ExternalLink className={className} href={cmc} text={name} /> : (<>{name}</>)
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

  let tokenClass = metadata?.token?.name ? `text-${metadata.token.name.toLocaleLowerCase()}` : ''

  const content = (
    <>
      {metadata && (
        <div>
        {metadata.token && (
          <p>Native Token: <TokenDisplay className={tokenClass} {...metadata.token} /></p>
        )}
        </div>
      )}
      <p className='mb-4 warn'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {sections.map(section => {
          let linkClass = '';
          if (section.name === 'riskyProjects') {
            linkClass = 'danger'
          }
          if (data[section.name] && data[section.name].length > 0) {
            return data[section.name] && (
              <div className='card bordered'>
                <h2 className={`mb-2 ${tokenClass}`}>{section.title}</h2>
                <div className='grid md:grid-cols-2 gap-2'>
                {
                  data[section.name].map((entry: any) => <ExternalLink className={linkClass ?? null} key={entry.name} href={entry.link} text={entry.name} />)
                }
                </div>
              </div>
            )
          }
        })}
      </div>
    </>
  )

  const linkIcon = <img alt='Website Link' className='mr-2' src='/images/icons/external.svg' height='20' width='20' />

  const header = (
    <h1 className={`${tokenClass} flex`}>
      {name} {metadata?.website && (
        <a className='ml-4' href={metadata.website}>{linkIcon}</a>
      )}
    </h1>
  )

  return (
    <Page {...{
      title,
      header,
      content,
      slug: `ecosystems/${slug || name.toLocaleLowerCase()}`,
      description: title
    }} />
  )
}

export default EcosystemPage
