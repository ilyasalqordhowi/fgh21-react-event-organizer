import { categories } from "./categories";
import { event } from "./events";

export const services = {
  [event.reducerPath]: event.reducer,
  [categories.reducerPath]: categories.reducer,
};

export const rtkMiddlewares = [event.middleware, categories.middleware];
