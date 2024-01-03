import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const LineChart = () => {
    const theme = useTheme();
    const [chartState] = useState({
        options: {
            series: [{
                name: 'Sales',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
            }],
            chart: {
                height: 350,
                type: 'line',
                background: 'transparent',
            },
            forecastDataPoints: {
                count: 7,
            },
            stroke: {
                width: 5,
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                tickAmount: 10,
                labels: {
                    formatter: function (value, timestamp, opts) {
                        return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#FDD835'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                },
            },
            yaxis: {
                min: -10,
                max: 40
            },
            tooltip: {
                enabled: true,
                theme: 'dark',
                style: {
                    background: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
                },
            },
        }
    });

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Line Chart
                </Typography>
                <ReactApexChart
                    options={chartState.options}
                    series={chartState.options.series}
                    type="line"
                    height={350}
                />
            </CardContent>
        </Card>
    );
};

export default LineChart;
