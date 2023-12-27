import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import genreIcons from "../../assets/genres";
import { useGetGenresQuery } from "../../services/Api";
import { Link } from "react-router-dom";
import { selectGenre } from "../../Feature/currentGenre";
import { useDispatch } from "react-redux";
// import { selectGenre } from "../../Feature/currentGenre";

const TopBar = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useGetGenresQuery();
  return (
    <div className="text-white border flex gap-2 py-2 px-1 text-sm overflow-x-auto">
      {isFetching ||
        data?.genres.map(({ name, id }) => (
          <Link
            key={id}
            value={id}
            className="text-white border rounded-lg justify-center items-center flex px-2 py-2"
          >
            <div className="flex" onClick={() => dispatch(selectGenre(id))}>
              <div>
                <img
                  src={genreIcons[name.toLowerCase()]}
                  width={30}
                  height={30}
                  className="text-white invert m-4"
                  alt=""
                />
              </div>
              {name}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default TopBar;
