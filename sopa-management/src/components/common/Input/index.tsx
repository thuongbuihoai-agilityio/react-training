import React, { memo } from 'react';

// Styles
import './input.css';

export enum InputType {
  default = '',
  info = 'info',
  error = 'error'
}

export enum InputTheme {
  default = '',
  info = 'info',
  error = 'error'
}

interface IconProps {
  id?: string;
  ariaLabelledby?: string;
  name?: string;
  hidden?: boolean;
  checked?: boolean;
  value?: string | number;
  label?: string;
  type?: string;
  style?: string;
  theme?: string;
  placeholder?: string;
  classNameInput?: string;
  classNameLabel?: string;
  className?: string;
  onChange?: () => void;
  onBlur?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, IconProps>(
  (
    {
      id = '',
      name = '',
      ariaLabelledby = '',
      hidden = false,
      checked = false,
      value,
      label = '',
      type = '',
      theme = InputTheme.default,
      style = InputType.default,
      placeholder = '',
      classNameInput = 'input',
      classNameLabel = 'label',
      className = '',
      onChange = () => {},
      onBlur = () => {},
    },
    ref
  ) => (
    <>
      {label ? (
        <div data-testid='input-value' className='input-wrapper'>
          <label className={`${classNameLabel} label-${theme}`}>{label}</label>
          <input
            id={id}
            ref={ref}
            aria-aria-labelledby={ariaLabelledby}
            name={name}
            hidden={hidden}
            checked={checked}
            value={value}
            placeholder={placeholder}
            aria-hidden='true'
            className={`${classNameInput} input-${style}`}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      ) : (
        <input
          data-testid='input'
          id={id}
          name={name}
          aria-aria-labelledby={ariaLabelledby}
          hidden={hidden}
          defaultChecked={checked}
          type={type}
          value={value}
          placeholder={placeholder}
          aria-hidden='true'
          className={`${className} ${classNameInput} input-${style}`}
        />
      )}
    </>
  )
);

export default memo(Input);
