import React, {useEffect} from 'react'
import './main.css'

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

//import image
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Vịnh Hạ Long',
    location: 'Quảng Ninh', 
    grade: 'Văn Hóa',
    fees: '3 Triệu',
    description: 'Là di sản Unesco nổi tiếng thế giới, Hạ Long là điểm sáng trong chuyến du lịch Việt Nam. Với mặt biển xanh ngọc bích cùng những dãy núi đá vôi, đây là điểm đến tuyệt vời để khám phá vẻ đẹp thiên nhiên.',
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Nhà thờ Dức Bà Sài Gòn',
    location: 'Tp. Hồ Chí Minh', 
    grade: 'Văn Hóa',
    fees: '3 Triệu',
    description: 'Được mệnh danh là trung tâm giải trí của Việt Nam, nơi đây có hàng ngàn trung tâm mua sắm, nhà hàng cùng cuộc sống về đêm nhộn nhịp. Sự pha trộn giữa văn hoá và lịch sử khiến cho thành phố trở thành điểm đến lý tưởng',
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Kinh thành Huế',
    location: 'Huế', 
    grade: 'Văn Hóa',
    fees: '3 Triệu',
    description: 'Cũng là một thành phố với giá trị lịch sử, Huế nằm cạnh dòng sông Hương xinh đẹp. Nơi đây từng là kinh thành của triều đại nhà Nguyễn vào thế kỷ 19. Cho đến nay, vẫn còn rất nhiều di tích lịch sử để lại.',
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Ẩm thực Nha Trang',
    location: 'Tp. Nha Trang', 
    grade: 'Ẩm thực',
    fees: '3 Triệu',
    description: 'Nha Trang cũng là thành phố được nhiều du khách lựa chọn khi muốn trải nghiệm hình thức du lịch ẩm thực. Tại các địa điểm ăn uống Nha Trang, bạn có thể dùng bữa với: bánh xèo, bánh cánh, bún cá, nem nướng, bánh căn, bún sứa…',
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Ẩm thực Hội An',
    location: 'Tp. Hội An', 
    grade: 'Ẩm thực',
    fees: '3 Triệu',
    description: 'Trải nghiệm ẩm thực Hội An hãy lựa chọn cho mình những món ăn đặc sản Hội An để thưởng thức như: mì Quảng, cao lầu, cơm gà, hoành thánh, bánh vạc, bánh ướt cuốn thịt nướng…',
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Ẩm thực miền Tây',
    location: 'Kiên Giang', 
    grade: 'Ẩm thực',
    fees: '3 Triệu',
    description: 'Du lịch ẩm thực miền Tây không thể không kể đến những món ngon đặc sản Kiên Giang nói chung và đặc sản Phú Quốc nói riêng. Ví dụ như: bún quậy, bánh khéo, bánh tét mật cật, ghẹ Hàm Ninh, bún kèn…',
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Núi Hàm Rồng',
    location: 'Sapa, Lào Cai', 
    grade: 'Du lịch',
    fees: '3 Triệu',
    description: 'Núi Hàm Rồng nằm ngay tại trung tâm thị trấn. Bạn có thể ở khách sạn gần khu du lịch Hàm Rồng để ngắm toàn cảnh Sapa, thung lũng Mường Hoa, Tả Phìn ẩn hiện trong sương khói...',
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Cầu Rồng',
    location: 'Đà Nẵng', 
    grade: 'Du lịch',
    fees: '3 Triệu',
    description: 'Cầu Rồng Đà Nẵng - địa điểm du lịch nổi tiếng, biểu tượng độc đáo của Đà Thành. Mỗi tuần, vào thời gian cố định, cây cầu sẽ phun lửa, phun nước vô cùng ấn tượng.',
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Hoa Đăng Ninh Kiều',
    location: 'Cần Thơ', 
    grade: 'Du lịch',
    fees: '3 Triệu',
    description: 'Ngoài khu chợ sôi nổi, tấp nập trao đổi mua bán, địa điểm du lịch Cần Thơ còn có rất nhiều những địa danh nổi tiếng đã đi vào thơ, ca. Thậm chí còn trở thành biểu tượng của thành phố mỗi khi nhắc tới',
  },
]

const Main = () => {
  //tạo react hook để add scroll animation...

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <section className="main container section">
      
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most vissited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key= {id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
