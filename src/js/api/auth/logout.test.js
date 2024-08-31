import { logout } from './logout.js';
import { remove } from '../../storage/remove.js';

jest.mock('../../storage/remove.js', () => ({
  remove: jest.fn(),
}));

describe('Logout Functionality', () => {
  beforeEach(() => {
    remove.mockClear();
  });

  it('should remove the token and profile on logout', () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
