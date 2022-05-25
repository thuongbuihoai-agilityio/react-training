import axios from "axios";
import { TASK_MOCKING } from "../../../constants/task";
import "@testing-library/jest-dom"
import useTodo from "../useTodo";
import { TASK_URL } from "../../constants/url";

describe("fetchData", () => {
  test("fetches successfully data from an API", async () => {
    const data = TASK_MOCKING;
    // (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(data));
    await expect(useTodo()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(TASK_URL);
  });
})
