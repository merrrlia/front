import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FFF7EB] to-[#FAE3C6] text-gray-800">
            {/* Hero Section with Astana Background */}
            <div
                className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-center text-white"
                style={{
                    backgroundImage:
                        "url('https://cdn2.tu-tu.ru/image/pagetree_node_data/1/18ac5e7d399b72b932cf0a64378dc7ad/')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <h1 className="relative text-5xl font-extrabold mb-4 z-10">
                    О нашей кофейне
                </h1>
                <p className="relative text-xl max-w-3xl mx-auto z-10">
                    Добро пожаловать в нашу уютную кофейню в самом сердце
                    Астаны! Лучшие сорта кофе, изысканная выпечка и комфортная
                    атмосфера ждут вас.
                </p>
            </div>

            {/* About Section */}
            <div className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="overflow-hidden rounded-lg shadow-2xl">
                        <img
                            src="https://www.shutterstock.com/image-photo/brighton-boston-ma-january-15-600nw-2272729987.jpg"
                            alt="Кофейня"
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Почему выбирают нас?
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Мы создаем уникальную атмосферу, где каждый гость
                            чувствует себя как дома. Вкусный кофе, уютный
                            интерьер и теплый прием — наша визитная карточка.
                        </p>
                        <ul className="list-none space-y-4">
                            <li className="flex items-center">
                                <span className="text-3xl text-[#8B4513] mr-4">
                                    ☕
                                </span>
                                <p className="text-lg">
                                    Лучшие сорта кофе, обжаренные с любовью
                                </p>
                            </li>
                            <li className="flex items-center">
                                <span className="text-3xl text-[#8B4513] mr-4">
                                    🥐
                                </span>
                                <p className="text-lg">
                                    Свежая выпечка, приготовленная каждое утро
                                </p>
                            </li>
                            <li className="flex items-center">
                                <span className="text-3xl text-[#8B4513] mr-4">
                                    📍
                                </span>
                                <p className="text-lg">
                                    Удобное расположение в центре Астаны
                                </p>
                            </li>
                            <li className="flex items-center">
                                <span className="text-3xl text-[#8B4513] mr-4">
                                    😊
                                </span>
                                <p className="text-lg">
                                    Индивидуальный подход к каждому клиенту
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-[#8B4513] text-white py-20 px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-6">Наши контакты</h2>
                <p className="text-lg mb-4">
                    📍 Адрес: Улица Абая, 123, Астана
                </p>
                <p className="text-lg mb-4">📞 Телефон: +7 (777) 123-45-67</p>
                <p className="text-lg">
                    🕒 Рабочие часы: Пн-Пт 08:00 - 20:00, Сб-Вс 10:00 - 22:00
                </p>
            </div>

            {/* Map Section */}
            <div className="py-20 px-6 ">
                <h2 className="text-4xl font-bold text-center mb-6">
                    Как нас найти
                </h2>
                <div className="ml-10 mr-10 h-96 bg-gray-300 rounded-lg shadow-2xl overflow-hidden">
                    <iframe
                        title="AITU Location"
                        className="w-full h-full border-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5858.883612217587!2d71.41737682076855!3d51.090722541272474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424581ea65463273%3A0x365bcad3027e42fd!2sAstana%20IT%20University!5e0!3m2!1sen!2skz!4v1703321569047!5m2!1sen!2skz"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#3E2723] text-white py-6 text-center">
                <p className="text-sm">
                    © 2025 Кофейня в Астане. Все права защищены.
                </p>
            </footer>
        </div>
    );
};

export default About;
