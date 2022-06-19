import Device from "../Device/index"
import Link from "next/link"

export default function Content() {

	const articles = [
		{ id: 1, title: "Строммашина", desc: "ООО «СТРОММАШИНА» основано в 2009 году и является преемником по изготовлению оборудования Симферопольского машиностроительного завода", img: "https://phonoteka.org/uploads/posts/2021-05/1621723797_25-phonoteka_org-p-industrialnii-fon-dlya-prezentatsii-27.jpg" },
		{ id: 2, title: "Вид деятельности", desc: "Основным видом деятельности является изготовление оборудования для производства керамического кирпича (послепрессовая часть). Это автомат резательный СП-5М для одностадийной резки глиняного бруса пластического формования.", img: "https://static.vecteezy.com/system/resources/previews/000/656/048/original/vector-worker-on-car-factory.jpg", detail: '/sp5m' },
		{ id: 3, title: "Оборудование", desc: "Предприятие оснащено универсальным оборудованием,позволяющим изготавливать сложные детали и узлы различных машин и механизмов.", img: "https://f.nordiskemedier.dk/2f8j8w4fww2e81cb.jpg" },

		{ id: 4, title: "Коллектив", desc: "Своевременное и качественное выполнение договоров обеспечивает коллектив,состоящий из специалистов высокой квалификации.", img: "https://www.zingoy.com/blog/wp-content/uploads/2020/04/imgonline-com-ua-resize-93ooyUiUJk1zepqP-compressed.jpg" }
	]

	return (
		<Device>
			{({ isMobile }) => {
				if (isMobile) {
					return (
						<section className="container mx-auto px-6 p-10 max-w-screen-xl">
							{articles.map(article => (
								<div className="flex items-center flex-wrap mb-20 gap-3.5" key={article.id}>
									<div className="w-full md:w-1/2">
										<h4 className="text-3xl text-gray-800 font-bold mb-3">{article.title}</h4>
										<p className="text-gray-600 mb-8">{article.desc}</p>
										{article.detail ? <Link href={article.detail}><a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Подробнее</a></Link> : null}
									</div>
									<div className="w-full md:w-1/2">
										<img className="max-h-72" style={{ borderRadius: '50px' }} src={article.img} alt="Monitoring" />
									</div>
								</div>
							))}
						</section>
					)
				}
				return (
					<section className="container mx-auto px-6 p-10 max-w-screen-xl">

						{articles.map(article => (
							article.id % 2 === 0 ?
								<div className="flex items-center flex-wrap mb-20" key={article.id}>
									<div className="w-full md:w-1/2">
										<img className="max-h-96 min-w-full" style={{ borderRadius: '50px' }} src={article.img} alt="Reporting" />
									</div>
									<div className="w-full md:w-1/2 pl-10">
										<h4 className="text-3xl text-gray-800 font-bold mb-3">{article.title}</h4>
										<p className="text-gray-600 mb-8">{article.desc}</p>
										{article.detail ? <Link href={article.detail}><a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Подробнее</a></Link> : null}
									</div>
								</div>
								:
								<div className="flex items-center flex-wrap mb-20" key={article.id}>
									<div className="w-full md:w-1/2">
										<h4 className="text-3xl text-gray-800 font-bold mb-3">{article.title}</h4>
										<p className="text-gray-600 mb-8">{article.desc}</p>
										{article.detail ? <Link href={article.detail}><a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Подробнее</a></Link> : null}
									</div>
									<div className="w-full md:w-1/2">
										<img className="max-h-96 min-w-full" style={{ borderRadius: '50px' }} src={article.img} alt="Monitoring" />
									</div>
								</div>

						))}
					</section>
				)
			}}
		</Device>
	)
}