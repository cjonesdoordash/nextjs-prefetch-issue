import { TemplateClientComponent } from '../templateClientComponent'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <TemplateClientComponent isInner seconds={new Date().getSeconds()}>
      {children}
    </TemplateClientComponent>
  )
}
