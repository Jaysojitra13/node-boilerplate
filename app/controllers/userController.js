const userModel = require(path.join(basePath, 'app/models/userModel.js'));

exports.createUser = (req, res) => {
    const user = new userModel(req.body);
    user.save()
        .then(data => {
            res.status(200).json({ message: "user Created", data: data});
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || err
            });
        })
};