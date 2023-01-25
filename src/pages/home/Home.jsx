import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/HotelCard/HotelCard";
import useFetch from "../../hooks/axiosFetch";
import "./home.css";

const Home = () => {

  const { data } = useFetch(
    `/hoteis`
  );

  
  return (
    <div>
      <Navbar />
      <>
        {data.map((item) => (
          <SearchItem item={item} key={item._id} />
        ))}
      </>
      <Footer/>
    </div>
  );
};

export default Home;
