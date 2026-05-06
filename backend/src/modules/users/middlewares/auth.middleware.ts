import jwt from "jsonwebtoken"

const authMiddleware = (req: any, res: any, next: () => void) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "TOKEN_NOT_PROVIDED" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    req.user = decoded

    next();
  } catch {
    return res.status(401).json({ message: "INVALID_OR_EXPIRED_TOKEN" });
  }
};

export default authMiddleware;