import type { NextPage } from 'next'
import Page from '../../Components/Page'
import PrivateSniper from '../../data/authors/PrivateSniper'

const AdBlock: NextPage = () => {
  const title = 'Discord: Disable DMs from server members.'
  const content = (
    <>
      <div className='guide'>
        <p>By default when you join any server on discord, members from that server are able to send you private messages (DMs).</p>
        <p>You can use the following to prevent this:</p>
        <h2 className='text-secondary'>Step 1 - Default Setting: Set the default when joining any new discord to not allow this option (won&apos;t stop any you have already joined).</h2>
        <h3>Desktop</h3>
        <ul>
          <li>Click on user settings icon</li>
          <li><img src='/images/guide/discord-desktop-user-settings.png' /></li>
          <li>Click on Privacy &amp; Safety</li>
          <li><img src='/images/guide/discord-desktop-user-settings-privacy-safety.png' /></li>
          <ul>Untick &quot;Allow direct messages from server members&quot;.</ul>
          <li><img src='/images/guide/discord-desktop-user-settings-server-dms.png' /></li>
        </ul>

        <h3>Mobile</h3>
        <p>The steps for mobile are similar however you click your avatar in the navigation panel at the bottom, then privacy and safety from there.</p>

        <h2 className='text-secondary'>Step 2 - Turn off DMs for any servers you have already joined</h2>
        <h3>Desktop</h3>
        <ul>
          <li>Right click on the server icon and click on Privacy Settings</li>
          <li><img src='/images/guide/discord-desktop-privacy-settings.png' /></li>
          <li>Untick &quot;Allow direct messages from server members&quot;. and click Done.</li>
          <li><img src='/images/guide/discord-desktop-privacy-settings-server-dms.png' /></li>
        </ul>

        <h3>Mobile</h3>
        <p>Similar to desktop, from the server list you can long tap the server icon or click the three dots, then scroll down the popup panel and untick &quot;Allow Direct Messages&quot;.</p>
        
      </div>
    </>
  )

  return (
    <Page {...{
      title,
      content,
      slug: 'guides/adblock',
      author: PrivateSniper,
      description: 'A security guide to use adblocking features of ublock origin to help secure browsers'
    }} />
  )
}

export default AdBlock
