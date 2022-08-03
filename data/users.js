import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jay Gao',
        email: 'jay@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Fu',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;
