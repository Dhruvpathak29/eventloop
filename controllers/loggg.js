const regitration = require('../models/regitration');

exports.regii = async(req,res)=>{
   try {
    const { name, email, password } = req.body;

    
    const existingUser = await regitration.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }


    const salt = await bcrypt.genSalt(10);
    const Password = await bcrypt.hash(password, salt);

    
    const user = new regitration({
      name,
      email,
      password: Password
    });

    await user.save();

    res.json({ msg: "User registered successfully" })}
    catch(err)
    {
        req.status(err).json({erro:'data not a store'});
    }
}



exports.login = async(req,res)=> {

  try {
    const { email, password } = req.body;

    const gll = await regitration.findOne({ email });

    if (!gll) {
      return res.send("User not found");
    }

    if (gll.password !== password) {
      return res.send("Wrong password");
    }

    res.send("Login Successful");

  } catch (err) {
    res.status(500).send("Server Error");
  }

};