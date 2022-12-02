const User = require('../models/users');

const getUsers = async (req, res) => {

    const users = await User.find({}, 'name email role google');

    res.status(200).json({
        ok: true,
        msg: 'Hola mundo',
        users
    });
};

const createUser = async (req, res) => {

    const { name, email, password } = req.body;
    const user = new User(name, email, password);

    await user.save();


    res.status(200).json({
        ok: true,
        msg: 'Hola mundo',
        user
    });
};



module.exports = {
    getUsers,
    createUser
};