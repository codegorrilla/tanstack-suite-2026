import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
    <header className="flex justify-between border-b border-neutral-800 pb-4 mb-8">
      <Link to="/">
        <h1 className="text-4xl">Tanstack Router</h1>
      </Link>
      <nav className="flex gap-6 mt-4">
        <a
          href="https://github.com/codegorrilla"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://instagram.com/codegorrilla"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com/codegorrilla"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <Link to="/about">About</Link>
        <Link to="/org/activities/posts">Posts</Link>
        <Link to="/org/activities/meetups">Meetups</Link>
      </nav>
    </header>
  )
}

export default Header
