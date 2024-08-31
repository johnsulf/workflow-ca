import { login } from './login.js';
import { save } from '../../storage/save.js';

global.fetch = jest.fn();
jest.mock('../../storage/save.js', () => ({
  save: jest.fn(),
}));

describe('Login Functionality', () => {
  beforeEach(() => {
    fetch.mockClear();
    save.mockClear();
  });

  // Test case for successful login
  it('should save the token and profile when login is successful', async () => {
    const mockResponseData = {
      accessToken: 'mockAccessToken',
      id: 'ej1234',
      name: 'Erlend Johnsen',
    };

    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockResponseData,
    });

    const email = 'ej@stud.noroff.no';
    const password = '12345678';
    const profile = await login(email, password);

    expect(save).toHaveBeenCalledWith('token', 'mockAccessToken');
    expect(save).toHaveBeenCalledWith('profile', {
      id: 'ej1234',
      name: 'Erlend Johnsen',
    });
    expect(profile).toEqual({ id: 'ej1234', name: 'Erlend Johnsen' });
  });

  // Test case for failed login
  it('should throw an error on failed login', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized',
    });

    const email = 'ej@gmail.com';
    const password = '123456';
    await expect(login(email, password)).rejects.toThrow('Unauthorized');

    expect(save).not.toHaveBeenCalled();
  });
});
