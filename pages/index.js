import { getRootEgg } from '../eggs'
import { wrapperInitializer } from '../store'
import StateMatcher from '../components/StateMatcher';

const wrapper = wrapperInitializer.getPageWrapper([
  getRootEgg(),
]);

const HomePage = wrapper.wrapPage((props) => {
    return (
        <StateMatcher {...props} />
    )
})

HomePage.getInitialProps = wrapper.wrapGetInitialProps(store => () => {
  return {
    title: 'with root level reducer',
    expectedState: {
      rootEgg: true,
    }
  }
})

export default HomePage