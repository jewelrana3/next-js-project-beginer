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
   
]

const Sideber = () => {
    return (
        <aside className="ml-10">
            <h1 className="text-3xl">Dashboard</h1>
            <ul>
                {navLinks.map((path,title)=>(<li key={path}>
                    <Link href={path}>{title}</Link>
                </li>))}
            </ul>
        </aside>
    );
};

export default Sideber;