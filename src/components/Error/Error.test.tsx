import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Error } from './index';

describe('Error Component', () => {
  it('it renders', () => {
    render(<Error />);
    expect(
      screen.getByText(
        'Unfortunately an error occured while fetching the resource',
      ),
    ).toBeInTheDocument();
  });
  it('it matches snapshot', () => {
    const tree = renderer.create(<Error />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
