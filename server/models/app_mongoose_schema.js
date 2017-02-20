"use strict";

// load the things we need
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * Define the schema for hotel model
 * type {Schema}
 */

var hotelSchema = new Schema({
    _id: String,
    address: {
        city: String,
        street: String,
        zip: String
    },
    gps_location: String,
    picture_path: String
});






mongoose.connect("mongodb://localhost/db_libros");
// http://mongoosejs.com/docs/guide.html
// definicion del esquema
var Schema = mongoose.Schema;

// definición del ESQUEMA DEL HOTEL
var HotelSchema = new Schema({
    _id: String,
    address: {
        city: String,
        street: String,
        zip: String
    },
    gps_location: String,
    picture_path: String
});
// definición del ESQUEMA DE HABITACIONES
// TODO revisar el _id. No puede ser el numero de la habitación, pues se repetiría para distintos hoteles. Quizás debería ser compuesto hotel_id + room number
var RoomSchema = new Schema({
    _id: Number,
    hotel_id: String,
    type: String
});

var CustomerSchema = new Schema({
    _id: String,
    first: String,
    last: String,
    email: String,
    phone: String,
    birthdate: Date
});

var ServiceSchema = new Schema({
    _id: String,
    description: String,
    rate: {
        hight: Number,
        low: Number
    }
});

var BookingSchema = new Schema({
    _id: String,
    hotel_id: String,
    hotel_address: String,
    customer_id: String,
    customer_first: String,
    customer_last: String,
    customer_last: String,
    checkin_date: Date,
    checkout_date: Date,
    season: String,
    ocupancy: [{
            room_id: String,

        }

    ]

});

LibroSchema.add({ estado: String });

var Libro = mongoose.model("Libro", LibroSchema); //function model<Document>(name: string, schema?: Schema, collection?: string, skipInit?: boolean): Model<Document> (+1 overload)

var lotr = new Libro({
    titulo: "Lord of the rings 2",
    // estado: "Algo",
    campos_biblioteca: {
        ultima_reserva: new Date()
    }
});
// Guardo:
lotr.save((error) => {
        if (error) {
            console.error("Error al guardar: ", error);
        } else {
            console.log("Salvado con id: " + lotr._id);
            Libro.find((error, data) => {
                console.log(data);
            });
        }
    })
    // Listo:
Libro.find((error, data) => {
    console.log(data);
});