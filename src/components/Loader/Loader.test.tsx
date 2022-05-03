import renderer from 'react-test-renderer';
import { Loader } from './index';

describe('Loader Component', () => {
  it('it matches snapshot', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
