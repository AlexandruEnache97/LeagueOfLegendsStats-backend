const serverConfig = require('../config/config')
const cors = require('cors')
const fetch = require("node-fetch");

module.exports = (app) => {

    app.use(cors());

    app.get(`${serverConfig.BASE_URL}/getUser/:username`, cors(), async (req, res) => {
        const response = await fetch(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.username}?api_key=RGAPI-4122ada6-4034-4633-9a37-4e48af3db69c`, cors())
        const data = await response.json();

        res.status(200).json(data);
    });
}