import React from "react";
import { PieChart, Pie, Cell} from "recharts";


const HomeStats = ({statsData}) => {
  
  const COLORS = ["#808080", "#e75480"];

  const data = [
    {
      name:'Group A',
      value:(100 - statsData.value)
    },
    {
      name:'Group B',
      value:statsData.value
    },
  ];
  return (
    <div className="piechartContainer">
      {/* <ResponsiveContainer width="80%"> */}
        <PieChart width={208} height={208} className="piechart">
          <Pie
            data={data}
            cx={100}
            cy={100}
            startAngle={-270}
            innerRadius={80}
            outerRadius={82}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0}/>
            ))}
            
          </Pie>
        </PieChart>
      {/* </ResponsiveContainer> */}
      <div className="piechartLabel">
        <img src={statsData.icon} alt="" />
        <p style={{fontSize:'24px', fontFamily:'Libre Baskerville'}}>0</p>
        <p style={{fontSize:'16px', fontFamily:'Nunito'}}>Label</p>
      </div>
    </div>
  );
};

export default HomeStats;
