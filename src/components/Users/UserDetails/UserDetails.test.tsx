import renderer from 'react-test-renderer';
import { User } from '../../../interfaces/detailedUserInterface';
import { UserDetails } from './index';

const sampleUser: User = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  phone: '1-770-736-8031 x56442',
};

describe('User Details Component', () => {
  it('it matches snapshot', () => {
    const tree = renderer.create(<UserDetails user={sampleUser} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
