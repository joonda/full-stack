import Link from "next/link"

export default function Home() {
	let name = 'park'
  return (
    <div>
      <h4 className="title">Apple Fresh</h4>
      <p className="title-sub">by dev { name }</p>
    </div>
  )
}