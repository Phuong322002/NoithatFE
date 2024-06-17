import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

const flickityOptions = {
    cellAlign: 'center',
    imagesLoaded: true,
    lazyLoad: 1,
    freeScroll: true,
    wrapAround: true,
    autoPlay: 6000,
    pauseAutoPlayOnHover: true,
    prevNextButtons: true,
    contain: true,
    adaptiveHeight: true,
    dragThreshold: 10,
    percentPosition: true,
    pageDots: false,
    rightToLeft: false,
    draggable: true,
    selectedAttraction: 0.1,
    parallax: 0,
    friction: 0.6,
    arrowShape: 'M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z',
};

const CustomerAndPartner = () => {
    const logos = [
        "https://noithatzear.vn/wp-content/uploads/2022/01/BUU-DIEN-TRUNG-TAM-PHU-MY-HUNG-BUU-DIEN-THANH-PHO-HO-CHI-MINH-CHI-NHANH-TONG-CONG-TY-BUU-DIEN-VIET-NAM-1.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/BV-da-khoa-buu-dien-1.jpg",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-CO-PHAN-GIAI-PHAP-THONG-MINH-IMG-1.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-CO-PHAN-INTELLIFE-1.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-CO-PHAN-XUAT-NHAP-KHAU-NAM-THAI-SON-1.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/cong-ty-TNHH-ritavo-1.jpg",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-TNHH-ITAPHOA.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-TNHH-LINE-GROUP.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-TNHH-GIAI-PHAP-MANG-EDT.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-TNHH-GALAXYONE.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-TNHH-DICH-VU-THUONG-MAI-YES4ALL.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-TNHH-DAU-NHON-TT-VIET-NAM.png",
        "https://noithatzear.vn/wp-content/uploads/2022/01/CONG-TY-CO-PHAN-XUAT-NHAP-KHAU-NAM-THAI-SON.png",
    ];

    return (
        <div className="section-content relative">
            <div className="container section-title-container" style={{ overflow: 'hidden' }}>
                <h2 className="section-title section-title-center" style={{ transform: 'skewX(-deg)' }}>
                    <b></b>
                    <span className="section-title-main" style={{ fontSize: '131%' }}>KHÁCH HÀNG và ĐỐI TÁC</span>
                    <b></b>
                </h2>
            </div>
            <div className="row" id="row-1924451923">
                <div id="col-1285341991" className="col small-12 large-12">
                    <div className="col-inner">
                        <div id="text-859718106" className="text" style={{ textAlign: 'center', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            <p>Zear tự hào trở thành đối tác chiến lược, đồng hành cùng sự phát triển của hơn <strong>100.000</strong> doanh nghiệp trong và ngoài nước,</p>
                            <p>kiến tạo không gian văn phòng làm việc sang trọng &amp; đẳng cấp trong 10 năm qua.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="row-904549597">
                <div id="col-1273352166" className="col small-12 large-12">
                    <div className="col-inner">
                        <div className="row" id="row-406352084">
                            <div id="col-899876853" className="col small-12 large-12">
                                <div className="col-inner">
                                    <div className="slider-wrapper relative" id="slider-748656493">
                                        <Flickity className={'carousel'} elementType={'div'} options={flickityOptions}>
                                            {logos.map((logo, index) => (
                                                <div className="ux-logo has-hover align-middle ux_logo inline-block" style={{ maxWidth: '100%', width: '130px', display: 'flex', gap: '10px', flexWrap: 'wrap' }} key={index}>
                                                    <div className="ux-logo-link block image-zoom" style={{ padding: '15px' }}>
                                                        <img src={logo} alt={`logo-${index}`} className="ux-logo-image block lazy-load-active" style={{ height: '100px' }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </Flickity>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerAndPartner;
