const ModeSwitchingIcon = ({ filename, size = 20, scheme = 'white' }: { filename: string; size?: number; scheme?: string; }) => (
  <>
    <picture>
      <img className='hidden dark:inline-block mr-2' alt='' height={size} width={size} src={`/images/icons/${scheme}/${filename}.svg`} />
      <img className='inline-block dark:hidden mr-2' alt='' height={size} width={size} src={`/images/icons/${filename}.svg`} />
    </picture>
  </>
)

export default ModeSwitchingIcon;
