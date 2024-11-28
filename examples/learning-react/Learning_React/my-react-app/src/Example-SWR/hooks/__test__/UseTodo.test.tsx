import axios from "axios";
import { TASK_MOCKING } from "../../constants/task";
import "@testing-library/jest-dom"
import { TASK_URL } from "../../constants/url";
import useTodo from "../useTodo";

const {addTodo} = useTodo()
describe("fetchData", () => {
  // test("fetches successfully data from an API", async () => {
  //   const data = TASK_MOCKING;
  //   // (axios.get as jest.Mock).mockImplementation((url: string) => {
  //   //   if (url === TASK_URL) {
  //   //       return Promise.resolve({ data: data });
  //   //   } else {
  //   //       const errorMessage = "Network Error";
  //   //       (axios.get as jest.Mock).mockImplementationOnce(() =>
  //   //       Promise.reject(new Error(errorMessage)),
  //   //     );
  //   //   }
  //   // });
  //   (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(data));
  // });

  jest.mock("axios")
  it("add new todo when use post api", async () => {
    // given
    const data = TASK_MOCKING;
    (axios.post as jest.Mock).mockImplementationOnce(() => Promise.resolve(data));

    expect(axios.get).toHaveBeenCalledWith(TASK_URL);
    expect(addTodo).toEqual(data);
  })

})
