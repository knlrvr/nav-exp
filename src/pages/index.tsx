import type { ReactElement } from 'react'
import Layout from '@/components/layout/layout'

import Home from './home'

const Page = () => {
  return (
    <>
      <Home />
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Page