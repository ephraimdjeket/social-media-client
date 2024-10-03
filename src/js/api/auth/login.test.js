/* eslint-env jest */
/* eslint-disable no-undef */

import { apiPath } from "../constants.js";
import { save } from "../../storage/index.js";
import { login } from "./login.js";

// Mock data
const mockName = "fakeusertest";
const mockEmail = "fakeusertest@stud.noroff.no";
const mockBanner = "string";
const mockAvatar = "string";
const mockPassword = "hahaha12345678";

// Mock fetch
global.fetch = jest.fn((url, options) => {
  if (
    url ===
      `
        
        
        
        
        ${apiPath}/social/auth/login` &&
    options.method === "post"
  ) {
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          name: mockName,
          email: mockEmail,
          banner: mockBanner,
          avatar: mockAvatar,
          accessToken: "mockToken",
        }),
    });
  }

  return Promise.resolve({
    ok: false,
    statusText: "Unauthorized",
  });
});

// Mock of the localstorage function
jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  remove: jest.fn(),
  load: jest.fn(() => "mockToken"),
}));

describe("login function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should log in successfully and save token/profile", async () => {
    const profile = await login(mockEmail, mockPassword);

    expect(profile).toEqual({
      name: mockName,
      email: mockEmail,
      banner: mockBanner,
      avatar: mockAvatar,
    });

    expect(save).toHaveBeenCalledWith("token", "mockToken");

    expect(save).toHaveBeenCalledWith("profile", {
      name: mockName,
      email: mockEmail,
      banner: mockBanner,
      avatar: mockAvatar,
    });
  });
});
