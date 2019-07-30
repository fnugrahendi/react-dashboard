import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from "react-apexcharts";

import UserGrid from '../components/UserGrid'
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
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: '25px',
    marginBottom: '15px',
    color: '#848484',
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
    height: 50,
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
          fontSize: "15px",
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

var optionsRadial = {
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%',
        background: 'transparent',
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#848484',
        strokeWidth: '90%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -20,
          show: true,
          color: '#888',
          fontSize: '13px'
        },
        value: {
          formatter: function (val) {
            return val;
          },
          color: '#111',
          fontSize: '20px',
          show: true,
        }
      }
    }
  },
  stroke: {
    lineCap: 'butt'
  },
  labels: ['Percent'],
}

var seriesRadial = [76]

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
          <Typography variant="h6" className={classes.sectionTitle}>
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
          <Typography variant="h6" className={classes.sectionTitle}>
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
        <Typography variant="h6" className={classes.sectionTitle}>
          Recent Players
        </Typography>
        <UserGrid />
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Player Statistics
          </Typography>
          <Grid container style={{width: '90%'}}>
            <Grid item xs={3}>
              <Chart
                options={optionsRadial}
                series={seriesRadial}
                type="radialBar"
                width="220" />
            </Grid>  
            <Grid item xs={3}>
              <Chart
                  options={optionsRadial}
                  series={seriesRadial}
                  type="radialBar"
                  width="220" />
            </Grid>
            <Grid item xs={3}>
              <Chart
                  options={optionsRadial}
                  series={seriesRadial}
                  type="radialBar"
                  width="220" />
            </Grid>
            <Grid item xs={3}>
              <Chart
                  options={optionsRadial}
                  series={seriesRadial}
                  type="radialBar"
                  width="220" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Main