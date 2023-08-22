import NavLink from "@/components/NavLink";
import Link from "next/link";

const navLinks = [
    {
        path:'/dashboard',
        title:'Dashboard'
    },
    {
        path:'/dashboard/add-product',
        title:'Add Product'
    },
    {
        path:'/dashboard/add-manage',
        title:'Manage Product'
    },
    {
        path:'/dashboard/AllProducts',
        title:'All Product'
    },
    {
        path:'/',
        title:'Home'
    },
   
]

const Sideber = () => {
    return (
        <aside className="ml-10">
            <h1 className="text-3xl mx-3">Dashboard</h1>
            <ul>
                {
                    navLinks.map(({path,title})=>(<li className="m-2" key={path}>
                        <NavLink exact activeClassName='text-blue-500' className="mt-3" href={path}>{title}</NavLink>
                    </li>))
                }
            </ul>
        </aside>
    );
};

export default Sideber;