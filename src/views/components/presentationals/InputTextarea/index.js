import React from 'react'
import PropTypes from 'prop-types'
import { createComponentWithProxy } from 'react-fela'
import ds from 'views/styles/designSystem'
import { pxTo } from 'design-system-utils'

import InputAnt from 'antd/lib/input';
const { TextArea } = InputAnt;


const InputTextarea = ({ input, type, label, meta: { touched, error, warning }, className, children, ...props }) => (
  <div className={[className].concat(touched && error ? 'has-errors' : []).join(' ')}>
    <div className="wrapper">
      <textarea {...props} type={type} {...input} id={input.name} />
      <label htmlFor={input.name} className={!input.value ? 'empty' : ''}>
        {label}
      </label>
      {children}
    </div>
    {touched &&
      ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
  </div>
)

InputTextarea.defaultProps = {
  type: 'text',
  meta: {
    touched: false,
    error: false,
    warning: false,
  },
}

InputTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  type: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any,
    warning: PropTypes.any,
  }),
  children: PropTypes.element,
}

const documentBaseFontSize = ds.get('type.baseFontSize')

const rule = () => ({
  marginBottom: pxTo(ds.get('spacing.padding.inputs') * 2, documentBaseFontSize, 'rem'),

  '& .wrapper': {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
  },
  '& .wrapper:hover': {
    cursor: 'pointer',
  },
  '& .wrapper label:hover': {
    cursor: 'pointer',
  },
  '& .wrapper label': {
    color: ds.get('colors.texts.inputs.value'),
    display: 'block',
    fontSize: '1rem',
    position: 'absolute',
    top: pxTo(ds.get('spacing.padding.inputs') * 2, documentBaseFontSize, 'rem'),
    left: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    transition: '0.2s',
    textAlign: 'left',
  },
  '& .wrapper textarea': {
    color: ds.get('colors.texts.inputs.value'),
    backgroundColor: ds.get('colors.backgrounds.inputs'),
    fontFamily: 'inherit',
    borderRadius: pxTo(ds.get('border.radius.inputs'), ds.get('type.baseFontSize'), 'rem'),
    borderColor: ds.get('colors.borders.inputs.default'),
    borderStyle: ds.get('border.style'),
    borderWidth: pxTo(ds.get('border.width.inputs'), ds.get('type.baseFontSize'), 'rem'),
    minHeight: pxTo(200, documentBaseFontSize, 'rem'),
    paddingTop: pxTo(30, documentBaseFontSize, 'rem'),
    paddingRight: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    paddingLeft: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    width: '100%',
    fontSize: pxTo(ds.get('type.sizes.inputs.default.value'), documentBaseFontSize, 'rem'),
    lineHeight: '1.438rem',
  },
  '& .wrapper textarea:focus + label': {
    fontSize: pxTo(ds.get('type.sizes.inputs.label.value'), documentBaseFontSize, 'rem'),
    top: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    color: ds.get('colors.texts.inputs.label'),
  },
  '& .wrapper textarea + label': {
    fontSize: pxTo(ds.get('type.sizes.inputs.label.value'), documentBaseFontSize, 'rem'),
    top: pxTo(10, documentBaseFontSize, 'rem'),
    color: ds.get('colors.texts.inputs.label'),
  },
  '& .error': {
    display: 'block',
    marginTop: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    color: ds.get('colors.texts.inputs.error'),
    fontSize: pxTo(documentBaseFontSize, documentBaseFontSize, 'rem'),
    textAlign: 'left',
  },
  '&.has-errors .wrapper textarea': {
    borderColor: ds.get('colors.borders.inputs.error'),
  },
  '&.has-errors textarea': {
    color: ds.get('colors.texts.inputs.error'),
  },
})


//export default createComponentWithProxy(rule, InputTextarea)


const TextAreaAnt = ({ size, brand, block, reversed, outline }) => (
  <TextArea
      placeholder="Autosize height with minimum and maximum number of lines"
      autosize={{ minRows: 4, maxRows: 12 }}
    />
)

export default TextAreaAnt
