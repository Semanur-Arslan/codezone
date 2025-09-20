import axios from "axios";
import { TrendItem } from "./types/types";


export const getTrends = async (): Promise<TrendItem[]> => {
  try {
    const res = await axios.get("https://dummyjson.com/c/a7c4-016a-47aa-8241");
    return res.data as TrendItem[];
  } catch (err) {
    console.error("Trend fetch hatası:", err);
    return [];
  }
};
