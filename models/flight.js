const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destSchema = new Schema ({
    airport: {
        type: String,
        enum: [
            'ATL',
            'AUS',
            'DFW',
            'DEN',
            'JAX',
            'LAX',
            'SAN'
        ]
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: [
            'American',
            'Delta',
            'Frontier',
            'Southwest',
            'Spirit',
            'United',
        ]
    },
    airport: {
        type: String,
        enum: [
            'ATL',
            'AUS',
            'DFW',
            'DEN',
            'JAX',
            'LAX',
            'SAN'
        ],
        default: 'JAX'
    },
    flightNo: { type: Number, 
        required: true,
        min: 10, 
        max: 9999 
    },
    departs: { type: Date },
    destination: [destSchema],
    tickets: [{
        type:Schema.Types.ObjectId,
        ref: 'Ticket'
    }]
})

module.exports = mongoose.model('Flight', flightSchema);