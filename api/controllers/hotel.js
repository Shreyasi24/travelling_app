import Hotel from "../models/Hotel.js"
//createHotel
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}

//updateHotel
export const updateHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}

//deleteHotel
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findById(req.params.id)
        res.status(200).json("hotel has been deleted")
    } catch (err) {
        next(err)
    }
}

//getHotel
export const getHotel = async (req, res, next) => {
    try {
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (err) {
        next(err)
    }
}

//getAllHotels
export const getAllHotels = async (req, res, next) => {
    // const { min, max, ...others } = req.query
    // const { ...others } = req.query
    const { limit, ...others } = req.query
    try {
        // const getAllHotel = await Hotel.find({ ...others, cheapestPrice: { $gt: min || 1, $lt: max || 999 } }).limit(req.query.limit)
        const getAllHotel = await Hotel.find({ ...others }).limit(limit)
        console.log(getAllHotel, 'getttt')
        // const getAllHotel = await Hotel.find().limit(req.query.limit)
        res.status(200).json(getAllHotel)
    } catch (err) {
        next(err)
    }
}
//countByCity
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map((city => {
            return Hotel.countDocuments({ city: city })
        })))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}
//countByType
export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" })
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" })
        const villaCount = await Hotel.countDocuments({ type: "villa" })
        const cabinCount = await Hotel.countDocuments({ type: "cabin" })
        const resortCount = await Hotel.countDocuments({ type: "resort" })
        res.status(200).json([{ type: "hotel", count: hotelCount },
        { type: "apartment", count: apartmentCount },
        { type: "villa", count: villaCount },
        { type: "cabin", count: cabinCount },
        { type: "resort", count: resortCount },
        ])
    } catch (err) {
        next(err)
    }
}