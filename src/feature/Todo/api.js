import { apiRoot } from "../../app/api";

const api = {
    getBranchReq: () => {
        return apiRoot.get('/list/');
    },
    postBranchReq: (newTodo) => {
        return apiRoot.post(`/create`, newTodo);
    },
    putBranchReq: (id, updateData) => {
        return apiRoot.put(`/update/${id}`, updateData);
    },
    deleteBranchReq: (id) => {
        return apiRoot.delete(`/delete/${id}`);
    }
};
export default api;
