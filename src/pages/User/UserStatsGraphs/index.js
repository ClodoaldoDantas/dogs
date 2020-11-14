import React, { useState, useEffect } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import './styles.scss';

export default function UserStatsGraphs({ data }) {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(data.reduce((acc, item) => Number(item.acessos) + acc, 0));
    setGraph(graphData);
  }, [data]);

  return (
    <section className='graph animeLeft'>
      <div className='graph-total'>
        <p>Acessos: {total}</p>
      </div>

      <div>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>

      <div>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}
