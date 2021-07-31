
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CustomTextInput, { CustomInput } from "./CustomTextInput.component";

configure({adapter: new Adapter()})

describe("<NoResult/>", () => {
  it("This component should return an embedded pdf document describing my assessment project", () => {
    const wrapper = shallow(<CustomTextInput value ="value" onChange = {() => console.log("Just Testing")} name ="test name"/>);
    expect(wrapper.find(<CustomInput />));
  })
})