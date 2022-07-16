import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"


import tdNovoIerus from "../../assets/company-logo/logo_nikz3.png"
import smallStroiCeramica from "../../assets/company-logo/logo.png"
import taktika from "../../assets/company-logo/taktika.png"
import Image from "next/image"



const handleDragStart = (e) => e.preventDefault()
const responsive = {
	0: { items: 3 },
	568: { items: 3 },
	1024: { items: 3 }
}

const items = [
	<img height='100px !important' src={tdNovoIerus.src} data-value="1" onDragStart={handleDragStart} role="presentation" alt="тест" />,
	<img height='100px !important' src={smallStroiCeramica.src} data-value="2" onDragStart={handleDragStart} role="presentation" alt="тест" />,
	<img height='100px !important' src={taktika.src} data-value="2" onDragStart={handleDragStart} role="presentation" alt="тест" />,
	<img height='100px !important' src={tdNovoIerus.src} data-value="1" onDragStart={handleDragStart} role="presentation" alt="тест" />,
	<img height='100px !important' src={smallStroiCeramica.src} data-value="2" onDragStart={handleDragStart} role="presentation" alt="тест" />,
	<img height='100px !important' src={taktika.src} data-value="2" onDragStart={handleDragStart} role="presentation" alt="тест" />,
]

export default function Clients() {

	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={false}				
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{items.map((item) => (
					<SwiperSlide key={item.props.name}><Image layout="fill" height={100} src={item.props.src} key={item.name} alt="тест" /></SwiperSlide>
				))}
			</Swiper>
		</>
	)

}