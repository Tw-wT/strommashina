

export default function Footer({ customClass }) {
	return (
		<footer className={`bg-gray-200 text-center lg:text-left w-full ${customClass ? customClass : ''}`}>
			<div className="text-gray-700 text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
				© 2022 Copyright:
				<a className="text-gray-800" href="https://localhost:3000/"> Строммашина</a>
				<p>РФ Республика Крым, г.Симферополь, ул.Генерала Васильева, 34 || ИНН:9102036500 || КПП:910201001 || ОГРН:1149102066723</p>
			</div>
		</footer>
	)
}