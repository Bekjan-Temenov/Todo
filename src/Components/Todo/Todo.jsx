import {Container} from "../../shared/ui/Container"

function Todo() {
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
          name="todo"x
          placeholder="Create a new todo"
          
        />
        <button className="border border-blue-700 text-blue-700 p-2 hover:bg-blue-800 rounded-r-md  hover:text-white " >
          Add Task  
        </button>
      </div>

      <table>

      </table>
      
      </div>
    </Container>
  );
}

export default Todo;
