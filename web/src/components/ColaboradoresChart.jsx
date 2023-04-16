import { ResponsiveLine } from "@nivo/line";
import React from "react";

const data = [
  {
    "id": "Joana",
    "color": "hsl(261, 70%, 50%)",
    "data": [
      {
        "x": "a1",
        "y": 209
      },
      {
        "x": "a2",
        "y": 214
      },
      {
        "x": "a3",
        "y": 205
      },
      {
        "x": "a4",
        "y": 245
      },
      {
        "x": "a5",
        "y": 24
      },
    ]
  },
  {
    "id": "Rafael",
    "color": "hsl(286, 70%, 50%)",
    "data": [
      {
        "x": "a1",
        "y": 133
      },
      {
        "x": "a2",
        "y": 108
      },
      {
        "x": "a3",
        "y": 66
      },
      {
        "x": "a4",
        "y": 148
      },
      {
        "x": "a5",
        "y": 106
      },
    ]
  },
  {
    "id": "Cris",
    "color": "hsl(101, 70%, 50%)",
    "data": [
      {
        "x": "a1",
        "y": 180
      },
      {
        "x": "a2",
        "y": 202
      },
      {
        "x": "a3",
        "y": 30
      },
      {
        "x": "a4",
        "y": 90
      },
      {
        "x": "a5",
        "y": 282
      },
    ]
  },
  {
    "id": "Maria",
    "color": "hsl(133, 70%, 50%)",
    "data": [
      {
        "x": "a1",
        "y": 140
      },
      {
        "x": "a2",
        "y": 104
      },
      {
        "x": "a3",
        "y": 30
      },
      {
        "x": "a4",
        "y": 12
      },
      {
        "x": "a5",
        "y": 148
      },
    ]
  },
  {
    "id": "John",
    "color": "hsl(9, 70%, 50%)",
    "data": [
      {
        "x": "a1",
        "y": 1
      },
      {
        "x": "a2",
        "y": 246
      },
      {
        "x": "a3",
        "y": 249
      },
      {
        "x": "a4",
        "y": 137
      },
      {
        "x": "a5",
        "y": 192
      },
    ]
  }
]
 
const ColaboradoresChart = () => {
  return (
    <div className="w-[500px] h-[500px] rounded-md bg-[#1A1A26] mt-10">
      <h3 className="flex justify-center text-zinc-50">Gráfico de avaliação</h3>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle"
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default ColaboradoresChart;
