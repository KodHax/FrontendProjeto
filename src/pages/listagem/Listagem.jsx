/* eslint-disable no-unused-vars */
import "./Listagem.css";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/HotelCard/HotelCard";
import useFetch from "../../hooks/axiosFetch";

const List = () => {

  const { data, loading } = useFetch(
    `/hotels`
  );

  console.log(data)

  return (
    <div>
      <Navbar />
          <div className="listResult">
            {loading ? (
              "loading, Please Wait"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
    </div>
  );
};

export default List;
