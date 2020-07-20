import React, { Component } from "react"
import PropTypes from "prop-types"
import { BlogPostTemplate } from "../../templates/blog-page"

class BlogPostPreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "",
    }
  }

  _getImage = async image => {
    const value = await this.props.getAsset(image)
    this.setState({ image: value.toString() })
  }

  componentDidMount() {
    /*
    const image = this.props.entry.getIn(['data', 'image'])
    console.log("image: ", image);
    if(image) {
      this.setState({image: image})
      this.props.getAsset(image).then(value => {
        this.setState({image: value.toString()})
      })

    }
     */
  }

  render() {
    const title = this.props.entry.getIn(["data", "title"])
    const { widgetFor } = this.props
    return (
      <div>
        <BlogPostTemplate
          title={title}
          image={this.state.image}
          content={widgetFor("body")}
        />
      </div>

    )
  }
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func
};

export default BlogPostPreview