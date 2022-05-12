import request from "supertest";

import { app } from "../../app";

describe("Number Controller", () => {
  it("should be able to get a number information", async () => {
    const response = await request(app).get('/numbers/getNumberInformation/45');

    expect(response.body).toEqual({
      dividerNumbers: [
        1,
        3,
        5,
        9,
        15,
        45
      ],
      primesNumber: [
        1,
        3,
        5
      ]
    })
  });

  it("should not be able get a number information for a string", async () => {
    const response = await request(app).get('/numbers/getNumberInformation/string');

    expect(response.status).toEqual(400);
  })
})