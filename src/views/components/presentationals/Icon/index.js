import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Icon extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      width: null,
      height: null,
      content: null,
    }
  }

  componentDidMount() {
    const { name } = this.props

    import(`assets/images/${name}.svg`).then((svg) => {
      this.setState({
        xmlns: svg.attributes.xmlns,
        width: svg.attributes.width,
        height: svg.attributes.height,
        viewBox: svg.attributes.viewBox,
        content: svg.content,
      })
    })
  }

  render() {
    const { xmlns, width, height, viewBox, content } = this.state
    const { className } = this.props

    return (
      <span className={className}>
        {content && (
          <svg
            xmlns={xmlns}
            width={width}
            height={height}
            viewBox={viewBox}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </span>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    'logo-origin',
    'logo-white',
    'facebook',
  ]),
  className: PropTypes.string,
}

export default Icon
