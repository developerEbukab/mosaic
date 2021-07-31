import React from 'react';
import {StudentsContainer} from "./DisplayStudents"
import NoResultView from '../NoResultView/NoResultView.component';
import ResultItem from '../ResultItem/ResultItem.component';

const DisplayStudentsData = () => {
  return (
    <div className={StudentsContainer} data-tut="reactour__results">
      {results.length > 0 ?
        results.map(({id, ...otherResultsProps }) => {
          return (
            <ResultItem key={id} id={id}  {...otherResultsProps} studentsWithOpenTabs={studentsWithOpenTabs} tabOpenToggler={tabOpenToggler} addTagHandler={addTagHandler} />
          )
        }) :
        <NoResultView errorMessage="No result(s) to show" fetchErrorMessage={fetchErrorMessage}/>
      }
    </div>
  );
}

export default DisplayStudentsData;
