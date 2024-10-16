
import bcrypt from 'bcrypt';

const handleNewUser = async (req, res) => {
    const { username , password } = req.body;
    if(!username || !password) return res.status(400).json({ message: "Username and password required" });

    const duplicate = false;
    if(duplicate) return res.status(409).json({ message: "Username already exists" });

    try{
        const hashedPassword = await bcrypt.hash(password ,10);
        const newUser = { username , password: hashedPassword };
        console.log(newUser);

        res.status(201).json({ "message" : `new user ${username} created.`});

    } catch(err){
        res.status(500).json({ error : err.message });
    }
}

export default handleNewUser;