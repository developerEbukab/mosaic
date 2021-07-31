import React, {useState} from 'react';
import { calculateAverage } from '../../utilities/utilities';
import { ResultItemContainer, Details, Header, Name, Icon, Infos, Tests, Value, Tags, Tag, SearchBar, TagInput } from './ResultItem.module.scss';
import {  ImPlus, ImMinus } from 'react-icons/im';

const ResultItem = ({city, company, email, firstName, grades, id, lastName, pic, skill, tags, studentsWithOpenTabs, tabOpenToggler, addTagHandler }) => {
  const [isGradesOpen, setIsGradesOpen] = useState(false)

  return (
    <div className={ResultItemContainer} key={id}>
      <img alt="Placeholder" src={pic} />
      <div className={Details}>
        <div className={Header}>
          <p className={Name}>{`${firstName} ${lastName}`.toUpperCase()}</p>
          <div data-tut="reactour__viewGrades">{isGradesOpen ?
            <ImMinus onClick={() => setIsGradesOpen(false)} className={Icon} size="2rem" />:
            <ImPlus onClick={() => setIsGradesOpen(true)} className={Icon} size="2rem" /> 
            }
          </div>
        </div>
        <div className={Infos}>
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p data-tut="reactour__gradeAverage">Average: {calculateAverage(grades)}%</p>
        </div>
        <div className={Tests}>
          {isGradesOpen &&
            grades.map((grade, index) => <p key={index}>Test {index + 1}: <span className={Value}>{grade}%</span></p>)}
        </div>
        {tags &&
          <div data-tut="reactour__tagBox" className={Tags}>
            {tags.map((tag, index) => <p key={ index} className={Tag}>{tag}</p>)}
          </div>
        }
        <form className={SearchBar} onSubmit={(e)=> addTagHandler(e, id)}>
          <input data-tut="reactour__tagInput" className={TagInput} type="text" name="tagName" placeholder="Add a tag" style={{fontSize: "1.2rem"}}/>
        </form>
      </div>
    </div>
  );
}

export default ResultItem;
