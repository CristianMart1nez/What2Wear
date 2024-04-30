import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './AboutUsPage.css'

export const AboutUsPage = () => {
  return (
    <section className='about-container'>
      <div className='about-images-container'>
        <h2>the team</h2>

        <article className='about-img-container'>
          <img src="./src/assets/images/about/samuel.png" alt="" />
         <h3>
          Samuel Santana Rodriguez
          </h3>
          <article className='about-logo-container'>
         <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><LinkedInIcon/></a>madalena-posser-de-andrade-7a4092
            </article>
            <article className='about-logo-container'>
         <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><GitHubIcon/></a>Madalenaxpto
         </article>
        </article>

        <article className='about-img-container'>
          <img src="./src/assets/images/about/madalena.png" alt="" />
          <h3>
          Madalena Posser
         </h3>
         <article className='about-logo-container'>
         <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><LinkedInIcon/></a>madalena-posser-de-andrade-7a4092
            </article>
            <article className='about-logo-container'>
         <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><GitHubIcon/></a>Madalenaxpto
         </article>
        </article>

        <article className='about-img-container'>
          <img src="./src/assets/images/about/chris.png" alt="" />
          <h3>
          Cristian Martinez
          </h3>
          <article className='about-logo-container'>
         <a href="https://www.linkedin.com/in/cristian-martinez-web"><LinkedInIcon/></a>cristian-martinez-web
            </article>
            <article className='about-logo-container'>
         <a href="https://www.github.com/cristianmart1nez"><GitHubIcon/></a>cristianmart1nez
         </article>
        </article>
      </div>

    </section> )
}