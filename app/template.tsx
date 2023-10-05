import { TemplateClientComponent } from './templateClientComponent'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <TemplateClientComponent seconds={new Date().getSeconds()}>
      {children}
    </TemplateClientComponent>
  )
}
