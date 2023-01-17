import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

configure({ adapter: new Adapter() });
import Login, { LoginFunction } from '@/components/Login';

describe('Login component', () => {
  let wrapper: any;
  let handleLoginMock: any;
  const props: LoginFunction = { handleLogin: handleLoginMock };

  beforeEach(() => {
    handleLoginMock = jest.fn();
    props.handleLogin = handleLoginMock;
    wrapper = shallow(<Login {...props} />);
  });

  it('calls handleLogin function when form is submitted', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(handleLoginMock).toHaveBeenCalledWith({ username: '', password: '' });
  });

  it('updates loginObject state when input value changes', () => {
    wrapper.find('input[name="username"]').simulate('change', {
      target: { name: 'username', value: 'test' },
    });
    expect(wrapper.state('loginObject')).toEqual({
      username: 'test',
      password: '',
    });
  });
});
