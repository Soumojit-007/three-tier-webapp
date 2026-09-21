import { Users , BriefcaseBusiness } from "lucide-react";

const Navbar = () =>{
    return(
        <nav className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                        <Users size={21}/>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-slate-900">TeamHub</h1>
                        <p className="text-xs text-slate-500">Employee Management System</p>
                    </div>
                </div>
                <div className="hidden items-center gap-2 text-sm text-slate-600 sm:flex">
                    <BriefcaseBusiness size={17}/>
                    <span>Admin Dashboard</span>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;