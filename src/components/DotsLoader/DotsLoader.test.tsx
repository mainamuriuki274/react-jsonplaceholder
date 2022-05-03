import renderer from 'react-test-renderer';
import DotsLoader from './DotsLoader';

describe('Dots Loader Component', () => {
  it('it matches snapshot', () => {
    const tree = renderer.create(<DotsLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
