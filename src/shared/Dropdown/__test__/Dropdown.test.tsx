import React from "react"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme"
import { Dropdown } from "../Dropdown"

configure({ adapter: new Adapter() });

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown children={<div />} buttonOpen={undefined} buttonClose={<button />}/>);
    expect(wrapper).toBeDefined();
    // console.log(wrapper.find('div.container').debug());
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })
  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} buttonOpen={undefined} buttonClose={<button />}/>);
    expect(wrapper).toMatchSnapshot()
  })
})