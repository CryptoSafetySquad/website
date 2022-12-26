const ModeSwitchingIcon = ({ filename, size, scheme = 'white' }: { filename: string; size: number; scheme?: string; }) => (
  <>
    <img className='hidden dark:inline-block mr-2' height={size} width={size} src={`/images/icons/${scheme}/${filename}.svg`} />
    <img className='inline-block dark:hidden mr-2' height={size} width={size} src={`/images/icons/${filename}.svg`} />
  </>
)

export default ModeSwitchingIcon;
