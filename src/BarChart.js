import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const BarChart = () => {
    const theme = useTheme();
    const options = {
        series: [
            {
                name: 'Actual',
                data: [
                    {
                        x: '2011',
                        y: 1292,
                        goals: [
                            {
                                name: 'Expected',
                                value: 1400,
                                strokeHeight: 5,
                                strokeColor: '#775DD0',
                            },
                        ],
                    },
                    {
                        x: '2011',
                        y: 129,
                        goals: [
                            {
                                name: 'Expected',
                                value: 140,
                                strokeHeight: 5,
                                strokeColor: '#775DD0',
                            },
                        ],
                    },
                    {
                        x: '2011',
                        y: 1129,
                        goals: [
                            {
                                name: 'Expected',
                                value: 1300,
                                strokeHeight: 5,
                                strokeColor: '#775DD0',
                            },
                        ],
                    },
                    {
                        x: '2011',
                        y: 1000,
                        goals: [
                            {
                                name: 'Expected',
                                value: 1200,
                                strokeHeight: 5,
                                strokeColor: '#775DD0',
                            },
                        ],
                    },
                    {
                        x: '2011',
                        y: 900,
                        goals: [
                            {
                                name: 'Expected',
                                value: 999,
                                strokeHeight: 5,
                                strokeColor: '#775DD0',
                            },
                        ],
                    },
                    // ... (other data points)
                ],
            },
        ],
        chart: {
            height: 350,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                columnWidth: '60%',
            },
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            style: {
                background: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
            },
        },
        colors: ['#00E396'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Actual', 'Expected'],
            markers: {
                fillColors: ['#00E396', '#775DD0'],
            },
        },
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Bar Chart
                </Typography>
                <ReactApexChart options={options} series={options.series} type="bar" height={350} />
            </CardContent>
        </Card>
    );
};

export default BarChart;
