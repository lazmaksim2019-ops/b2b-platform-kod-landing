<p align="center">
  <div align="center">
    <img src="https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer" alt="Framer Motion" />
  </div>
</p>

<br />

<div align="center">
  <a href="https://platforma-kod.vercel.app">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="public/next.svg">
      <img alt="Платформа К-О-Д" src="public/next.svg" width="180" height="auto">
    </picture>
  </a>
</div>

<h1 align="center">
  Платформа К-О-Д
  <br />
  <span>Интеллектуальная автоматизация B2B бизнес-процессов</span>
</h1>

<p align="center">
  <strong>Современная лендинг-страница</strong> для платформы автоматизации бизнес-процессов.
  <br />
  Разработана на Next.js с анимациями, интерактивным калькулятором и динамическими компонентами.
</p>

<br />

---

## О проекте

**Платформа К-О-Д** — это интеллектуальная система автоматизации для владельцев и топ-менеджеров B2B-компаний. Сайт представляет собой одностраничный лендинг с полным набором маркетинговых блоков:

- **📊 Интерактивный калькулятор окупаемости** — динамический расчёт экономии времени и роста выручки
- **🎯 Умный подбор решений** — квиз для определения потребностей бизнеса
- **💎 Тарифные планы** — гибкая система ценообразования с помесячной и годовой оплатой
- **✨ Анимированные блоки** — плавные появления элементов на Framer Motion

## Tech Stack

| Технология | Назначение |
|------------|-----------|
| **Next.js 16** | React-фреймворк для серверного рендеринга и статической генерации |
| **React 19** | Библиотека пользовательских интерфейсов |
| **TypeScript** | Типизация и повышение надёжности кода |
| **Tailwind CSS 4** | Утилитарный CSS-фреймворк для быстрой стилизации |
| **Framer Motion 12** | Библиотека анимаций для React |
| **Lucide React** | Набор иконок в виде React-компонентов |

## Структура проекта

```
landing-page/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Навигация с эффектом скролла
│   │   ├── Hero.tsx         # Главный экран с анимациями
│   │   ├── Calculator.tsx   # Калькулятор окупаемости
│   │   ├── Quiz.tsx         # Интерактивный квиз
│   │   ├── Features.tsx     # Блок возможностей
│   │   ├── Pricing.tsx      # Тарифные планы
│   │   └── Footer.tsx       # Подвал с контактами
│   ├── globals.css          # Глобальные стили (Tailwind)
│   ├── layout.tsx           # Корневой layout
│   └── page.tsx             # Главная страница
├── public/                  # Статические ресурсы
├── next.config.ts           # Конфигурация Next.js
├── tailwind.config.ts       # Конфигурация Tailwind CSS
└── tsconfig.json            # Конфигурация TypeScript
```

## Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/lazmaksim2019-ops/Landing-Page.git

# Перейти в директорию проекта
cd Landing-Page/landing-page

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка проекта |
| `npm run start` | Запуск собранного проекта |
| `npm run lint` | Проверка кода линтером |

## Особенности

- **🎨 Современный дизайн** — градиенты, тени, анимации, адаптивная вёрстка
- **🌙 Тёмная тема** — автоматическая поддержка dark mode
- **📱 Полная адаптивность** — корректное отображение на всех устройствах
- **⚡ Производительность** — нулевой runtime CSS, оптимизированные изображения
- **🧩 Компонентный подход** — переиспользуемые React-компоненты с TypeScript

## Лицензия

MIT
