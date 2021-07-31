import React from 'react'

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NoResultView from './NoResultView.component';

configure({adapter: new Adapter()})

describe("<NoResult/>", () => {
  it("This component should take 2 error messages, errorMessage is for no search result, fetchErrorMessage is from the API, it should show the API error if it exist , otherwise it should show the no result error ", () => {
    const wrapper = shallow(<NoResultView />);
    expect(wrapper.find("p")).toHaveLength(1)
  })
})