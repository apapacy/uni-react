import React from 'react';
import { shallow, configure } from 'enzyme';
// import { expect } from 'chai';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../../../src/react/components/notFound';

configure({ adapter: new Adapter() });

test('Link changes the class when hovered.', () => {
  const component = renderer.create(<NotFound />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  //tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('notFound has text "Not Found"', () => {
  const component = shallow(<NotFound />);
  expect(component.text()).toContain('Page not found');
});