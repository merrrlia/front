import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-beige-100">
      {/* Hero Section */}
      <div className="bg-beige-200 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-beige-800 mb-4">О нашей кофейне</h1>
        <p className="text-lg text-beige-700 max-w-2xl mx-auto">
          Добро пожаловать в нашу уютную кофейню в самом сердце Астаны! Мы гордимся тем, что
          предлагаем вам лучшие сорта кофе, изысканную выпечку и атмосферу, где можно расслабиться и насладиться моментом.
        </p>
      </div>

      {/* About Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Placeholder */}
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Кофейня"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-beige-800 mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-beige-700 mb-6">
              Мы не просто кофейня — это место, где каждый гость чувствует себя как дома. Мы создаем
              уникальную атмосферу, сочетающую вкусный кофе, уютный интерьер и теплый прием.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-beige-700">
              <li>Лучшие сорта кофе, обжаренные с любовью</li>
              <li>Свежая выпечка, приготовленная каждое утро</li>
              <li>Удобное расположение в центре Астаны</li>
              <li>Индивидуальный подход к каждому клиенту</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-beige-300 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-beige-800 mb-4">Наши контакты</h2>
        <p className="text-beige-700 mb-4">Адрес: Улица Абая, 123, Астана</p>
        <p className="text-beige-700 mb-4">Телефон: +7 (777) 123-45-67</p>
        <p className="text-beige-700">Рабочие часы: Пн-Пт 08:00 - 20:00, Сб-Вс 10:00 - 22:00</p>
      </div>

      {/* Map Section */}
      <div className="bg-beige-200 py-16 px-6">
        <h2 className="text-3xl font-bold text-beige-800 text-center mb-6">Как нас найти</h2>
        {/* Карта 2ГИС */}
        <div className="w-full h-96 bg-gray-300 rounded-lg shadow-lg">
          {/* Вставьте интеграцию 2ГИС здесь */}
          <p className="text-center text-gray-600 pt-40">Здесь будет карта 2ГИС</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-beige-400 py-6 text-center">
        <p className="text-beige-800 text-sm">
          © 2025 Кофейня в Астане. Все права защищены.
        </p>
      </footer>
    </div>
  );
};

export default About;
