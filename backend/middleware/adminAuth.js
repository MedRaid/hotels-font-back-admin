import jwt from "jsonwebtoken";

// @ts-ignore
const adminAuth = async (req, res) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Not authorized" });
    }
    // @ts-ignore
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    // @ts-ignore
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PWD) {
      return res.json({ success: false, message: "Not authorized" });
    }
  } catch (error) {
    return res.json({ success: false, message: "Auth not successful" });
  }
};

export default adminAuth;
