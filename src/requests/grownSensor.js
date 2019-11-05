import {store} from '../reducers/index';
import {dataActions} from '../reducers/data_reducer'
import axios from 'axios';


export function getSensorData(host){
  axios.get(host+'/rest/sensor/data')
    .then((response) => {
        const newData = Object.assign(
            {}, 
            {
                ip:host
            }, 
            response.data
            )
        store.dispatch(dataActions.addSensorData(newData))
    }).catch((err) => {
        /* store.dispatch(actions.addError(err.message)) */
    });
}