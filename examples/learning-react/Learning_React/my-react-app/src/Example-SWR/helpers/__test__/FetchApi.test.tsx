import axios from "axios";
import { TASK_MOCKING } from "../../constants/task";
import { TASK_URL } from "../../constants/url";
import { createItem } from "../fetchApi";
import mockAxios from "jest-mock-axios";

describe("fetch api", () => {
  afterEach(() => {
    mockAxios.reset();
  });
  it("add new todo item should call ", async () => {
    mockAxios.post.mockResolvedValueOnce(TASK_MOCKING);
    const result = await createItem({
      id: "",
      title: ""
    });
    expect(mockAxios.post).toHaveBeenCalledWith(TASK_URL);
    expect(result).toEqual(TASK_MOCKING);
  });
})