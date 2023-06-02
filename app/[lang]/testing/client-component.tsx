'use client'

import Link from 'next/link'

export default async function IndexPage() {
  return (
    <div>
      On client
      <Link href={'/'} prefetch={false}>
        TO INDEX
      </Link>
    </div>
  )
}
