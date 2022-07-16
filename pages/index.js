import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content/Content"
import imgFactory from "/assets/img/0-02-05-64400ea368e0a94846b30273397ff17afb89e3cd757d5139a1734e19e84bb3b6_36bb21038d434388.jpg"
import imgMain from "/assets/img/asdzxcqwef.jpg"
import imgEquipment from "/assets/img/0-02-05-d308a0a73a36d3076fb0be6a875f4db5b225d11c6a71912b00618fa007a8b79a_f2095162b8bb2071.jpg"
import Services from "../components/Services/Services"
import Contacts from "../components/Contacts/Contacts"

export default function Home() {
  const articles = [
    { id: 1, title: "Строммашина", desc: "ООО «СТРОММАШИНА» основано в 2009 году и является преемником по изготовлению оборудования Симферопольского машиностроительного завода", img: imgFactory.src },
    { id: 2, title: "Вид деятельности", desc: "Основным видом деятельности является изготовление оборудования для производства керамического кирпича (послепрессовая часть). Это автомат резательный СП-5М для одностадийной резки глиняного бруса пластического формования.", img: imgMain.src, detail: '/sp5m' },
    { id: 3, title: "Оборудование", desc: "Предприятие оснащено универсальным оборудованием,позволяющим изготавливать сложные детали и узлы различных машин и механизмов.", img: imgEquipment.src },
    { id: 4, title: "Коллектив", desc: "Своевременное и качественное выполнение договоров обеспечивает коллектив,состоящий из специалистов высокой квалификации.", img: "https://www.zingoy.com/blog/wp-content/uploads/2020/04/imgonline-com-ua-resize-93ooyUiUJk1zepqP-compressed.jpg" }
  ]

  return (
    <>
      <Head>
        <title>ООО Строммашина</title>
        <meta name="description" content="У нас вы можете заказать автомат резательный СП-5М" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="автомат, резки, кирпича, СП5М, шестерни,звездочки,валы,рубка, деталей,ремонт, оборудования, машиностроительный, завод, Крым, Россия, Симферополь в, строммашина" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div id="main">
        <Content articles={articles} />
      </div>
      <div id="services">
        <Services />
      </div>
      {/* <div id="clients">
        <Clients />
      </div> */}

      <div id="contacts">
        <Contacts />
      </div>
      <Footer />
    </>
  )
}
