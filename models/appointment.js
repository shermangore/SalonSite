//I don't know why i did this file.
module.exports = function (sequelize, DataTypes) {
    var Appointment = sequelize.define("Appointment", {
        staff_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer_lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Appointment;
}