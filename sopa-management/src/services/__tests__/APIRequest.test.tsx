// Mocks
import mockAxios from "jest-mock-axios";
import { MOCK_PRODUCTS } from "@mocks/product";

// Services
import { getData } from "@services/APIRequest";

// Constants
import { PRODUCT_URL } from "@constants/url";

describe("fetch api", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("get product item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: MOCK_PRODUCTS });
    const result = await getData(PRODUCT_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(`${PRODUCT_URL}?limit=6&page=1`);
    expect(result).toEqual(MOCK_PRODUCTS);
  });
});
