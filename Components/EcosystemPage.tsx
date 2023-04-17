import Page from "./Page"
import ExternalLink from "./ExternalLink"

const TokenDisplay = ({ name, cmc, className }: { name: string; cmc?: string; className?: string; }) => {
  return cmc ? <ExternalLink className={className} href={cmc} text={name} /> : (<>{name}</>)
}

const EcosystemPage = ({ name, slug, data, metadata, icon, iconSize }: { name: string; slug?: string; data: any; metadata?: any; icon?: string; iconSize?: { w: number; h: number; } }) => {
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

  const linkIcon = <img alt='Website Link' className='mr-2' src='/images/icons/external.svg' height='20' width='20' />
  const header = (
    <div className='grid md:grid-cols-[60px,1fr]'>
      <div>
        {icon && (<img className='ml-auto mr-auto' src={icon} alt='icon' width={iconSize?.w || 40} height={iconSize?.h || 40} />)}
      </div>
      <div>
        <h1 className={`${tokenClass} flex mb-2`}>
          {name} {metadata?.website && (
            <a className='ml-4' href={metadata.website}>{linkIcon}</a>
          )}
        </h1>
        {metadata && (
          <span className='text-sm mt-2 mb-2'>
          {metadata.token && (
            <p>Native Token: <TokenDisplay className={tokenClass} {...metadata.token} /></p>
          )}
          </span>
        )}
      </div>
    </div>
  )

  const content = (
    <>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        <div className='card'>
          {header}
        </div>
        <div className='card'>
          <p className='mb-4 text-sm warn'>None of the information on this page is financial advice, do your own research before investing in any protocols.</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {sections.map(section => {
          let linkClass = '';
          if (section.name === 'riskyProjects') {
            linkClass = 'danger'
          }
          if (data[section.name] && data[section.name].length > 0) {
            return data[section.name] && (
              <div className='ecosystem-card bordered'>
                <div className='card__header'>
                  <h2 className={`${tokenClass}`}>{section.title}</h2>
                </div>
                <div className='card__content'>
                  <div className='grid md:grid-cols-2 gap-2'>
                  {
                    data[section.name].map((entry: any) => <ExternalLink className={linkClass ?? null} key={entry.name} href={entry.link} text={entry.name} />)
                  }
                  </div>
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
      header: <></>,
      content,
      slug: `ecosystems/${slug || name.toLocaleLowerCase()}`,
      description: title
    }} />
  )
}

export default EcosystemPage
