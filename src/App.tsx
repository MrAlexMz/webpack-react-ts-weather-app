import './styles.css'

export const App = () => {
  const name = 'aa'
  return (
    <h1>
      React TypeScript Webpack Starter Template - {process.env.NODE_ENV}{' '}
      {process.env.name}
    </h1>
  )
}
