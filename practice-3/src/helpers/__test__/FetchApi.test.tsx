import { PRODUCT_CONTENT } from "@/constants/product";
import { PRODUCTS_URL } from "@/constants/url";
import { create, remove, get, update } from "../fetchApi";
import mockAxios from "jest-mock-axios";

describe("fetch api", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("get product item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({data: PRODUCT_CONTENT});
    const result = await get(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_CONTENT);
  });

  test("add new product item should call", async () => {
    mockAxios.post.mockResolvedValueOnce(PRODUCT_CONTENT);
    const result = await create(PRODUCTS_URL, PRODUCT_CONTENT);
    expect(mockAxios.post).toHaveBeenCalledWith(PRODUCTS_URL, PRODUCT_CONTENT);
    expect(result).toEqual(PRODUCT_CONTENT);
  });

  test("update product item should call", async () => {
    const PRODUCT_URL_CALL = PRODUCTS_URL + "/1"
    mockAxios.put.mockResolvedValueOnce(PRODUCT_CONTENT);
    const result = await update(PRODUCT_URL_CALL, PRODUCT_CONTENT);
    expect(mockAxios.put).toHaveBeenCalledWith(PRODUCT_URL_CALL, PRODUCT_CONTENT);
    expect(result).toEqual(PRODUCT_CONTENT);
  });

  test("delete product item should call", async () => {
    const PRODUCT_URL_CALL = PRODUCTS_URL + "/1"
    mockAxios.delete.mockResolvedValueOnce(PRODUCT_CONTENT);
    const result = await remove(PRODUCT_URL_CALL);
    expect(mockAxios.delete).toHaveBeenCalledWith(PRODUCT_URL_CALL);
    expect(result).toEqual(PRODUCT_CONTENT);
  });
})