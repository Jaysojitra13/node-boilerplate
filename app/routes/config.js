const express = require('express');

const router = express.Router();

router.use(path.join('/user'), require(path.join(basePath, 'app/routes/userRoute')));

router.all('/*', (req, res) => {
    return res.status(500).json({
        error: "Invalid request",
      });
})
module.exports = router;
