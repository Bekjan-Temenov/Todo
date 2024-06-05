import { apiRoot } from "../app/api";

const api ={
    getBranchReq:() => {
        return apiRoot.get (`/create`)
    }
}
export default api