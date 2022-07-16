import { Disclosure, Menu, Transition } from "@headlessui/react"
// import Link from "next/link"
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Link } from "react-scroll"

const navigation = [
	{ name: 'Главная', href: '/', current: true, to: "main" },
	{ name: 'Услуги', href: 'services', current: false, to: 'services' },
	// { name: 'Наши клиенты', href: 'clients', current: false, to: 'clients' },
	{ name: 'Контакты', href: 'contacts', current: false, to: "contacts" }

]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="z-50 max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
							
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
								<div className="flex-shrink-0 flex items-center" style={{ color: 'white' }}>
									<Link href='/'>ООО «СТРОММАШИНА»</Link>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												to={item.to}
												spy={true}
												smooth={true}
											>
												{<a className={classNames(
													item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium'
												)}
													aria-current={item.current ? 'page' : undefined}>{item.name}</a>}
											</Link>
										))}
										<a className="text-gray-300" href="tel:+7 (978) 740-21-94">+7 (978) 740-21-94</a>
									</div>
								</div>
							</div>

						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="z-50 px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									as="a"
									href={item.href}
									to={item.to}
									spy={true}
									smooth={true}
									className={classNames(
										item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Link>
							))}
							<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300" href="tel:+7 (978) 740-21-94">+7 (978) 740-21-94</a>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}