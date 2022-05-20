import { useCallback } from "react";
import useSWR from "swr";
import { TASK_URL } from "../constants/url";
import { get } from "../helpers/fetchApi";

interface TodoType {
  id: string,
  title: string
}
export default function useTodo() {
  const fetcher = useCallback((url: string) => get(url), []);

  const { data, error } = useSWR(TASK_URL, fetcher);
  console.log("data", data)

}