import { Menu } from 'antd';
import  { HomeOutlined } from '@ant-design/icons';
import  { AppstoreOutlined } from '@ant-design/icons';
import  { AreaChartOutlined } from '@ant-design/icons';
import  { BarsOutlined } from '@ant-design/icons';


const MenuList = () => {
    return (
<Menu theme='dark'mode="inline" className='menu-bar' >

    <Menu.Item
        key= "home" 
        icon={<HomeOutlined/>}
    >
        Home
    </Menu.Item>

    <Menu.Item
        key= "pagina1" 
        icon={<AppstoreOutlined/>}
    >
        Pagina1
    </Menu.Item>

    <Menu.Item
        key= "pagina2" 
        icon={<AreaChartOutlined/>}
    >
        Pagina2
    </Menu.Item>


    <Menu.SubMenu
            key="task"
            icon={<BarsOutlined/>}
            title="Task"
        >
            <Menu.Item
                key="task-1"
            >
                Task-1
            </Menu.Item>
            <Menu.Item
                key="task-2"
            >
                Task-2
            </Menu.Item>

    </Menu.SubMenu>




    <Menu.Item
        key= "pagina2" 
        icon={<AreaChartOutlined/>}
    >
        Pagina2
    </Menu.Item>

</Menu>
    );
}

export default MenuList;
