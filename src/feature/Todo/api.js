import { apiRoot } from "../../app/api";

const api ={
    getBranchReq:() => {
        return apiRoot.get (`/todos`)
    }
}
export default api