import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { NavBar } from './index';

describe('NavBar Component', () => {
  it('it renders', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });
  it('it matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
