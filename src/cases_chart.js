import React from 'react';
import { useTheme } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import * as _ from 'lodash';

function CasesChart({ data }) {
  const theme = useTheme();
  const chartData = _.reverse(data);

  return (
    <ResponsiveContainer>
      <LineChart
        data={chartData}
        margin={{
          top: 16,
          right: 16,
          bottom: 0,
          left: 24,
        }}
      >
        <XAxis dataKey="specimenDate" stroke={theme.palette.text.secondary} />
        <YAxis stroke={theme.palette.text.secondary}>
          <Label
            angle={270}
            position="left"
            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
          >
            Daily Confirmed Cases
          </Label>
        </YAxis>
        <Line type="monotone" dataKey="dailyLabConfirmedCases" stroke={theme.palette.primary.main} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CasesChart;
