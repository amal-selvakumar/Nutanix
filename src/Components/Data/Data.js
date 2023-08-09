import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import '../Data/Data.css';

export const sidebarData=[{
    icon:<BiIcons.BiSolidDashboard className='icons'></BiIcons.BiSolidDashboard>,
    title:'Dashboard'
},
{
    icon:<BsIcons.BsSliders className='icons'></BsIcons.BsSliders>,
    title:'Preferences'
},
{
    icon:<FiIcons.FiPower className='icons'></FiIcons.FiPower>,
    title:'Logout'
}]