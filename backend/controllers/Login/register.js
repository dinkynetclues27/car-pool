const { QueryTypes } = require("sequelize");
const sequelize = require("../../database");
const  bcrypt = require('bcrypt')
const registerAdmin = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const existingAdmin = await sequelize.query(`SELECT * FROM login WHERE email = '${email}' AND user_type = 'admin'`, {
        type: QueryTypes.SELECT
    });

    if (existingAdmin.length > 0) {
        return res.status(400).json({ error: "Admin with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await sequelize.query(`INSERT INTO login (email, password, user_type) VALUES ('${email}', '${hashedPassword}', 'admin')`, {
        type: QueryTypes.INSERT,
    });

    res.status(200).json({ message: "Admin added successfully" });
};


const registerCarPooler= async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const existingCustomer = await sequelize.query(`SELECT * FROM login WHERE email = '${email}' AND user_type = 'carpooler'`, {
        type: QueryTypes.SELECT
    });

    if (existingCustomer.length > 0) {
        return res.status(400).json({ error: "Car Pooler with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await sequelize.query(`INSERT INTO login (email, password, user_type) VALUES ('${email}', '${hashedPassword}', 'carpooler')`, {
        type: QueryTypes.INSERT,
    });

    res.status(200).json({ message: "Car Pooler  added successfully" });
};

const registerPassenger= async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const existingCustomer = await sequelize.query(`SELECT * FROM login WHERE email = '${email}' AND user_type = 'passenger'`, {
        type: QueryTypes.SELECT
    });

    if (existingCustomer.length > 0) {
        return res.status(400).json({ error: "Passenger with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await sequelize.query(`INSERT INTO login (email, password, user_type) VALUES ('${email}', '${hashedPassword}', 'passenger')`, {
        type: QueryTypes.INSERT,
    });

    res.status(200).json({ message: "Passenger added successfully" });
};

module.exports = {
    registerAdmin,
    registerCarPooler,
    registerPassenger
};