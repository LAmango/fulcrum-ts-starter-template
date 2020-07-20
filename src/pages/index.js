import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/common/form"
import Textfield from "../components/common/textfield"
import TextArea from "../components/common/textArea"
import Button from "../components/common/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={"Home"} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <Form
          submit={() => {}}
          submitButton={
          <Button type="submit">Submit</Button>
        }>
          <Textfield label="name" name="name" type="text"/>
          <Textfield label="email" name="email" type="email"/>
          <TextArea label="message" name="message" />
        </Form>
      </Layout>
    )
  }
}

export default IndexPage
