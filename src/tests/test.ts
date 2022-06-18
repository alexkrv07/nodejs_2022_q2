import { PATH_USERS } from '../constants/pathes';
import request from "supertest";
import 'dotenv/config';
const PORT = process.env.PORT;
const URL = `http://localhost:${PORT}`;

const TEST_USER_DATA = {
  "username": "Alex",
   "age": 18,
   "hobbies": ["HTML", "CSS"]
};

describe('Test Simple CRUD API', () => {
  it('should get all users', async () => {
    const usersResponse = await request(URL)
      .get(PATH_USERS);
    expect(usersResponse.statusCode).toEqual(200);
    expect(Array.isArray(usersResponse.body)).toBe(true);
  });

  it('should get a user by id', async () => {
    // Setup:
    let userId;

    // Create the user
    await request(URL)
      .post(PATH_USERS)
      .set('Accept', 'application/json')
      .send(TEST_USER_DATA)
      .expect(201)
      .expect('Content-Type', /json/)
      .then(res => {
        userId = res.body.id;
      });

    // Test:
    const userResponse = await request(URL)
      .get(`${PATH_USERS}/${userId}`)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);

      // expect(userResponse.body).toBe.instanceOf(Object);
      expect(userResponse.body.id).toEqual(userId);
      expect(userResponse.body.username).toEqual(TEST_USER_DATA.username);
      expect(userResponse.body.age).toEqual(TEST_USER_DATA.age);
      expect(userResponse.body.hobbies).toEqual(TEST_USER_DATA.hobbies);
      // Clean up, delete the user we created
      await request(URL).delete((`${PATH_USERS}/${userId}`));
  });

  it('should create user successfully', async () => {
    let userId;

    await request(URL)
      .post(PATH_USERS)
       .set('Accept', 'application/json')
      .send(TEST_USER_DATA)
      .expect(201)
      .expect('Content-Type', /json/)
      .then(userResponse => {
        userId = userResponse.body.id;
        expect(userResponse.body.username).toEqual(TEST_USER_DATA.username);
        expect(userResponse.body.age).toEqual(TEST_USER_DATA.age);
        expect(userResponse.body.hobbies).toEqual(TEST_USER_DATA.hobbies);
      });

    // Teardown
    await request(URL).delete((`${PATH_USERS}/${userId}`));
  });
});
