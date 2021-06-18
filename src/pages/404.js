import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Head title="404: Not Found" />
        <h1>Not Found</h1>
        <p>
          블로그를 이전해서 요청하신 주소에 대한 포스트가 보이지 않을 수
          있습니다! 홈으로 이동하셔서 카테고리를 선택해 포스트를 찾아주세요!
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
