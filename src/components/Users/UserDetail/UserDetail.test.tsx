import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { UserDetail } from './index';

describe('User Detail Component', () => {
  it('it renders', () => {
    render(<UserDetail label="Test Label" value="Test Value" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Value')).toBeInTheDocument();
  });

  it('it matches snapshot', () => {
    const tree = renderer
      .create(<UserDetail label="Test Label" value="Test Value" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
