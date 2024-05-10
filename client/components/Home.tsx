import Nav from './Nav'

function Home() {
  const titleStyle = {
    fontSize: '3rem',
  }
  return (
    <div>
      <h2 style={titleStyle}>The Great New Zealand Great Walk Guide</h2>
      <p className="justified-paragraph">
        Welcome to your one-stop guide to New Zealand's Great Walks! Whether
        you're a seasoned tramper or an adventurous first-timer, we've got you
        covered. Dive into reviews, stunning photos, and insider tips for all
        ten of these iconic trails. Let us help you find your perfect match,
        plan your dream hike, and experience the best of New Zealand's
        breathtaking scenery.
      </p>
      <Nav />
    </div>
  )
}

export default Home
