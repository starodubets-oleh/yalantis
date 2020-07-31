import axios from "axios";

export const GET_DATA = "GET_DATA";

export const getData = (dispatch) => {
    return axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then(
        (res) => dispatch({
            type: GET_DATA,
            payload: res.data
        })
    )
}

// export const requestBrands = (dispatch) => {
//     return axios('http://localhost:3030/brand').then(
//         (res) => dispatch({
//             type: GET_BRANDS,
//             payload: res.data
//         })
//     )
// };

// export const setBrand = (payload) => {
//     return ({
//         type: SET_BRAND,
//         payload
//     })
// };

// export const getCity = (dispatch) => {
//     return axios.get(`http://localhost:3030/city`).then(
//         (res) => dispatch({
//             type: GET_CITY,
//             payload: res.data
//         })
//     )
// };
// export const getTableData = (markCode, cityCode) => (dispatch) => {
//     return axios.get(`http://localhost:3030/ostatki?CodeGroup=${markCode}&CodeCity=${cityCode}`).then(
//         (res) => dispatch({
//             type: GET_TABLE_DATA,
//             payload: res.data
//         })
//     ).catch( err => console.error(err))
// };

// export const setMark = (payload) => {
//     return ({
//         type: SET_MARK,
//         payload
//     })
// };

// export const setMarkCode = (payload) => {
//     return ({
//         type: SET_MARK_CODE,
//         payload
//     })
// };
// export const setSph = (payload) => {
//     return ({
//         type: SET_SPH,
//         payload
//     })
// };
// export const setCityCode = (payload) => {
//     return ({
//         type: SET_CITY_CODE,
//         payload
//     })
// };