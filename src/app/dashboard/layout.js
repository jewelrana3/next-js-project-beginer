import Sideber from "./Sideber";

export const metadata = {
    title: 'Dashboard | Next',
    description: 'Generated by create next app',
  }


const DashboardLayout = ({children}) => {
    return (
        <div className="flex">
            <Sideber />
            {children}
        </div>
    );
};

export default DashboardLayout;