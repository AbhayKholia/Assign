import jwt from "jsonwebtoken";


export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRETE, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.userId = decoded.userId;
    next();
  });
};