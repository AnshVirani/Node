const zod =require('zod');

const UserSchemaValidation = zod.object({
    body:zod.object({
        name:zod.string().max(20),
        email:zod.string().email(),
        password:zod.string().min(4),
        age:zod.number().positive().int(),
        isActive:zod.boolean()
    }).strict()
})
module.exports = UserSchemaValidation;