import {useEffect} from 'react';
import {Container} from '../../../shared/ui/Container';
import {useSelector, useDispatch} from 'react-redux';
import {  getBranchTodo} from '../store/action';
import {MdDelete} from "react-icons/md";
import {MdEdit} from "react-icons/md";

function Todo() {
    const dispatch = useDispatch();
    const {todos, isLoading, error} = useSelector((state) => state.todo);


    useEffect(() => {
        dispatch(getBranchTodo());
    }, [dispatch]);

    return (
        <Container>
            <div className="">
                <div className="flex flex-col gap-2 items-start justify-center">
                    <h1 className="text-5xl font-medium">TODO List Demo App</h1>
                    <p className="bg-yellow-100  w-[10vh] rounded-sm">Do it now</p>
                </div>
                <div className="flex items-center justify-end mt-[50px]">
                    <input
                        className="border border-blue-700 p-2 rounded-l-md"
                        type="text"
                        name="todo"
                        placeholder="Create a new todo"
                    />
                    <button
                        className="border border-blue-700 text-blue-700 p-2 hover:bg-blue-800 rounded-r-md  hover:text-white ">
                        Add Task
                    </button>
                </div>
                <div className="flex items-center justify-between">

                    <div className="  w-full">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-xs  uppercase ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Task Name
                                </th>

                                <th scope="col" className="px-6 py-3  flex justify-center">
                                    Edit
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    Remove
                                </th>
                            </tr>
                            </thead>
                            <hr className="w-[110vh] absolute rounded-full m-auto border border-black h-[2px]"/>
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>error:{error}</p>
                            ) : todos && todos.length > 0 ? (
                                todos.map((item, index) => (
                                    <tbody key={index}>
                                    <tr className="bg-white border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium">
                                            {item.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.name}
                                        </td>

                                        <td className="px-6 py-4 text-blue-400 flex justify-center items-center ">
                                            <button>
                                                <MdEdit className=" rounded-sm w-[20px] h-[20px] "/>
                                            </button>
                                        </td>
                                        <td className="px-6 py-4   ">
                                            <button >
                                                <MdDelete className=" rounded-sm w-[20px] h-[20px] "/>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                ))
                            ) : (
                                <p>No User</p>
                            )
                            }
                            <hr className="w-[110vh] absolute rounded-full"/>


                        </table>
                    </div>
                </div>

            </div>
        </Container>
    );
}

