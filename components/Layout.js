import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>


<style jsx>{`
    h1{
      text-shadow: 5px 5px 5px #ccc;
      animation: shag 5s infinite
    }
    @keyframes shag{
      0% {color:red}
      50% {color:blue}
      100% {color:red}
    }
    footer p{
      color:yellow
    }
  `}</style>

    </div>
  )
}