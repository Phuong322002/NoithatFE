import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Col, Pagination, Row } from 'antd';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import Loading from '../../components/LoadingComponent/Loading';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getAllTypeProduct, getProductType, getAllProduct } from '../../services/ProductService';
import { useDebounce } from '../../hooks/useDebounce';


import san1 from '../../assets/images/san1.jpg'
import san2 from '../../assets/images/san2.jpg'
import san3 from '../../assets/images/san3.jpg'
import san4 from '../../assets/images/san4.jpg'
import san5 from '../../assets/images/san5.jpg'
import san6 from '../../assets/images/san6.jpg'
import san7 from '../../assets/images/san7.jpg'
import san8 from '../../assets/images/san8.jpg'
import san9 from '../../assets/images/san9.jpg'
import san10 from '../../assets/images/san10.jpg'
import san11 from '../../assets/images/san11.jpg'
import san12 from '../../assets/images/san12.jpg'
import san13 from '../../assets/images/san13.jpg'
import san14 from '../../assets/images/san14.jpg'
import san15 from '../../assets/images/san15.jpg'
import san16 from '../../assets/images/san16.jpg'
import san17 from '../../assets/images/san17.jpg'
import san18 from '../../assets/images/san18.jpg'
import san19 from '../../assets/images/san19.jpg'
import san20 from '../../assets/images/san20.jpg'
import videohome1 from '../../assets/images/videohome1.mp4'


import { WrapperButtonMore, WrapperProducts, WraperMain } from './style';
import './homePage.scss';
import CustomerAndPartner from '../Footer/FooterComponent';
import Footer from '../Footer/ContactComponent';
const HomePage = () => {
  const [typeProduct, setTypeProduct] = useState([]);
  const { state } = useLocation();
  const [productsByType, setProductsByType] = useState({});
  const [paginationByType, setPaginationByType] = useState({});

  const fetchProductType = async (type, page, limit) => {
    const res = await getProductType(type, page, limit);
    if (res?.status === 'OK') {
      setProductsByType(prev => ({
        ...prev,
        [type]: res.data
      }));
      setPaginationByType(prev => ({
        ...prev,
        [type]: { page, limit, total: res.total }
      }));
    }
  };

  useEffect(() => {
    if (typeProduct.length > 0) {
      typeProduct.forEach(type => {
        fetchProductType(type, 0, 5); // Load 5 sản phẩm ban đầu
      });
    }
  }, [typeProduct]);

  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(12);

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await getAllProduct(search, limit);
    return res;
  };

  useEffect(() => {
    fetchTypeProduct();
  }, []);

  const fetchTypeProduct = async () => {
    const response = await getAllTypeProduct();
    if (response && response.status === 'OK') {
      setTypeProduct(response.data);
    }
  };

  const { isPending, data: productss, isPreviousData } = useQuery(['productss', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true });

  const loadMoreProductsByType = async (type) => {
    const currentPage = paginationByType[type]?.page || 0;
    const newPage = currentPage + 1;
    const currentLimit = paginationByType[type]?.limit || 5;
    const res = await getProductType(type, newPage, currentLimit);

    if (res?.status === 'OK') {
      setProductsByType(prev => ({
        ...prev,
        [type]: [...prev[type], ...res.data]
      }));
      setPaginationByType(prev => ({
        ...prev,
        [type]: { page: newPage, limit: currentLimit, total: res.total }
      }));
    }
  };

  console.log('productsByType: ', productsByType);

  return (
    <Loading isPending={isPending || loading}>
      <WraperMain>
        <PerfectScrollbar>
          <div className='body' style={{ backgroundColor: '#efefef' }}>
            <div id="container" style={{ height: 'auto', width: '1270px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div
                  style={{
                    width: '30%',
                    marginRight: '10px',
                    // border: '3px outset',
                    padding: '15px',
                    background: 'rgba(128,128,128, 0.1)',
                    marginTop: '30px',
                    borderRadius: '3px',
                    height: 'fit-content',

                  }}>
                  <span style={{ fontSize: '15px', fontWeight: '700', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    Một Số Sản Phẩm Trưng Bày
                  </span>
                  <SliderComponent arrImages={[san1, san2, san3, san4, san5, san6, san7, san8, san9, san10, san11, san12, san13, san14, san15, san16, san17, san18, san19, san20]} />
                </div>
                <div style={{ width: '65%', marginTop: '30px', borderRadius: '5px', border: '3px solid white' }}>
                  <video autoPlay muted loop style={{ width: '100%', height: '100%' }}>
                    <source src={videohome1} />
                  </video>
                </div>
              </div>

              <div className='container-product'>
                {typeProduct && typeProduct.length > 0 && typeProduct.map((type) => (
                  <div key={type} className='type-product'>
                    <hr />
                    <div className='type'>
                      <h2>{type.toUpperCase()}</h2>
                    </div>
                    <WrapperProducts>
                      {productsByType[type] && productsByType[type].map((product) => (
                        <CardComponent
                          key={product._id}
                          countInStock={product.countInStock}
                          description={product.description}
                          image={product.image}
                          name={product.name}
                          price={product.price}
                          rating={product.rating}
                          type={product.type}
                          selled={product.selled}
                          discount={product.discount}
                          id={product._id}
                        />
                      ))}
                    </WrapperProducts>
                    <div className='btn-seemore'>
                      <WrapperButtonMore
                        style={{ display: 'flex', width: 'fit-content', borderRadius: '10px', marginTop: '5px' }}
                        textbutton='See more'
                        type="outline"
                        styleButton={{
                          border: `1px solid ${paginationByType[type]?.total === productsByType[type]?.length ? '#f5f5f5' : '#9255FD'}`,
                          // color: `${paginationByType[type]?.total === productsByType[type]?.length ? '#f5f5f5' : '#9255FD'}`,
                          width: '240px',
                          height: '38px',
                          borderRadius: '4px',
                          margin: '0px 0px 10px 0px'
                        }}
                        disabled={paginationByType[type]?.total === productsByType[type]?.length}
                        styleTextButton={{ fontWeight: 500, color: paginationByType[type]?.total === productsByType[type]?.length && '#fff' }}
                        onClick={() => loadMoreProductsByType(type)}
                      >
                      </WrapperButtonMore>
                    </div>

                  </div>
                ))}
              </div>
              <hr />
              <WrapperProducts>
                {productss?.data?.map((product) => (
                  <CardComponent
                    key={product._id}
                    countInStock={product.countInStock}
                    description={product.description}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    type={product.type}
                    selled={product.selled}
                    discount={product.discount}
                    id={product._id}
                  />
                ))}
              </WrapperProducts>

              <div className='btn-more'>
                <WrapperButtonMore
                  textbutton={isPreviousData ? 'Load more' : "See more"}
                  type="outline"
                  styleButton={{
                    border: `1px solid ${productss?.total === productss?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                    color: `${productss?.total === productss?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                    width: '240px',
                    height: '38px',
                    borderRadius: '4px',
                    margin: '0px 0px 10px 0px',



                  }}
                  disabled={productss?.total === productss?.data?.length || productss?.totalPage === 1}
                  styleTextButton={{ fontWeight: 500, color: productss?.total === productss?.data?.length && '#fff' }}
                  onClick={() => setLimit((prev) => prev + 6)}
                ></WrapperButtonMore>
              </div>
              <hr />

              <div className='footer'>
                <CustomerAndPartner />
              </div>
              <div className='contact'>
                <Footer />
              </div>
            </div>
          </div>

        </PerfectScrollbar>
      </WraperMain>




    </Loading>
  );
};

export default HomePage;
