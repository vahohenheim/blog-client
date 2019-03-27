import React from 'react'
import PropTypes from 'prop-types'
import { createComponentWithProxy } from 'react-fela'
import ds from 'views/styles/designSystem'
import { pxTo } from 'design-system-utils'

const InputText = ({
  input,
  type,
  label,
  meta: { touched, error, warning },
  className,
  children,
  disabled,
  ...props
}) => (
  <div className={`${className} ${touched && error ? 'has-errors' : ''}`}>
    <div className="wrapper">
      <input {...props} type={type} disabled={disabled} {...input} id={input.name} />
      <label htmlFor={input.name} className={!input.value ? 'empty' : ''}>
        {label}
      </label>
      {children}
    </div>
    {touched &&
      ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
  </div>
)

InputText.defaultProps = {
  type: 'text',
  meta: {
    touched: false,
    error: false,
    warning: false,
  },
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  type: PropTypes.string,
  disabled: PropTypes.bool,
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
    fontSize: pxTo(ds.get('type.sizes.inputs.default.value'), documentBaseFontSize, 'rem'),
    position: 'absolute',
    top: pxTo(ds.get('spacing.padding.inputs') * 2, documentBaseFontSize, 'rem'),
    left: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    transition: '0.2s',
    textAlign: 'left',
  },
  '& .wrapper input': {
    color: ds.get('colors.texts.inputs.value'),
    backgroundColor: ds.get('colors.backgrounds.inputs'),
    borderRadius: pxTo(ds.get('border.radius.inputs'), ds.get('type.baseFontSize'), 'rem'),
    borderColor: ds.get('colors.borders.inputs.default'),
    borderStyle: ds.get('border.style'),
    borderWidth: pxTo(ds.get('border.width.inputs'), ds.get('type.baseFontSize'), 'rem'),
    minHeight: pxTo(60, documentBaseFontSize, 'rem'),
    paddingTop: pxTo(ds.get('spacing.padding.inputs') * 2, documentBaseFontSize, 'rem'),
    paddingRight: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    paddingLeft: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    width: '100%',
    fontSize: pxTo(ds.get('type.sizes.inputs.default.value'), documentBaseFontSize, 'rem'),
    lineHeight: pxTo(23, documentBaseFontSize, 'rem'),
  },
  '& .wrapper input:disabled': {
    color: ds.brand('grey'),
  },
  '& .wrapper input:focus + label': {
    fontSize: pxTo(ds.get('type.sizes.inputs.default.label'), ds.get('type.baseFontSize'), 'rem'),
    top: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    color: ds.get('colors.texts.inputs.label'),
  },
  '& .wrapper input + label:not(:placeholder-shown)': {
    fontSize: pxTo(ds.get('type.sizes.inputs.default.label'), ds.get('type.baseFontSize'), 'rem'),
    top: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    color: ds.get('colors.texts.inputs.label'),
  },
  '& .error': {
    display: 'block',
    marginTop: pxTo(ds.get('spacing.padding.inputs'), documentBaseFontSize, 'rem'),
    color: ds.get('colors.texts.inputs.error'),
    fontSize: pxTo(documentBaseFontSize, documentBaseFontSize, 'rem'),
    textAlign: 'left',
  },
  '&.has-errors .wrapper input': {
    borderColor: ds.get('colors.borders.inputs.error'),
    color: ds.get('colors.texts.inputs.error'),
  },
  '&.has-errors .wrapper label': {
    color: ds.get('colors.texts.inputs.error'),
  },
  '&.has-errors input': {
    color: ds.get('colors.texts.inputs.error'),
  },
})

export default createComponentWithProxy(rule, InputText)
