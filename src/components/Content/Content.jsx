import React,{useState} from 'react'
import './Content.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import img1 from '../../assets/edge-50-1.webp'
import img2 from '../../assets/edge-50-2.webp'
import img3 from '../../assets/edge-50-3.webp'
import img4 from '../../assets/slider2_img1.webp'
import img5 from '../../assets/slider2_img2.webp'
import img6 from '../../assets/slider2_img3.webp'
import img7 from '../../assets/slider3_img1.webp'
import img8 from '../../assets/slider3_img2.webp'
import img9 from '../../assets/slider3_img3.webp'
import img10 from '../../assets/slider4_img1.webp'
import img11 from '../../assets/slider4_img2.webp'
import img12 from '../../assets/slider4_img3.webp'
import img13 from '../../assets/slider5_img1.webp'
import img14 from '../../assets/slider5_img2.webp'
import img15 from '../../assets/slider5_img3.webp'
import img16 from '../../assets/slider6_img1.webp'
import img17 from '../../assets/slider6_img2.webp'
import img18 from '../../assets/slider6_img3.webp'
import { Mobiles_data } from './Mobiles_data';
import Mobile_Props from './Props/Mobile_Props';
import { Laptop_data } from './Laptops_data';
import Laptop_props from './Props/Laptop_props'



function Content() {

    const [data, setdata] = useState(Mobiles_data)

    const mSortByPrice = () =>{
        const dummy_mobile_data = [...data]
        dummy_mobile_data.sort((n1,n2)=>[n1.Price-n2.Price])
        setdata(dummy_mobile_data)
    }

    const mSortByPerformance = () =>{
      const dummy_mobile_data = [...data]
      dummy_mobile_data.sort((n1,n2)=>[n1.ProductId-n2.ProductId])
      setdata(dummy_mobile_data)
    }

    const [searcheddata, setsearcheddata] = useState('')
    const searchedParameter = (e)=>{
      const searchValue = e.target.value;
      setsearcheddata(searchValue);
    }

    const userSearch = searcheddata.toLowerCase();

    const search = data.filter((item)=>{
        const productName = (item.Product).toLowerCase().includes(userSearch);
        const brandName = (item.Brand).toLowerCase().includes(userSearch);
        return productName || brandName
    })

    const displayData = searcheddata ? search : data;



    
  const [lpdata, setlpdata] = useState(Laptop_data)

  const lpSortByPrice = () =>{
    const dummy_laptop_data = [...lpdata]
    dummy_laptop_data.sort((n1,n2)=>[n1.Price-n2.Price])
    setlpdata(dummy_laptop_data)
}

const lpSortByPerformance = () =>{
  const dummy_laptop_data = [...lpdata]
  dummy_laptop_data.sort((n1,n2)=>[n2.Geekbench-n1.Geekbench])
  setlpdata(dummy_laptop_data)
}

  const [lpsearcheddata, setlpsearcheddata] = useState('')
  const lpsearchedParameter = (e)=>{
    const lpsearchValue = e.target.value;
    setlpsearcheddata(lpsearchValue);
  }

  const lpuserSearch = lpsearcheddata.toLowerCase();

  const lpsearch = lpdata.filter((item)=>{
    const productName = (item.Product).toLowerCase().includes(lpuserSearch);
    const brandName = (item.Brand).toLowerCase().includes(lpuserSearch);
    return productName || brandName
  })

  const lpdisplayData = lpsearcheddata ? lpsearch : lpdata;

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 2000,
    cssEase: "linear",
  };

  const addFavorit = (id) => {
    console.log(id);
    const updatedData = data.map((item) => {
      return item.ProductId === id ? { ...item, Fav: !item.Fav } : item;
    });
    setdata(updatedData);
  };
  return (
    <>
      <div className="main-class">
        <Slider {...settings}>
          <div className="outer">
            <div className="inner">
              <img src={img2} height="100%" />
              <img src={img1} height="100%" />
              <img src={img3} height="100%" />
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <img src={img4} height="100%" />
              <img src={img5} height="100%" />
              <img src={img6} height="100%" />
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <img src={img7} height="100%" />
              <img src={img8} height="100%" />
              <img src={img9} height="100%" />
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <img src={img10} height="100%" />
              <img src={img11} height="100%" />
              <img src={img12} height="100%" />
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <img src={img13} height="100%" />
              <img src={img14} height="100%" />
              <img src={img15} height="100%" />
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <img src={img16} height="100%" />
              <img src={img17} height="100%" />
              <img src={img18} height="100%" />
            </div>
          </div>
        </Slider>
        <br />
        <br />
        <div className="mobile_division">
          <div className="product_nav">
            <div>
              <h2>MOBILES</h2>
            </div>
            <div className="right_part">
              <h4 style={{ display: "inline-block" }}>Sort By :</h4>
              <button onClick={mSortByPerformance} className="sort_btn">
                Performace
              </button>
              <button onClick={mSortByPrice} className="sort_btn">
                Price
              </button>
              <div className="search_div">
                <input
                  type="text"
                  placeholder="Search Product"
                  onChange={(e) => searchedParameter(e)}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#ffffff" }}
                  className="search_icon"
                  color="black"
                />
              </div>
            </div>
          </div>
          <div className="props_outer_div">
            {displayData.map((product, ind) => {
              return (
                <>
                  <Mobile_Props product_data={product} addFave={addFavorit} />
                </>
              );
            })}
          </div>
        </div>

        <div className="laptop_division">
          <div className="product_nav">
            <div>
              <h2>LAPTOPS</h2>
            </div>
            <div className="right_part">
              <h4 style={{ display: "inline-block" }}>Sort By :</h4>
              <button onClick={lpSortByPerformance} className="sort_btn">
                GeekBench Score
              </button>
              <button onClick={lpSortByPrice} className="sort_btn">
                Price
              </button>
              <div className="search_div">
                <input
                  type="text"
                  placeholder="Search Product"
                  onChange={(e) => lpsearchedParameter(e)}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#ffffff" }}
                  className="search_icon"
                  color="black"
                />
              </div>
            </div>
          </div>
          <div className="props_outer_div">
            {lpdisplayData.map((product, ind) => {
              return (
                <>
                  <Laptop_props product_data={product} />
                </>
              );
            })}
          </div>
        </div>

        {/* <div className="tv_division">
        <div className='product_nav'>
          <div>
          <h2>TV's</h2>
          </div>
          <div className="search_div">
            <input type='text' placeholder='Search Product'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} className='search_icon' color='black'/>
          </div>
        </div>

      </div> */}
      </div>
    </>
  );
}

export default Content