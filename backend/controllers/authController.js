const User = require('./models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new user (admin or employee)
exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email});
        if(existingUser) {
            return res.status(400).json({ message: "User already exists"});
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = new User({ name, email, password, hashedPassword, role });
        await user.save();

        res.status(201).json({ message: "User registered successfully"});
    } catch(error) {
        console.log("Registr error:", error);
        res.status(500).json({ message: "Server error "});
    }
};


// Login user (admin or employee)
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // find user
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: "Invalid credentials"});
        }

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: "Invalid credentials"});
        }

        // create JWT
        const token = jwt.sign({
            userId: user._id,
            role: user.role
        }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // respond with token and user info
        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch(error) {
        console.log("Login error:", error);
        res.status(500).json({ message: "Server error "});
    }
};