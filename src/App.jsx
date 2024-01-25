import './App.css'

function App() {

  return (
    <main className="main">
      <section className="card">

        {/* image */}

        <figure>
          <img src="src/assets/illustration-article.svg" alt="blog preview card" className="card__image" />
        </figure>

        {/* text */}

        <p className="card__category bold">
          Learning
        </p>

        <p className="card__published gray">
          Published{" "}
          <time className='card__published-time gray' dateTime='2023-12-21'>21 Dec 2023</time>
        </p>

        <h1 className="card__title bold">HTML & CSS foundations</h1>

        <p className="card__description gray">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        {/* author */}

        <div className="author">
          <figure>
            <img src="src/assets/image-avatar.webp" alt="Greg Hooper" className="author__photo" />
          </figure>

          <p className="author__name bold">Greg Hooper</p>
        </div>

      </section>
    </main>
  )
}

export default App
