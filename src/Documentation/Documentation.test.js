
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Documentation from "./Documentation.component";

configure({adapter: new Adapter()})

describe("<NoResult/>", () => {
  it("This component should return an embedded pdf document describing my assessment project", () => {
    const wrapper = shallow(<Documentation />);
    expect(wrapper.find("embed")).toHaveLength(1)
  })
})