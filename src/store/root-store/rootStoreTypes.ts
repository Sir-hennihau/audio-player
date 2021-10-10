import { rootStore } from "./rootStore";

export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;
