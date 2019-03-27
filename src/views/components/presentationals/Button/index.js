import ds from 'views/styles/designSystem'
import { pxTo } from 'design-system-utils'
import { createComponent } from 'react-fela'
import PropTypes from 'prop-types'

const documentBaseFontSize = ds.get('type.baseFontSize')
const xsTextSize = ds.get('type.sizes.buttons.xs')
const defaultTextSize = ds.get('type.sizes.buttons.default')

const textSizes = {
  xs: pxTo(xsTextSize, documentBaseFontSize, 'rem'),
  sm: pxTo(defaultTextSize, documentBaseFontSize, 'rem'),
  md: pxTo(defaultTextSize, documentBaseFontSize, 'rem'),
  lg: pxTo(defaultTextSize, documentBaseFontSize, 'rem'),
}

const defaultSpacing = pxTo(1, defaultTextSize, 'em')
const spacing = {
  xs: pxTo(1.7, xsTextSize, 'em'),
  sm: defaultSpacing,
  md: defaultSpacing,
  lg: defaultSpacing,
}

const height = {
  xs: pxTo(30, xsTextSize, 'em'),
  sm: pxTo(40, defaultTextSize, 'em'),
  md: pxTo(50, defaultTextSize, 'em'),
  lg: pxTo(60, defaultTextSize, 'em'),
}

const defaultPadding = `${pxTo(10, defaultTextSize, 'em')} ${pxTo(25, defaultTextSize, 'em')}`
const padding = {
  xs: `0 ${pxTo(30, xsTextSize, 'em')}`,
  sm: defaultPadding,
  md: defaultPadding,
  lg: defaultPadding,
}

const background = {
  primary: ds.brand('primary'),
  secondary: ds.brand('secondary'),
  tertiary: ds.brand('tertiary'),
  quaternary: ds.brand('quaternary'),
  reversed: ds.brand('white'),
  outline: 'transparent',
}

const color = {
  primary: ds.brand('white'),
  secondary: ds.brand('white'),
  tertiary: ds.brand('primary'),
  quaternary: ds.brand('primary'),
  outline: ds.brand('primary'),
}

const Button = createComponent(
  ({ size, brand, block, reversed, outline }) => ({
    textAlign: 'center',
    padding: padding[size],
    width: block ? '100%' : 'auto',
    minHeight: height[size],
    fontSize: textSizes[size],
    fontWeight: ds.get('type.fontWeight.bold'),
    letterSpacing: spacing[size],
    background:
      reversed === true && brand !== 'primary'
        ? background['reversed']
        : reversed === true && brand === 'primary'
        ? background['primary']
        : outline === true
        ? background['outline']
        : background[brand],
    color: outline === true ? color['outline'] : reversed === true ? background[brand] : color[brand],
    border:
      outline === true
        ? `${pxTo(ds.get('border.width.inputs'), documentBaseFontSize, 'rem')} currentColor ${ds.get('border.style')}`
        : 0,
    borderRadius: pxTo(ds.get('border.radius.buttons'), ds.get('type.baseFontSize'), 'rem'),
    cursor: 'pointer',
    position: 'relative',
    '-webkit-text-fill-color': reversed === true && brand === 'primary' ? 'transparent' : 'initial',
    '-webkit-background-clip': reversed === true && brand === 'primary' ? 'text' : 'initial',
    ':after': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      content: '" "',
      borderRadius: pxTo(ds.get('border.radius.buttons'), ds.get('type.baseFontSize'), 'rem'),
    },
    ':hover': {
      color: outline === true || reversed === true ? background[brand] : color[brand],
      background:
        reversed === true && brand !== 'primary'
          ? background['reversed']
          : reversed === true && brand === 'primary'
          ? background['primary']
          : outline === true && brand !== 'primary'
          ? background['reversed']
          : outline === true && brand === 'primary'
          ? background['primary']
          : background[brand],
      '-webkit-text-fill-color':
        (reversed === true && brand === 'primary') || (outline === true && brand === 'primary')
          ? 'transparent'
          : 'initial',
      '-webkit-background-clip':
        (reversed === true && brand === 'primary') || (outline === true && brand === 'primary') ? 'text' : 'initial',
      border:
        outline === true
          ? `${pxTo(ds.get('border.width.inputs'), documentBaseFontSize, 'rem')} currentColor ${ds.get('border.style')}`
          : 0,
      ':after': {
        zIndex: 2,
        backgroundColor: outline === true ? 'transparent' : 'rgba(0,0,0,0.1)',
      },
    },
    ':focus': {
      color: outline === true || reversed === true ? background[brand] : color[brand],
      background:
        reversed === true && brand !== 'primary'
          ? background['reversed']
          : reversed === true && brand === 'primary'
          ? background['primary']
          : outline === true && brand !== 'primary'
          ? background['reversed']
          : outline === true && brand === 'primary'
          ? background['primary']
          : background[brand],
      '-webkit-text-fill-color':
        (reversed === true && brand === 'primary') || (outline === true && brand === 'primary')
          ? 'transparent'
          : 'initial',
      '-webkit-background-clip':
        (reversed === true && brand === 'primary') || (outline === true && brand === 'primary') ? 'text' : 'initial',
      border: 0,
      ':after': {
        zIndex: 2,
        backgroundColor: outline === true ? 'transparent' : 'rgba(0,0,0,0.1)',
      },
    },
    ':disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      ':hover': {
        ':after': {
          zIndex: 2,
          backgroundColor: 'rgba(255,255,255,0.4)',
        },
      },
      ':focus': {
        ':after': {
          zIndex: 2,
          backgroundColor: 'rgba(255,255,255,0.4)',
        },
      },
      ':after': {
        zIndex: 2,
        backgroundColor: 'rgba(255,255,255,0.4)',
      },
    },
  }),
  'button',
  ['onClick', 'size', 'brand', 'disabled', 'reversed', 'type'],
)

Button.defaultProps = {
  block: false,
  outline: false,
  reversed: false,
}

Button.propTypes = {
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  reversed: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  brand: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
}

export default Button
