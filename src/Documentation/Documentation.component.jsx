import React from 'react';
import { ShowReadMeContainer, DocContainer } from "./Documentation.module.scss";

const Documentation = () => {
  return (
    <div className={ShowReadMeContainer}>
      <div className={DocContainer}>
        <embed src="MOSAIC_README.pdf" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default Documentation;
