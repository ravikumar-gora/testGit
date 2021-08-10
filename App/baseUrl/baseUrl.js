import axios from 'axios';
export const baseUrl= axios.create({
    baseURL:'https://www.errortechnologies.com/quizdemo/apis'
})
