import ClientComponent from './client-component'

export default async function IndexPage() {
  return (
    <div>
      <p>Hello testing page on server</p>
      <ClientComponent />
    </div>
  )
}
