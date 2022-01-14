
module.exports = (req, res) => {
    return res.status(201).send({
        param:req.params.some_param
    })
}