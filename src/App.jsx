import './App.css'

function App() {

  //add readme

  return (
    <main className="main">

      <div className="main__title">
        <h1>Blog preview card</h1>
      </div>

      <section className="card">

        {/* image */}

        <figure>
          <img src="assets/illustration-article.svg" alt="blog preview card" className="card__image" />
        </figure>

        {/* text */}

        <div className="card__text">
          <p className="card__category bold">
            Learning
          </p>

          <p className="card__published gray">
            Published{" "}
            <time className='card__published-time gray' dateTime='2023-12-21'>21 Dec 2023</time>
          </p>

          <h2 className="card__title bold">HTML & CSS foundations</h2>

          <p className="card__description gray">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </div>

        {/* author */}

        <div className="author">
          <figure>
            <img src="assets/image-avatar.webp" alt="Greg Hooper" className="author__photo" />
          </figure>

          <p className="author__name bold">Greg Hooper</p>
        </div>

      </section>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/LuisVera1/FrontendMentor-Blog-preview-card">Luis Vera</a>.
      </div>
    </main>
  )
}

export default App
