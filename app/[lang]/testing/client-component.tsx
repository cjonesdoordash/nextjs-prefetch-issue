'use client'

import Link from 'next/link'

export default async function IndexPage() {
  return (
    <div>
      On client
      <Link href={'/'}>TO INDEX</Link>
    </div>
  )
}
