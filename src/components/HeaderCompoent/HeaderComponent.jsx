import { Badge, Button, Col, Popover } from 'antd';
import React, { useState, useEffect } from 'react';
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {
  LoginOutlined,
  PhoneFilled,
  UserSwitchOutlined,
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButttonInputSearch from '../ButtonInputSearch/ButttonInputSearch';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService';
import { resetUser } from '../../redux/slides/userSlide';
import Loading from '../LoadingComponent/Loading';
import { searchProduct } from '../../redux/slides/productSlide';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style';
import * as ProductService from '../../services/ProductService';
import './header.scss';
import { HiBars3 } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import logo3 from '../../../src/assets/images/logo3.png'
import { SearchOutlined } from '@ant-design/icons';


const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [search, setSearch] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const order = useSelector((state) => state.order);
  const [loading, setLoading] = useState(false);
  const [typeProducts, setTypeProducts] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === 'OK') {
      setTypeProducts(res?.data);
    }
  };

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  const handleNavigateLogin = () => {
    navigate('/sign-in');
  };

  const handleLogout = async () => {
    navigate('/');
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.name, user?.avatar]);

  const content = (
    <div>
      <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>User information</WrapperContentPopup>
      {user?.isAdmin && (
        <WrapperContentPopup onClick={() => handleClickNavigate('admin')}>System management</WrapperContentPopup>
      )}
      {!user?.isAdmin && (
        <WrapperContentPopup onClick={() => handleClickNavigate(`my-order`)}>My order</WrapperContentPopup>
      )}
      <WrapperContentPopup onClick={() => handleClickNavigate()}>Log out</WrapperContentPopup>
    </div>
  );

  const isLoggedIn = user?.id && user.access_token;

  const handleClickNavigate = (type) => {
    if (type === 'profile') {
      navigate('/profile-user');
    } else if (type === 'admin') {
      navigate('/system/admin');
    } else if (type === 'my-order') {
      navigate('/my-order', {
        state: {
          id: user?.id,
          token: user?.access_token,
        }
      });
    } else {
      handleLogout();
    }
    setIsOpenPopup(false);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  const handleCategory = () => {
    setIsHovering(!isHovering)
  }

  const test = () => {
    alert('cc')
  }

  return (
    <div className='container-header' style={{ height: '100%', width: '100%', display: 'flex', background: '#ff0000', justifyContent: 'center' }}>
      <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
        <Col span={5} style={{ marginLeft: '120px' }}>
          <WrapperTextHeader to='/'><img src={logo3} width="80px" height="80px" alt="logo" /></WrapperTextHeader>
          <WrapperTextHeader to='/' style={{ marginLeft: '-6px', fontSize: '10px', textDecoration: 'none' }}>CÔNG TY TNHH TM DV NỘI THẤT NDA</WrapperTextHeader>
        </Col>
        {!isHiddenSearch && (
          <Col span={13}>
            <div className='input-search'>
              <ButttonInputSearch
                size="large"
                bordered={false}
                textbutton="Search"
                placeholder="input search text"
                onChange={onSearch}
                backgroundColorButton="#5a20c1"
              />
              <span className='search-icon'>

                <SearchOutlined />
              </span>
            </div>

            <div className='tool-navigate'>
              {/* <div
                className='category'
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span ><HiBars3 style={{ fontSize: '20px' }} /> Danh mục sản phẩm {isHovering === false ? <FaAngleRight /> : <FaAngleDown />}</span>
                {isHovering && (
                  <div className='dropdown-content' >
                    <WrapperTypeProduct>
                      {typeProducts.map((item) => (
                        <TypeProduct name={item} key={item} color={'#FF0000'} />
                      ))}
                    </WrapperTypeProduct>
                  </div>
                )}
              </div> */}

              <div
                className='category'
              >
                <span style={{ cursor: 'pointer' }} onClick={() => { handleCategory() }} ><HiBars3 style={{ fontSize: '20px', }} /> Danh mục sản phẩm {isHovering === false ? <FaAngleRight /> : <FaAngleDown />}</span>
                {isHovering === true && (
                  <div className='dropdown-content' >
                    <WrapperTypeProduct>
                      {typeProducts.map((item) => (
                        <TypeProduct
                          name={item} key={item} color={'#FF0000'}
                          setIsHovering={setIsHovering}
                        />
                      ))}
                    </WrapperTypeProduct>
                  </div>
                )}
              </div>

              <div>|</div>
              <div>Trang chủ</div>
              <div>|</div>
              <div>Cửa hàng</div>
              <div>|</div>
              <div>Giới thiệu</div>
            </div>
          </Col>
        )}

        <Col span={6} style={{ display: 'flex', gap: '30px', marginTop: '5px' }}>
          <Loading isPending={loading}>
            <WrapperHeaderAccout style={{ marginLeft: '-60px', marginTop: '13px' }}>
              {userAvatar ? (
                <img src={userAvatar} alt="avatar" style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
              ) : (
                <LoginOutlined style={{ fontSize: '30px', color: '#000000' }} />
              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click" open={isOpenPopup}>
                    <div style={{ cursor: 'pointer', maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', color: '#000000' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                  </Popover>
                </>
              ) : (
                <div onClick={handleNavigateLogin} style={{ cursor: 'pointer', marginRight: '-100px' }}>
                  <WrapperTextHeaderSmall style={{ color: '#000000' }}>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall style={{ color: '#000000' }}>Tài khoản</WrapperTextHeaderSmall>
                    <CaretDownOutlined style={{ color: '#000000' }} />
                  </div>
                </div>
              )}
            </WrapperHeaderAccout>
          </Loading>
          {!isHiddenCart && !user?.isAdmin && isLoggedIn && (
            <div onClick={() => navigate('/order')} style={{ cursor: 'pointer', marginLeft: '-300px', marginTop: '13px' }}>
              <Badge count={order?.orderItems?.length} size="small">
                <ShoppingCartOutlined style={{ fontSize: '25px', color: '#000000' }} />
              </Badge>
              <WrapperTextHeaderSmall style={{ color: '#000000', fontSize: '10px', fontWeight: 'bold' }}>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
          )}
        </Col>
      </WrapperHeader>
    </div >
  );
};

export default HeaderComponent;
