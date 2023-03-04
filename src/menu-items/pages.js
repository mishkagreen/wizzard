// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'ავტორიზაცია',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'შესვლა',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'register1',
            title: 'რეგისტრაცია',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default pages;
