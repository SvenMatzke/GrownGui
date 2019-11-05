import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LightIcon from '@material-ui/icons/WbSunny';
import TemperatureIcon from '@material-ui/icons/Whatshot';
import PlantIcon from '@material-ui/icons/LocalFlorist';
import HumidityIcon from '@material-ui/icons/Opacity';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });
  
const Overview = ({sensorDataList}) => {
    const classes = useStyles();
    return (
        <Paper>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Address</TableCell>
                    <TableCell align="right"><LightIcon />Light</TableCell>
                    <TableCell align="right"><TemperatureIcon />Temperature</TableCell>
                    <TableCell align="right"><HumidityIcon />Humidity</TableCell>
                    <TableCell align="right"><PlantIcon />Soil moisture</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {sensorDataList.map( (data)=>(
                    <TableRow key={"cube"}>
                    <TableCell component="th" scope="row">
                        {data.ip}
                    </TableCell>
                    <TableCell align="right">{data.lumen}</TableCell>
                    <TableCell align="right">{data.temperature}</TableCell>
                    <TableCell align="right">{data.humidity}</TableCell>
                    <TableCell align="right">{data.moisture}</TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
    )
}
Overview.propTypes = {
    sensorDataList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
}

const mapStateToProps = state => {
    return {
        sensorDataList: state.sensorData
    }
  }

const DeviceOverview = connect(
    mapStateToProps
)(Overview)

export default DeviceOverview