import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const HeatMap = () => {
    const theme = useTheme();
    const options = {
        series: [
            { name: 'Jan', data: generateData(20, { min: -30, max: 55 }) },
            { name: 'Feb', data: generateData(20, { min: -30, max: 55 }) },
            { name: 'Mar', data: generateData(20, { min: -30, max: 55 }) },
            { name: 'Apr', data: generateData(20, { min: -30, max: 55 }) },
            { name: 'May', data: generateData(20, { min: -30, max: 55 }) },
            { name: 'Jun', data: generateData(20, { min: -30, max: 55 }) },
            { name: 'Jul', data: generateData(20, { min: -30, max: 55 }) },
            { name: 'Aug', data: generateData(20, { min: -30, max: 55 }) },
            { name: 'Sep', data: generateData(20, { min: -30, max: 55 }) },
        ],
        chart: {
            height: 350,
            type: 'heatmap',
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [
                        { from: -30, to: 5, name: 'low', color: '#00A100' },
                        { from: 6, to: 20, name: 'medium', color: '#128FD9' },
                        { from: 21, to: 45, name: 'high', color: '#FFB200' },
                        { from: 46, to: 55, name: 'extreme', color: '#FF0000' },
                    ],
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            style: {
                background: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
            },
        },
        stroke: {
            width: 1,
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    HeatMap
                </Typography>
                <ReactApexChart options={options} series={options.series} type="heatmap" height={350} />
            </CardContent>
        </Card>
    );
};

// Mockup function to generate random data
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({ x: x, y: y });
        i++;
    }
    return series;
}

export default HeatMap;
