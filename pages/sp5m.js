import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Content from "../components/Content/Content"
import sp5m from "../assets/img/IMG_3567-rotated (1).jpg"
import Head from "next/head"

export default function Sp5m() {

	let articles = [
		{ id: 1, title: "СП5М", desc: "Автомат резательный для резки кирпича СП-5М предназначен для одностадийной резки глиняного бруса пластического формирования сечением 65мм по ГОСТ 530-12, камня толщиной 128мм по ГОСТ 530-12, а также утолщенного кирпича толщиной 88мм.Автомат рассчитан для работы при температуре окружающей среды +5 ... +45 градусов C в в закрытом помещении.  Влажность формовочной массы должна быть в пределах 17...22%. В формовочной массе не должно быть механических включений более 3мм", img: sp5m.src }
	]

	return (
		<>
			<Head>
				<title>Автомат резательный СП-5М</title>
				<meta name="description" content="Производим автомат резательный для резки кирпича СП-5М" />
				<meta name="robots" content="index, follow" />
				<meta name="keywords" content="автомат, резки, кирпича, СП5М, шестерни,звездочки,валы,рубка, деталей,ремонт, оборудования, машиностроительный, завод, Крым, Россия, Симферополь в, строммашина" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<Content articles={articles} />
			<Footer customClass="absolute bottom-0" />
		</>
	)
}