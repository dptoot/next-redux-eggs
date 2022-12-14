import { getSiblingNestedEgg } from '../eggs'
import { wrapperInitializer } from '../store'
import StateMatcher from '../components/StateMatcher';

const wrapper = wrapperInitializer.getPageWrapper([
  getSiblingNestedEgg(),
]);

const withSiblingNested = wrapper.wrapPage((props) => {
    return (
        <StateMatcher {...props} />
    )
})

withSiblingNested.getInitialProps = wrapper.wrapGetInitialProps(store => () => {
  return {
    title: 'with nested reducer sibling',
    expectedState: {
      rootEgg: true,
      nested: {
        egg: true,
        sibling: true,
      }
    }
  }
})

export default withSiblingNested