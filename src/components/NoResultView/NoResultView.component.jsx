import React from 'react';
import { FaRegMehBlank } from 'react-icons/fa';
import {NoResultViewContainer, ErrorText } from "./NoResultView.module.scss";

const NoResultView = ({errorMessage, fetchErrorMessage}) => {
  return (
    <div className={NoResultViewContainer}>
      <FaRegMehBlank size="5rem"/>
      <p className={ErrorText}>{fetchErrorMessage ? fetchErrorMessage : errorMessage}</p>
    </div>
  );
}

export default NoResultView;
