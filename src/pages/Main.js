import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from "react-apexcharts";

import ResourceList from '../components/ResourceList'
import { Typography } from '@material-ui/core';

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
    background: 'transparent',
    boxShadow: 'none',
  },
  statsNumber: {
    fontSize: '45px',
    marginBottom: '0px',
    marginTop: '0px',
    fontWeight: '500',
    color: '#5d646c',
  },
  statsDescription: {
    fontSize: '15px',
    color: '#a5acb4',
    marginTop: 0,
  },
  statsItem: {
    textAlign: 'left',
    borderLeft: '4px solid grey',
    paddingLeft: '16px',
    height: '90px',
  },
  sectionTitle: {
    fontSize: '14px',
    textAlign: 'left',
    color: '#f3f3f3',
  }
}));

const barChartData = {
  options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    },
    yaxis: {
      axisTicks: {
        show: true
      },
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
}

const lineChartData = {
  options: {
    chart: {
      id: "basic-line"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    },
    yaxis: {
      axisTicks: {
        show: true
      },
    },
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
    height: 20,
    type: "radialBar",
  },
  series: [35],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      track: {
        background: '#333',
        startAngle: 0,
        endAngle: 0,
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
        <Grid container>
          <Grid className={classes.statsItem} item xs={2} style={{ borderColor: '#287e7e' }}>
            <p className={classes.statsNumber}>267</p>
            <p className={classes.statsDescription}>Online players</p>
          </Grid>
          <Grid className={classes.statsItem} item xs={2} style={{ borderColor: '#91c46b' }}>
            <p className={classes.statsNumber}>1890</p>
            <p className={classes.statsDescription}>Hours played</p>
          </Grid>
          <Grid className={classes.statsItem} item xs={2} style={{ borderColor: '#f15822' }}>
            <p className={classes.statsNumber}>22</p>
            <p className={classes.statsDescription}>New tournaments</p>
          </Grid>
          <Grid className={classes.statsItem} item xs={2} style={{ borderColor: '#91c46b' }}>
            <p className={classes.statsNumber}>16</p>
            <p className={classes.statsDescription}>Lifetime failes</p>
          </Grid>
          <Grid className={classes.statsItem} item xs={2} style={{ borderColor: '#287e7e' }}>
            <p className={classes.statsNumber}>6544</p>
            <p className={classes.statsDescription}>Comments</p>
          </Grid>
          <Grid className={classes.statsItem} item xs={2} style={{ borderColor: '#f15822' }}>
            <p className={classes.statsNumber}>568</p>
            <p className={classes.statsDescription}>Games played</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography className={classes.sectionTitle}>
            Active Player
          </Typography>
          <Chart
            options={lineChartData.options}
            series={lineChartData.series}
            type="line"
            width="500" />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography className={classes.sectionTitle}>
            Active Tournaments
          </Typography>
          <Chart
            options={lineChartData.options}
            series={lineChartData.series}
            type="line"
            width="500" />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.sectionTitle} />
        <ResourceList />
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