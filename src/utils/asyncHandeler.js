const asyncHandeler = (requestHendaler) => () => {
    (req, res, next) => {
        Promise.resolve(
            requestHendaler(req, res, next)
        ).catch((err) => next(err))
    }
}

export {asyncHandeler}

/*
const asyncHandeler = async () => {}

const asyncHandeler = (func) => {
    return () => {}
}

const asyncHandeler = (func) => {() => {}}

const asyncHandeler = (func) => () => {}
*/

// const asyncHandeler = (fu) => async (req, res, next) => {
//     try {
//         await fu(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             sucess: false,
//             message: error.message
//         })
//     }
// }