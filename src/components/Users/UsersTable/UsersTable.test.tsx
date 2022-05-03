import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { User } from '../../../interfaces/userInterface';
import { UsersTable } from './index';

const sampleUsers: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
  },
];

describe('Users Table Component', () => {
  it('it renders', () => {
    render(
      <MemoryRouter>
        <UsersTable users={sampleUsers} />
      </MemoryRouter>,
    );
    expect(screen.getByText(sampleUsers[0].name)).toBeInTheDocument();
    expect(screen.getByText(sampleUsers[0].username)).toBeInTheDocument();
  });

  it('it matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <UsersTable users={sampleUsers} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
