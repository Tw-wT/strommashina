import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Content from "../components/Content/Content"

export default function Sp5m() {

	let articles = [
		{ id: 1, title: "СП5М", desc: "Автомат резательный для резки кирпича СП-5М предназначен для одностадийной резки глиняного бруса пластического формирования сечением 65мм по ГОСТ 530-12, камня толщиной 128мм по ГОСТ 530-12, а также утолщенного кирпича толщиной 88мм.Автомат рассчитан для работы при температуре окружающей среды +5 ... +45 градусов C в в закрытом помещении.  Влажность формовочной массы должна быть в пределах 17...22%. В формовочной массе не должно быть механических включений более 3мм", img: "" }
	]

	return (
		<>
			<Navbar />
			<Content articles={articles} />
			<Footer />
		</>
	)
}