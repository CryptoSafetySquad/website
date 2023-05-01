import { Project } from "../../types/project";

const Banner = ({ bannerImage }: { bannerImage?: string; }) => {
  if (bannerImage) {
    return (
      <div className='rounded-r-lg' style={{ height: '300px', backgroundSize: 'cover', backgroundImage: `url(${bannerImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}></div>
    )
  }
  return null
}

export default Banner
