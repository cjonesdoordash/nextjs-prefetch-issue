'use client'

import Link from 'next/link'

export default async function IndexPage() {
  return (
    <div>
      On client
      <Link href={'/testing'} prefetch={false}>
        TO TESTING
      </Link>
    </div>
  )
}
