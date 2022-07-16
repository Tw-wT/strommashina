import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa"
import Device from "../Device/Device"

const coordinates = [
	[44.932854, 34.067761]
]


const YandexMap = () => {
	return (
		<Device>
			{({ isMobile }) => {
				if (isMobile) {
					return (
						<YMaps>
							<div>
								<Map width={350} height={250} defaultState={{ center: [44.932854, 34.067761], zoom: 13, }} >
									<Placemark geometry={[44.932854, 34.067761]} />
								</Map>
							</div>
						</YMaps>
					)
				}
				return (
					<YMaps>
						<div>
							<Map width={960} height={500} defaultState={{ center: [44.932854, 34.067761], zoom: 13, }} >
								<Placemark geometry={[44.932854, 34.067761]}/>
							</Map>
						</div>
					</YMaps>
				)

			}}
		</Device>
	)
}

export default function Contacts() {
	return (
		<div className="container mx-auto px-6 p-10 max-w-screen-lg">
			<h4 className="text-3xl text-gray-800 font-bold mb-3">Контакты</h4>
			<div className={`flex justify-between flex-col`}>
				<div>
					<div className="flex">
						<FaMapMarkerAlt style={{ fontSize: 30, color: "#0a00fe" }} />
						<div className="ml-10">
							<span style={{ fontWeight: 700 }}>Адрес:</span>
							<span style={{ padding: 15 }}>РФ Республика Крым,г.Симферополь,
								ул.Генерала Васильева,34</span>
						</div>
					</div>
					<div className="flex mt-10">
						<FaClock style={{ fontSize: 25, color: "#0a00fe" }} />
						<div className="ml-10">
							<span style={{ fontWeight: 700 }}>График работы завода:</span>
							<span style={{ padding: 15 }}>пн.-пт. с 08:00 до 16:30</span>
						</div>
					</div>
					<div className="flex mt-10">
						<FaEnvelope style={{ fontSize: 25, color: "#0a00fe" }} />
						<div className="ml-10">
							<span style={{ fontWeight: 700 }}>Электронная почта:</span>
							<a href="mailto: info.strommashina@yandex.ru" style={{ padding: 15 }}>info.strommashina@yandex.ru</a>
						</div>
					</div>
					<div className="flex mt-10 mb-10">
						<FaPhoneSquareAlt style={{ fontSize: 25, color: "#0a00fe" }} />
						<div className="ml-10">
							<span style={{ fontWeight: 700 }}>Связь по телефону:</span>
							<a href="tel:+79787402194" style={{ padding: 15 }}>+7 (978) 740-21-94</a>
						</div>
					</div>
				</div>
				<YandexMap />
			</div>
		</div>
	)
}