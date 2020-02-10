// model
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, "Description is required"],
    },
    comment: {
        type: String,
        default: "",
        required: true,
        minlength: [3, 'Comment must be at least three characters.'],
        maxlength: [50, 'Comment must be under fifty characters']
    }

    // don't forget custom error messages
}, {
    timestamps: true,
    default: Date.now,
});

const DrawersSchema = new mongoose.Schema({
    // properties go here
    user: {
        type: String,
        default: "",
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be at least two characters'],
        maxlength: [20, 'Name must be under twenty characters']
    },
    image: {
        type: String,
        default: "",
        required: [true, "Image is required and must be url"],
    },
    reviews: [ReviewSchema]
}, {
    timestamps: true,
    default: Date.now,
});


    


mongoose.model('Drawers', DrawersSchema);
mongoose.model('Review', ReviewSchema);