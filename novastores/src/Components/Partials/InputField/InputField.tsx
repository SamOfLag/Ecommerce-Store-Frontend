import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { InputFieldProps } from '../../../Utils/props.utils';

const InputField: React.FC<InputFieldProps> = ({
  controlId,
  type,
  name,
  label,
  placeholder,
  value,
  suffix,
  onChange,
  showPasswordToggle = false,
  onTogglePassword,
}) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>
        {label}
        {suffix && <span className="ms-2">{suffix}</span>}
      </Form.Label>

      <InputGroup>
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {showPasswordToggle && (
          <InputGroup.Text
            onClick={onTogglePassword}
            style={{ cursor: 'pointer', backgroundColor: 'white' }}
          >
            {type === 'password' ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputGroup.Text>
        )}
      </InputGroup>
    </Form.Group>
  );
};

export default InputField;
