export default async function Root({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await fetch('https://catfact.ninja/fact')
  const json = await data.json()
  return (
    <div>
      <p>{json.fact}</p>
      {children}
    </div>
  )
}
