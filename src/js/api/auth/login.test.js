// import { login } from "./login.js";
// import { save } from "../../storage/save.js";

global.fetch = jest.fn();
jest.mock('../../storage/save.js', () => ({
  save: jest.fn(),
}));
