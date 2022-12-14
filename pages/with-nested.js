import { getNestedEgg, getRootEgg } from '../eggs'
import { wrapperInitializer } from '../store'
import StateMatcher from '../components/StateMatcher';

const wrapper = wrapperInitializer.getPageWrapper([
    getNestedEgg(),
]);

const WithNested = wrapper.wrapPage((props) => {
    return (
        <StateMatcher {...props} />
    )
})

WithNested.getInitialProps = wrapper.wrapGetInitialProps(store => () => {
  return {
    title: 'with nested reducer',
    expectedState: {
      rootEgg: true,
      nested: {
        egg: true,
      }
    }
  }
})

export default WithNested