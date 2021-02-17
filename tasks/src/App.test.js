import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme';
import 'jest-enzyme';
import branch1 from '../public/api/branch1.json';
import branch2 from '../public/api/branch2.json';
import branch3 from '../public/api/branch3.json';
import App from './App';
import { ENV_HOST } from './services/utils/ENV';

configure({
  adapter: new Adapter(),
});

const responses = {
  [`${ENV_HOST.BASE_URL}/api/branch1.json`]: branch1,
  [`${ENV_HOST.BASE_URL}/api/branch2.json`]: branch2,
  [`${ENV_HOST.BASE_URL}/api/branch3.json`]: branch3,
};

global.fetch = (endpoint) => {
  return Promise.resolve({
    json: () => Promise.resolve(responses[endpoint]),
  });
};

// based on https://blog.pragmatists.com/genuine-guide-to-testing-react-redux-applications-6f3265c11f63
const flushAllPromises = () => new Promise((resolve) => setImmediate(resolve));

export const flushRequestsAndUpdate = async (enzymeWrapper) => {
  await flushAllPromises();
  enzymeWrapper.update();
};

describe('initial render', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });
  it('should render and take a snapshot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
  it('should render and take a snapshot with data', async () => {
    const component = shallow(<App />);
    await flushRequestsAndUpdate(component);
    expect(component).toMatchSnapshot();
  });
});
describe('handles loading data', () => {
  it('renders loading text initially', async () => {
    const app = mount(<App />);
    expect(app).toHaveText('Loading...');
  });

  it('renders a table after data load', async () => {
    const app = mount(<App />);
    expect(app).toHaveText('Loading...');
    await flushRequestsAndUpdate(app);
    expect(app.find('table')).toExist();
  });

  it('renders rows with product name as key', async () => {
    const app = mount(<App />);
    await flushRequestsAndUpdate(app);

    expect(app.find('table tbody tr').at(56).key()).toEqual('Hominy');
    expect(app.find('table tbody tr').at(73).key()).toEqual('Lychee');
  });
});

describe('data calculation', () => {
  it('calculates total revenue of all branches', async () => {
    const app = mount(<App />);
    await flushRequestsAndUpdate(app);
    expect(app.find('tfoot th:last-child').text()).toEqual('2,995,251.36');
  });

  it('filters and comes back with single product', async () => {
    const app = mount(<App />);
    await flushRequestsAndUpdate(app);
    const changeEvent = { target: { value: 'pears' } };
    app.find('input').simulate('change', changeEvent);
    expect(app.find('tfoot th:last-child').text()).toEqual('16,235.70');
  });
  it('filters and comes back with multiple products', async () => {
    const filteredData =
      '<tbody>' +
      '<tr><th>Coconuts</th><th>14,317.26</th>' +
      '</tr><tr><th>Collard Greens</th><th>28,314.60</th>' +
      '</tr><tr><th>Corn</th><th>14,001.36</th></tr>' +
      '</tbody>';
    const app = mount(<App />);
    await flushRequestsAndUpdate(app);
    const changeEvent = { target: { value: 'co' } };
    app.find('input').simulate('change', changeEvent);

    expect(app.find('table tbody').html()).toEqual(filteredData);
    expect(app.find('tfoot th:last-child').text()).toEqual('56,633.22');
  });
  it('it wont start filtering if only one character is provided', async () => {
    const app = mount(<App />);
    await flushRequestsAndUpdate(app);
    const changeEvent = { target: { value: 'c' } };
    app.find('input').simulate('change', changeEvent);
    expect(app.find('tfoot th:last-child').text()).toEqual('2,995,251.36');
  });
  it('when filters comes back with empty it keeps all records ', async () => {
    const app = mount(<App />);
    await flushRequestsAndUpdate(app);
    const changeEvent = { target: { value: 'not existint' } };
    app.find('input').simulate('change', changeEvent);
    expect(app.find('tfoot th:last-child').text()).toEqual('2,995,251.36');
  });
});

describe('sort data alphabetically', () => {
  it('should sort all data', async () => {
    const expectedData = ['Alfalfa Sprouts', '17,714.01', 'Apple', '18,943.11'];
    const app = mount(<App />);
    await flushRequestsAndUpdate(app);

    expectedData.forEach((th, index) => {
      const entry = app.find('table tbody tr th').at(index).text();
      expect(entry).toBe(th);
    });
  });
  it('should sort filtered data', async () => {
    const expectedData = [
      'Coconuts',
      '14,317.26',
      'Collard Greens',
      '28,314.60',
      'Corn',
      '14,001.36',
    ];
    const app = mount(<App />);
    await flushRequestsAndUpdate(app);
    const changeEvent = { target: { value: 'co' } };
    app.find('input').simulate('change', changeEvent);

    expectedData.forEach((th, index) => {
      const entry = app.find('table tbody tr th').at(index).text();
      expect(entry).toBe(th);
    });
  });
});
