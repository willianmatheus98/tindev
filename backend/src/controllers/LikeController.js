const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    console.log(loggedDev);
    console.log(targetDev);


    if(!targetDev){
        return res.status(400).json({error : 'Dev not exists'});
    }

    if (!loggedDev) {
      return res.status(400).json({ error: "Target Dev not exists" });
    }

    if(targetDev.likes.includes(loggedDev._id)){
        console.log('Deu match');
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};
