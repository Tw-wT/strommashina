import Device from "../Device/index"
import Link from "next/link"

export default function Content({ articles }) {
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