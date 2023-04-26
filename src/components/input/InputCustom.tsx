import { ErrorMessage } from 'formik';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import InputMask from 'react-input-mask';
import './InputCustom.css';

interface InputProps {
  helperText?: string,
  name: string,
  value?: string | number,
  onChange?: Function,
  disabled?: boolean,
  readOnly?: boolean,
  label?: string,
  type?: string,
  mask?: any,
  hasError?: boolean,
  autoComplete?: string,
  items?: Array<any>,
}

const selectField = (props: InputProps) => {
  const { name, label, value, onChange, items, ...other } = props;

  return (
    <FormControl
      variant="standard"
      fullWidth
    >
      <InputLabel id={`${name}_label_id`}>{label}</InputLabel>
      <Select
        {...other}
        value={value}
        name={name}
        onChange={(event) => onChange(event)}
        labelId={`${name}_label_id`}
        id={name}
        label={label}
      >
        {
          items.map((item) => (
            <MenuItem
              key={`${item.id}`}
              value={item.id}
            >
              {item.name}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

const moneyField = (props: InputProps) => {
  const { name, value, onChange, label, ...other } = props;

  return (
    <CurrencyTextField
      {...other}
      type="text"
      label={label}
      id={name}
      name={name}
      variant="standard"
      rowsMax={1}
      value={value}
      currencySymbol="R$"
      // minimumValue="0"
      fullWidth
      outputFormat="number"
      decimalCharacter=","
      digitGroupSeparator="."
      onChange={(event, rawValue) => onChange({
        target: {
          id: name,
          name,
          value: rawValue
        }
      })}
    />
  );
};

const maskedField = (props: InputProps) => {
  const { mask, value, name, label, onChange, type, ...other } = props;

  return (
    <InputMask
      {...other}
      mask={mask}
      value={value}
      onChange={(event) => onChange(event)}
      disabled={false}
    >
      {() => (
        <TextField
          id={name}
          name={name}
          label={label}
          variant="standard"
          fullWidth
          type={type}
        />
      )}
    </InputMask>
  );
};

const InputCustom = (props: InputProps) => {
  const { name, label, value, onChange, items, mask, helperText, hasError = true, type = 'text', ...others } = props;

  return (
    <div className="field-wrapper">
      {type === 'select' && selectField(props)}

      {type === 'money' && moneyField(props)}

      {!['select', 'money'].includes(type) && mask && maskedField(props)}

      {!['select', 'money'].includes(type) && !mask && (
        <TextField
          {...others}
          helperText={helperText}
          id={name}
          name={name}
          label={label}
          variant="standard"
          fullWidth
          value={value}
          onChange={(event) => onChange(event)}
          type={type}
        />
      )}

      {hasError && (
        <ErrorMessage
          name={name}
          render={(msg) => <div className="error-message">{msg}</div>}
        />
      )}
    </div>
  );
};

export default InputCustom;
