import React from 'react';
import {SearchInput} from "./CustomTextInput.styles.scss";

import styled from 'styled-components';

export const CustomInput = styled.input`
  font-size: 1.4rem;
  width: 100%;
  padding-bottom: .5rem;
  border-bottom: 1px solid var(--grey-color);
  height: 50%;
  color: inherit;

  &:focus{
    border-bottom: 1px solid #0A0A0A;
  }
`;


const CustomTextInput = ({value, onChange, name}) => 
    <CustomInput
      className={SearchInput}
      type="text"
      name={name}
      placeholder= {`Search by ${name}`}
      onChange={onChange}
      value= {value}
    />

export default CustomTextInput;
