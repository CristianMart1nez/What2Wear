import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './AboutUsPage.css'

export const AboutUsPage = () => {
  return (
    <section className='about-container'>
      <div className='about-images-container'>
        <h2>the team</h2>

        <article className='about-card-container'>
          <div className="about-img-container">
            <img src="./src/assets/images/about/samuel.png" alt="" />
          </div>
          <div className="about-info-container">
            <h3>Samuel Santana Rodriguez</h3>

            <div className='about-logo-container'>
              <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><LinkedInIcon /></a>
              <span>samuelsrodriguez</span>
            </div>

            <div className='about-logo-container'>
              <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><GitHubIcon /></a>
              <span>ssamusr</span>
            </div>
          </div>
        </article>

        <article className='about-card-container'>
          <div className="about-img-container">
            <img src="./src/assets/images/about/madalena.png" alt="" />
          </div>
          <div className="about-info-container">
            <h3>Madalena Posser</h3>

            <div className='about-logo-container'>
              <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><LinkedInIcon /></a>
              <span>madalena-posser-de-andrade-7a4092</span>
            </div>

            <div className='about-logo-container'>
              <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><GitHubIcon /></a>
              <span>Madalenaxpto</span>
            </div>
          </div>
        </article>

        <article className='about-card-container'>
          <div className="about-img-container">
            <img src="./src/assets/images/about/chris.png" alt="" />
          </div>
          <div className="about-info-container">
            <h3>Cristian Martinez</h3>

            <div className='about-logo-container'>
              <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><LinkedInIcon /></a>
              <span>cristian-martinez-web</span>
            </div>

            <div className='about-logo-container'>
              <a href="https://www.linkedin.com/in/madalena-posser-de-andrade-7a40925"><GitHubIcon /></a>
              <span>cristianmart1nez</span>
            </div>
          </div>
        </article>
      </div>

    </section>
  )
}