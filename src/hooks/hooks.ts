import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RootState, appDispatch } from "src/store/store";

const appUseSelector: TypedUseSelectorHook<RootState> = useSelector;
const appUseDispatch = () => useDispatch<appDispatch>();

export { appUseSelector, appUseDispatch };
