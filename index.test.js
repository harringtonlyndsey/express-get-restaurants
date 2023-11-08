const request = require("supertest");
const app = require("./src/app.js");
const { Restaurant } = require("./models");
const syncSeed = require("./seed.js");
let restQuantity;

beforeAll(async () => {
  await syncSeed();
  const restaurants = await Restaurant.findAll({});
  restQuantity = restaurant.length;
});

test("should return 200 on get", async () => {
  const response = await request(app).get("/restaurants");
  expect(response.statusCode).toEqual(200);
});

test("should return an array of restaurants", async () => {
  const response = await request(app).get("/restaurants");
  expect(Array.isArray(response.body)).toBe(true);
  expect(response.body[0]).toHaveProperty("cuisine");
});
