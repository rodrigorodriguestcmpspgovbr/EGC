import Image from 'next/image'
import Layout from '../../components/layout'

function Avatar() {
  return (
  <Layout children>
    <Image src="/images/profile.jpg" alt="me" width="64" height="64" />
    <Image src="/images/profile.jpg" alt="me" width="128" height="128" />
    <Image src="/images/profile.jpg" alt="me" width="256" height="256" />
  </Layout>)
}

export default Avatar