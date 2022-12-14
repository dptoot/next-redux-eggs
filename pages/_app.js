// import { getCommonEgg } from '../eggs/common'
import { wrapperInitializer } from '../store'
import Link from 'next/Link';
import '../styles/globals.css';

const CustomApp = ({ Component, pageProps }) => {
  return (
    <div>
      <ol>
        <li>
          <Link href='/'>
            with root reducer
          </Link>
        </li>
        
        <li>
          <Link href='/with-nested'>
            with nested reducer
          </Link>
        </li>

        <li>
          <Link href='/with-nested-sibling'>
            with nested reducer sibling
          </Link>
        </li>
      </ol>
      <Component {...pageProps} />
      </div>
  )
}

const beforeResult = async store => {
  if (typeof window === 'undefined') {
    // ...any async tasks for SSR
  }
}

const wrapper = wrapperInitializer.getAppWrapper([], { beforeResult })

export default wrapper.wrapApp(CustomApp)