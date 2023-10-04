const useRouter = require("../routes/index").router

const handler = (req, res) =>{
    useRouter(req, res)
}

module.exports = handler;

