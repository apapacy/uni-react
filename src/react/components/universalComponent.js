import universal from 'react-universal-component'

const UniversalComponent = universal(props => import(`./${props.page}`))

export default () =>
  <div>
    <UniversalComponent componentName='Foo' />
  </div>
