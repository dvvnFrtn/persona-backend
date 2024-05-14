const memberRepository = require('../members/member.repository');

const getAllMember = async (req, res) => {
    try {
        const data = await memberRepository.findAll();
        res.status(200).json({
            status: 'success',
            data: data
        });
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: 'Oops something went wrong!'
        });
    }
}

const getMemberById = async (req, res) => {
    const idMember = parseInt(req.params.id);
    try {
        const data = await memberRepository.findById(idMember);
        res.status(200).json({
            status: 'success',
            data: data
        });
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: 'Oops something went wrong!'
        });
    }
}

module.exports = {
    getAllMember,
    getMemberById
}
