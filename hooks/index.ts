import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";

// useAppDispatch untuk mengubah state
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// useAppSelector untuk memilih state
export const useAppSelector = useSelector.withTypes<RootState>();