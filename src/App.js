import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { FaBookReader } from 'react-icons/fa';
import axios from "axios";
import { connect } from "react-redux";

import "./sass/main.scss";
import { SearchContainer, StudentsContainer, ReadMe, Text } from './App.module.scss';
import { lightTheme, darkTheme, GlobalStyles } from './Themes/Themes';
import { AppContainer, ContentsContainer, ToggleSwitch } from "./App.styles";

import NoResultView from './components/NoResultView/NoResultView.component';
import ResultItem from './components/ResultItem/ResultItem.component';
import CustomTextInput from "./components/CustomTextInput/CustomTextInput.component";
import Documentation from "./Documentation/Documentation.component";
import { toggleReadMe, setStudentsData } from "./redux/MosaicDataStorage/MosaicDataStorage.actions";
import AppTour from "./components/AppTour/AppTour.component";
import { searchFilter, TransformApiResultsToObject } from "./utilities/utilities";


const App = ({toggleReadMe, showReadMe, studentsData, setStudentsData}) => {
  const [theme, setTheme] = useState("light");
  const [isTourOpen, setIsTourOpen] = useState(true);
  const [studentsWithOpenTabs, setStudentsWithOpenTabs] = useState([]);
  const [searchValues, setSearchValues] = useState({ tag: "", name: "" });
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");

  const closeTour = () => setIsTourOpen(false)

  const toggleReadMeVisibility = () => toggleReadMe()

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSearchValues({...searchValues,
      [name] : value.trim()
    })
  }

  const addTagHandler = (e, id) => {
    e.preventDefault();
    const tag = e.target.elements.tagName.value.trim();
    const studentDataClone = Object.assign({}, studentsData)
    if (tag !== "") {
      if (studentDataClone[id].tags) {
        studentDataClone[id] = { ...studentDataClone[id], tags: [...studentDataClone[id].tags, tag] }
        setStudentsData(studentDataClone)
        e.target.elements.tagName.value = "";
      } else {
        studentDataClone[id] = { ...studentDataClone[id], tags: [tag] }
        setStudentsData(studentDataClone)
        e.target.elements.tagName.value = "";
      }
    }
  }

  const tabOpenToggler = (id, action) => {
    if (action === "open") {
      return setStudentsWithOpenTabs([...studentsWithOpenTabs, id])
    }
    else if (action === "close") {
      const modifiedArr = studentsWithOpenTabs.filter(e => e !== id);
      return setStudentsWithOpenTabs(modifiedArr)
    }
  }

  const toggleTheme = () => theme === "light" ? setTheme("dark") : setTheme("light")

  const fetchDataFromApi = (url) => {
    axios
      .get(url)
      .then((response) => {
        setStudentsData(TransformApiResultsToObject(response.data.students));
      })
      .catch((error) => {
        setStudentsData([]);
        setFetchErrorMessage("There was an error fetching data from the API, please check your internet connection or try again later");
        closeTour(false)
        console.error("Fetch function", error);
      })
  };

  useEffect(() => {
    (function() {
        try {
          fetchDataFromApi("https://api.hatchways.io/assessment/students")
        } catch (error) {
          console.error("useEffect",error);
        }
    })();
  }, []);

  const { name, tag } = searchValues;
  const results = Object.values(studentsData).filter(({ firstName, lastName, tags }) => searchFilter(firstName, lastName, tags, name, tag ));

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles isTourOpen={isTourOpen}/>
        <AppContainer data-tut="reactour__intro">
          <ToggleSwitch data-tut="reactour__toggleTheme" onClick={toggleTheme}>
            {theme === "light" ? <HiMoon size="2rem" /> : <CgSun size="2rem" />}
          </ToggleSwitch>
          {showReadMe && <Documentation/>}
          <div className={ReadMe} onClick={toggleReadMeVisibility}>
            <FaBookReader size="2rem"/>
            <p className={Text}>{showReadMe ? "Close Documentation" : "Read Documentation"}</p>
          </div>
          <ContentsContainer >
            <div className={SearchContainer} data-tut={"reactour__searchNameTag"}>
              <CustomTextInput
                name="name"
                onChange={onInputChange}
                value= {searchValues.name}
              />
              <CustomTextInput
                name="tag"
                onChange={onInputChange}
                value={searchValues.tag}
              />
            </div>
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
          </ContentsContainer>
        </AppContainer>
      </ThemeProvider>
      {isTourOpen && <AppTour/>}
      <span data-tut={"reactour__documentation"}></span>
    </React.Fragment >
  );
}

const mapStateToProps = ({ mosaic: { studentsData, showReadMe}}) => ({
  showReadMe,
  studentsData
})

const mapDispatchToProps = dispatch => ({
  toggleReadMe: () => dispatch(toggleReadMe()),
  setStudentsData : data => dispatch(setStudentsData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
