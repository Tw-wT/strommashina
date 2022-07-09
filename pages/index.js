import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content/Content"
import img from "/assets/img/0-02-05-bbaac3579b08a27cae484a4d8b3fbbecbf72f6b5deb8a4cab50b902b2907bb25_f58f945316b33de7.jpg"

export default function Home() {

  const articles = [
    { id: 1, title: "Строммашина", desc: "ООО «СТРОММАШИНА» основано в 2009 году и является преемником по изготовлению оборудования Симферопольского машиностроительного завода", img: img.src },
    { id: 2, title: "Вид деятельности", desc: "Основным видом деятельности является изготовление оборудования для производства керамического кирпича (послепрессовая часть). Это автомат резательный СП-5М для одностадийной резки глиняного бруса пластического формования.", img: "https://static.vecteezy.com/system/resources/previews/000/656/048/original/vector-worker-on-car-factory.jpg", detail: '/sp5m' },
    { id: 3, title: "Оборудование", desc: "Предприятие оснащено универсальным оборудованием,позволяющим изготавливать сложные детали и узлы различных машин и механизмов.", img: "https://f.nordiskemedier.dk/2f8j8w4fww2e81cb.jpg" },

    { id: 4, title: "Коллектив", desc: "Своевременное и качественное выполнение договоров обеспечивает коллектив,состоящий из специалистов высокой квалификации.", img: "https://www.zingoy.com/blog/wp-content/uploads/2020/04/imgonline-com-ua-resize-93ooyUiUJk1zepqP-compressed.jpg" }
  ]

  return (
    <>
      <Navbar />
      <Content articles={articles} />
      <Footer />
    </>
  )
}
