import React from "react"
import "../../static/assets/tailwind.css"
import Footer from "./footer"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import DevTool from "../components/devTool"

const Layout = props => {
  const { children } = props

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            pages {
              heading
              link
            }
          }
        }
      }
    `
  )
  return (
    <DevTool>
      <div className="flex flex-col items-stretch min-h-full bg-white w-full">
        <Header
          navItems={site.siteMetadata.pages}
          title={site.siteMetadata.title}
        />
        <main className="flex-1 container mx-auto">
          <h1 className="text-4xl">{props.location}</h1>
          <hr className="mb-4" />
          {children}
        </main>
        <Footer navItems={site.siteMetadata.pages} />
      </div>
    </DevTool>
  )
}

export default Layout
