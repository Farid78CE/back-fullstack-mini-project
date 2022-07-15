const Model = require("../models/peopleModel.js");

const getPeople = async (req, res) => {
    try{
        const data  = await Model.find();
        res.status(201).json({"success": true, "data": data});
    }
    catch(error){
        res.status(500).json({"success": false, "message": error.message});
    }
};

const getPerson = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await Model.findById(id);
        res.status(200).json({"success": true, "data":data});
    }catch(error){
        res.status(500).json({"success": false, "message":error.message});
    }
}

const addPerson = async (req, res) => {
    const {name, lastName, age } = req.body;
    const data = new Model(
        {
            "name": name,
            "lastName": lastName,
            "age": age
        });
    try
    {
        const dataToSave = await data.save();
        res.status(201).json({"success": true, "data": dataToSave});
    }
    catch(error){
        res.status(500).json({"success": false, "message" : error.message});
    }
}

const deletePerson = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json({"success":true, "data":data});
    }catch(error){
        res.status(500).json({"success":false, "message": error.message});
    }
}

const updatePerson = async (req, res) => {
    const id = req.params.id;
    const updatedData  = req.body;
    const options = {"new":true};
    try {
        const data = await Model.findByIdAndUpdate(id, updatedData, options);
        res.status(200).json({"success":true, "data":data});
    }catch(error){
        res.status(500).json({"success":false, "message": error.message});
    }
}


module.exports = {getPeople, getPerson, addPerson, deletePerson, updatePerson}