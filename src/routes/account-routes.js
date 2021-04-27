const serverConfig = require('../config/config')
const cors = require('cors')
const fetch = require("node-fetch");

module.exports = (app) => {

    app.use(cors());

    app.get(`${serverConfig.BASE_URL}/getUser/:username`, cors(), async (req, res) => {
        const response = await fetch(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.username}?api_key=RGAPI-02bb9f9c-79c5-4a78-8127-af022712aa0f`, cors())
        const data = await response.json();

        res.status(200).json(data);
    });
}