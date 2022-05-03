import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { HomeCard } from './index';

describe('Home Card Component', () => {
  it('it renders', () => {
    render(
      <MemoryRouter>
        <HomeCard link="/" title="Test Title" description="Test description" />
      </MemoryRouter>,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
  it('it matches snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <HomeCard
            link="/"
            title="Test Title"
            description="Test description"
          />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
