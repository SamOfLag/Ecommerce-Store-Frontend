import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { InputFieldProps } from '../../../Utils/props.utils';


const InputField: React.FC<InputFieldProps> = ({
  controlId,
  type,
  label,
  placeholder,
  value,
  onChange,
  showPasswordToggle = false,
  onTogglePassword,
}) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {showPasswordToggle && (
          <InputGroup.Text
            onClick={onTogglePassword}
            style={{ cursor: 'pointer' }}
          >
            {type === 'password' ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputGroup.Text>
        )}
      </InputGroup>
    </Form.Group>
  );
};

export default InputField;
