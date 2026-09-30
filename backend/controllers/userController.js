import jwt from "jsonwebtoken";
// @ts-ignore
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PWD
    ) {
      // @ts-ignore
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid user credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error login in admin" });
  }
};

export default adminLogin;
