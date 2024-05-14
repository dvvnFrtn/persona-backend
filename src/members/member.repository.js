const db = require('../db/prisma.db')

const findAll = async () => {
    try {
        return await db.prisma.member.findMany({
            select: {
                id: true,
                name: true,
                role: true,
                picture: true
            }
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const findById = async (id) => {
    try {
        return await db.prisma.member.findFirst({
            where: { id: id },
            select: {
                id: true,
                name: true,
                role: true,
                age: true,
                about: true,
                picture: true,
                skills: { select: { skill: true }},
                interest: { select: { interest: true }}
            },
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    findAll,
    findById
}
