type DashboardProps = {
    title: string;
    value: number;
  };
  
  const DashboardSection: React.FC<DashboardProps> = ({ title, value }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-white text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-green-600 font-bold text-2xl">${value.toLocaleString()}</p>
      </div>
    );
  };
  
  export default DashboardSection;