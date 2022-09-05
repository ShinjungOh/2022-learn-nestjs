import Link from 'next/link'

export default function SubLayout({ children }) {
  return (
    <div>
      <h1>
        <h1>
          <Link href="/">
            <a>Home으로</a>
          </Link>
        </h1>
        {children}
      </h1>
    </div>
  )
}
