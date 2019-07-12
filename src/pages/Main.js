import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from "react-apexcharts";

import ResourceList from '../components/ResourceList'

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    }
}));

const barChartData = {
    options: {
        chart: {
        id: "basic-bar"
        },
        xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    },
    series: [
        {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
}

const pieChartData = { 
    series: [44, 55, 13, 33],
    labels: ['Motorcycle', 'Bicycle', 'Car', 'Others'],
    type: 'donut'
}

var gaugeChartData = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [78],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#333',
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
};

const Main = () => {
    const classes = useStyles();
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ResourceList />
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Chart
                        options={pieChartData}
                        series={pieChartData.series}
                        type="pie"/>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Chart
                        options={barChartData.options}
                        series={barChartData.series}
                        type="line"
                        width="500"/>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Chart
                        options={barChartData.options}
                        series={barChartData.series}
                        type="bar"
                        width="500"/>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Chart
                        options={gaugeChartData}
                        series={gaugeChartData.series}
                        type={gaugeChartData.chart.type} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Main