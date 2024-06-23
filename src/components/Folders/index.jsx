import { useDispatch, useSelector } from "react-redux";
import { useFolders } from "../../hooks/folders";
import { setSortBy } from "../../actions/filter";
import FolderItem from "../FolderItem";

const Folder = () => {
  const { data: folders } = useFolders();
  const sortBy = useSelector((state) => state.filter.sortBy);
  const parent = useSelector((state) => state.parent.parent);
  const dispatch = useDispatch();
  console.log("sortBy", sortBy);

  const switchOrderSortBy = () => {
    let newSortBy = "";
    switch (sortBy) {
      case "date_asc": {
        newSortBy = "date_desc";
        break;
      }
      case "date_desc": {
        newSortBy = "date_asc";
        break;
      }
      case "alp_asc": {
        newSortBy = "alp_desc";
        break;
      }
      case "alp_desc": {
        newSortBy = "alp_asc";
        break;
      }
      default: {
        newSortBy = "date_desc";
        break;
      }
    }
    console.log("new sortBy", newSortBy);

    dispatch(setSortBy(newSortBy));
  };

  const switchTypeOrderBy = (e) => {
    const value = e.target.value;

    let newSortBy = "date_desc";

    if (value === "date") {
      if (sortBy.includes("asc")) {
        newSortBy = "date_asc";
      } else {
        newSortBy = "date_desc";
      }
    } else if (value === "name") {
      if (sortBy.includes("asc")) {
        newSortBy = "alp_asc";
      } else {
        newSortBy = "alp_desc";
      }
    }

    dispatch(setSortBy(newSortBy));
  };

  return (
    <div
      className="mt-8"
      //   style={props.loading ? { display: "none" } : { display: "block" }}
    >
      <div className="flex flex-row justify-between text-[#212b36]">
        <h2 className="m-0 mb-[20px] text-[22px] font-medium">
          {folders?.length === 0 ? "No Folders" : "Folders"}
        </h2>
        <div className="flex flex-row items-center">
          <a className="mr-2" onClick={switchOrderSortBy}>
            <svg
              className="h-3 w-3 cursor-pointer"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={
                sortBy === "date_desc" || sortBy === "alp_desc"
                  ? { transform: "scaleY(-1)" }
                  : {}
              }
            >
              <g id="upload">
                <path
                  id="Path"
                  d="M5.58035 2.51616L3.20339 0.139199C3.01776 -0.0463997 2.71681 -0.0463997 2.53119 0.139199L0.154195 2.51616C-0.0282007 2.70502 -0.0229639 3.00597 0.165894 3.18836C0.350128 3.3663 0.642189 3.3663 0.826423 3.18836L2.39191 1.62288V9.50781C2.39191 9.77037 2.60475 9.98321 2.86731 9.98321C3.12988 9.98321 3.34272 9.77037 3.34272 9.50781V1.6229L4.90821 3.18839C5.09706 3.37079 5.39801 3.36555 5.58041 3.17669C5.75829 2.99246 5.75829 2.7004 5.58035 2.51616Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </a>
          <select
            className="text-sm font-medium"
            onChange={switchTypeOrderBy}
            value={
              sortBy === "alp_desc" || sortBy === "alp_asc" ? "name" : "date"
            }
          >
            <option value="date">Modified</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(185px,185px))] gap-[20px]">
        {folders?.map((folder) => (
          <FolderItem folder={folder} key={folder._id} />
        ))}
      </div>
    </div>
  );
};

export default Folder;