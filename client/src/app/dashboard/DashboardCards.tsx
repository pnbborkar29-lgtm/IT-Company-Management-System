import StatCard from "./StatCard";

export default function DashboardCards() {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <StatCard 
                 title="Total Companies"
                 value={0}
                 />
            <StatCard 
                 title="Service Companies"
                 value={0}
                 />
            <StatCard 
                 title="Product Companies"
                 value={0}
                 />
            <StatCard 
                 title="Total Employees"
                 value={0}
                 />
        </div>
    )
}