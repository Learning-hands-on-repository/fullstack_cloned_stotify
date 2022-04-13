import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

const handler = async (req, res, user) => {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
  });

  res.json(playlists);
};

export default validateRoute(handler);
