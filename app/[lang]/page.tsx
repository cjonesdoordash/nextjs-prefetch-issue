import ClientComponent from './client-component'

export default async function IndexPage() {
  return (
    <div>
      On Server
      <ClientComponent />
    </div>
  )
}
