import { userRoutes } from "../routes/express-routes/user";

export const routes = [
  {endpoint: '/user', router: userRoutes},
]