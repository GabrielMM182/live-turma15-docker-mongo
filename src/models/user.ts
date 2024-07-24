import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'nome obrigatorio']
    },
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+$/, "Por favor, insira um endereço de email válido"],
        validate: {
            validator: function (value: string) {
                return mongoose.models.User.findOne({email: value})
                .then((user: any) => !user)
                .catch(() => false)
            },
            message: 'Email já em uso'
        }
    }
})

const User = mongoose.model('User', userSchema)

export default User;