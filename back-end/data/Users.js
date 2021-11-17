import bcrypt from 'bcryptjs';

const Users = [
  {
    account: 'Admin',
    password: bcrypt.hashSync('admin', 10),
    firstName: 'Admin',
    lastName: 'account',
    dateOfBirth: '2001-12-04',
    gender: 'male',
    isAdmin: true,
  },
  {
    account: 'Halee',
    password: bcrypt.hashSync('cho Rin', 10),
    firstName: 'Nguyễn',
    lastName: 'Hải Linh',
    dateOfBirth: '2001-05-15',
    gender: 'male',
  },
  {
    account: 'Híu ưibu',
    password: bcrypt.hashSync('cho Hiu', 10),
    firstName: 'Nguyễn',
    lastName: 'Đình Hiếu',
    dateOfBirth: '2001-01-01',
    gender: 'male',
  },
  {
    account: 'Cường-chan',
    password: bcrypt.hashSync('cho Cuong', 10),
    firstName: 'Đặng',
    lastName: 'Hùng Cường',
    dateOfBirth: '2001-07-28',
    gender: 'male',
  },
];

export default Users;
