import { useEffect, useState } from 'react';
import { Container } from '../../../shared/ui/Container';
import { useSelector, useDispatch } from 'react-redux';
import { getBranchTodo, addTodo, updateTodo, deleteTodo } from '../store/action';
import { MdDelete, MdEdit } from "react-icons/md";
import Modal from '../../modal/ui/Modal';
import { AnimatePresence } from "framer-motion";

function Todo() {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state.todo);
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    dispatch(getBranchTodo());
  }, [dispatch]);

  const openModal = (todo = null) => {
    setCurrentTodo(todo);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleAddOrUpdateTodo = async (todo) => {
    if (currentTodo) {
      await dispatch(updateTodo({ id: currentTodo.id, ...todo }));
    } else {
      await dispatch(addTodo(todo));
    }
    closeModal();
  };

  const handleDeleteTodo = async (id) => {
    await dispatch(deleteTodo(id));
  };

  return (
    <Container>
      <div className="">
        <div className="flex flex-col gap-2 items-start justify-center">
          <h1 className="text-5xl font-medium">TODO List Demo App</h1>
          <p className="bg-yellow-100 w-[10vh] rounded-sm">Do it now</p>
        </div>
        <div className="flex items-center justify-end mt-[50px]">
          <button
            onClick={() => openModal()}
            className="border border-blue-700 text-blue-700 p-2 px-5 hover:bg-blue-800 rounded-md hover:text-white"
          >
            Add Task
          </button>
          <AnimatePresence>
            {showModal && <Modal show={showModal} onClose={closeModal} onSubmit={handleAddOrUpdateTodo} initialData={currentTodo} />}
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">#</th>
                  <th scope="col" className="px-6 py-3">Task Name</th>
                  <th scope="col" className="px-6 py-3 flex justify-center">Edit</th>
                  <th scope="col" className="px-6 py-3">Remove</th>
                </tr>
              </thead>
              <hr className="w-[110vh] absolute rounded-full border-black h[2px]" />
              {isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : todos && todos.length > 0 ? (
                todos.map((item, index) => (
                  <tbody key={index}>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium">{item.id}</th>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4 text-blue-400 flex justify-center items-center">
                        <button
                          onClick={() => openModal(item)}
                        >
                          <MdEdit className="rounded-sm w-[20px] h-[20px]" />
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDeleteTodo(item.id)}
                        >
                          <MdDelete className="rounded-sm w-[20px] h-[20px]" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <p>No User</p>
              )}
              <hr className="w-[110vh] absolute rounded-full" />
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Todo;
