//timestamps = lida com a criacao e atualizacao em dados

import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise;

const userSchema = new Schema (
    {
        name: String, 
        email: String,
        password: String,

    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema)
//criamos o usario a partir de userSchema

export default User;