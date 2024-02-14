import { create } from "apisauce";

const api = create({
    baseURL: 'http://ec2-3-9-17-93.eu-west-2.compute.amazonaws.com:3000',
})

export default api