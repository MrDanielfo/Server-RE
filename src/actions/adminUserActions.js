import User from '../models/User';
export const createAdmin = async (admin) => {
    try {
        admin.role = "ADMIN"
        const newAdmin = await User.create(admin);
        return newAdmin;
    } catch (err) {
        console.error(err)
    }
}