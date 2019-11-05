
const defaultData =  {
    "ip": "empty",
    "soil moisture": -1,
    "humidity": -1,
    "light": -1,
    "temperature": -1
};


export const dataReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_SENSOR_DATA': 
            return [
                ...state.filter(
                    sensor_data => sensor_data.ip === action.ip
                    ),
                    Object.assign({}, defaultData, action.data)
                ]
        default:
            return state;
    }
};


export const dataActions = {
    addSensorData: sensor_data => (
      {
        type: 'ADD_SENSOR_DATA',
        data: sensor_data
      }
    ),
};