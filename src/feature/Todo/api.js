import {apiRoot} from "../../app/api";

const api = {
    getBranchReq: () => {
        return apiRoot.get(`/todo`)
    },

}


export default api