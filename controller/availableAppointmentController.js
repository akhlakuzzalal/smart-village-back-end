const { response } = require('express');
const AvailableAppointment = require('../schemas/AppointmentSchema/AvailableAppointment');

const handleSaveAppointment = async (req, res, next) => {
  try {
    const newAppointment = req.body;
    const response = await AvailableAppointment.insertMany(newAppointment);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleSaveAppointment,
};