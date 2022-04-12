import { validateRoute } from "../../lib/auth";

const handler = (req, res, user) => {
  res.json(user);
};

export default validateRoute(handler);
