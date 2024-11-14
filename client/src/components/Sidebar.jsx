import { GrTask } from "react-icons/gr";
import {
  MdDashboard,
  MdOutlineTaskAlt,
  MdAddTask,
  MdPendingActions,
  MdCloudDone,
  MdOutlineAccessTimeFilled,
  MdQueryStats,
} from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="bg-slate-900 min-h-[100vh] sm:min-h-screen w-[5rem] sm:w-[19rem] flex flex-col gap-4 roboto-regular">
      <div className="flex items-center gap-2 justify-center h-16 text-white text-2xl font-bold mt-6">
        <GrTask />
        <span className="sm:block hidden">Task Manager</span>
      </div>
      <nav className="flex gap-10 justify-start">
        <ul className="py-6 flex flex-col justify-start">
          <Link
            to="/"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdDashboard className="text-2xl" />
            <span className="sm:block hidden">Dashboard</span>
          </Link>
          <Link
            to="/completeTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdOutlineTaskAlt className="text-2xl" />
            <span className="sm:block hidden">Completed Tasks</span>
          </Link>
          <Link
            to="/pendingTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdPendingActions className="text-2xl" />
            <span className="sm:block hidden">Pending Tasks</span>
          </Link>
          <Link
            to="/inProgressTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <GrInProgress className="text-2xl" />
            <span className="sm:block hidden">Upcoming Tasks</span>
          </Link>
          <Link
            to="/deployedTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdCloudDone className="text-2xl" />
            <span className="sm:block hidden">Missed Tasks</span>
          </Link>

          <Link
            to="/addTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdAddTask className="text-2xl" />
            <span className="sm:block hidden">Add New Tasks</span>
          </Link>
          <Link
            to="/ManageTasks"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <FaEdit className="text-2xl" />
            <span className="sm:block hidden">Manage Tasks</span>
          </Link>
          <Link
            to="/statsTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdQueryStats className="text-2xl" />
            <span className="sm:block hidden">Task Stats</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
