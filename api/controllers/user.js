import User from "../models/Users.js"

//updateUser
export const updateUser = async (req, res, next) => {
    const User = new User(req.body)
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

//deleteUser
export const deleteUser = async (req, res, next) => {
    try {
        const User = await User.findById(req.params.id)
        res.status(200).json("hotel has been deleted")
    } catch (err) {
        next(err)
    }
}

//getUser
export const getUser = async (req, res, next) => {
    try {
        const getUser = await Hotel.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (err) {
        next(err)
    }
}

//getAllUser
export const getAllUser = async (req, res, next) => {
    // const failed = true;
    // if (failed) return next(createError(401, "authentication failed"))
    try {
        const getAllUser = await User.find()
        res.status(200).json(getAllUser)
    } catch (err) {
        next(err)
    }
}
