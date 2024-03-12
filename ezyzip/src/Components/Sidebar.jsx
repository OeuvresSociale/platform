import React ,{ useState } from 'react';
import { FaRegListAlt} from "react-icons/fa";
import { FaUsers , FaMoneyBillTrendUp} from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import { MdOutlineSpaceDashboard , MdOutlineArchive , MdOutlineDashboard} from "react-icons/md";
import { TfiAnnouncement , TfiWrite, TfiAngleRight , TfiAngleLeft , TfiAngleDown} from "react-icons/tfi";
import { FaRegPlusSquare } from "react-icons/fa";
import { LuLayoutList } from "react-icons/lu";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { IoListCircleOutline } from "react-icons/io5";




import MenuItem from "./MenuItem.jsx";


function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItems = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <MdOutlineSpaceDashboard />
        },
        {
            path: "/employeelist",
            name: "Employé",
            icon: <FaUsers/>
        },
        {
            path: "/demande",
            name: "Demande",
            icon: <FaRegListAlt />
        },
        {
            path: "/offre",
            name: "Offre",
            icon: <TfiAnnouncement />,
            subicon :<TfiAngleDown/>,
            subicon2 :<TfiAngleRight/> ,
            subMenus: [
                {
                    path: "/offre/ajouteroffre",
                    name: "Ajouter offre",
                    icon: <FaRegPlusSquare />
                },
                {
                    path: "/offre/tabledoffre",
                    name: "Table d'offres",
                    icon: <LuLayoutList />
                }
            ]
        },
        {
            path: "/formulaire",
            name: "Formulaire",
            icon: <TfiWrite  />
        },
        {
            path: "/tresorerie",
            name: "Trésorerie",
            icon: <FaMoneyBillTrendUp />,
            subicon :<TfiAngleDown/>,
            subicon2 :<TfiAngleRight/> ,
            subMenus: [
                {
                    path: "/tresorerie/offre",
                    name: "offre",
                    icon: <MdOutlineDashboard />
                },
                {
                    path: "/tresorerie/offre",
                    name: "offre",
                    icon: <HiOutlineSwitchVertical />
                },
                {
                    path: "/tresorerie/offre",
                    name: "offre",
                    icon: <IoListCircleOutline />
                }
            ]
        },
        {
            path: "/archive",
            name: "Archive",
            icon: <MdOutlineArchive />
        }
    ];
    return (
        <div className={isOpen ? "sidemenu" : "inactive"}>
            
                <div className='top-section'>
                    <div className={isOpen ? 'toggle-menu-btn' : 'toggle-menu-btn2'}>
                        {isOpen ? <TfiAngleLeft onClick={toggle} /> : <TfiAngleRight onClick={toggle} />}

                    </div>
                </div>
                <div className='mainmenu'>
                    <ul >
                        {menuItems.map((menuItem, index) => (
                            <MenuItem key={index} name={menuItem.name} path={menuItem.path} icon={menuItem.icon} subicon={menuItem.subicon} subicon2={menuItem.subicon2}  subMenus={menuItem.subMenus || []} />

                        ))}
                    </ul>
              



         </div>
            <main>{children}</main>

        </div>
    );
}

export default Sidebar;


