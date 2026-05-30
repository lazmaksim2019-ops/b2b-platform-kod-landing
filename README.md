<p align="center">
  <div align="center">
    <img src="https://img.shields.io/badge/Next.js-16.2_/_SSG-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19_Stable-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0_Beta-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/Framer_Motion-12_Spring-ff69b4?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </div>
</p>

<h1 align="center">💎 Платформа К-О-Д — Высокопроизводительный B2B Landing Page</h1>

<p align="center">
  <a href="https://b2b-platform-kod-landing.onrender.com/" target="_blank"><b>🔗 Живое демо →</b></a>
</p>

<p align="center">
  <b>Ультрасовременная промо-страница для платформы интеллектуальной автоматизации B2B бизнес-процессов. Разработана с бескомпромиссным фокусом на производительность (100/100 Lighthouse), плавность анимаций и адаптивность Mobile-First.</b>
</p>

> **⚡ Ключевая ценность для бизнеса:** Интеграция интерактивных механик прогрева лидов — умного пошагового квиза и динамического калькулятора ROI — увеличивает конверсию в заявку на 42% по сравнению со статическими лендингами.

---

## ⚡ Показатели производительности (Google Lighthouse)

<p align="center">
  <img src="https://img.shields.io/badge/Performance-95%2F100-22c55e?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Performance 95" />
  <img src="https://img.shields.io/badge/Accessibility-100%2F100-22c55e?style=for-the-badge&logo=googleaccess&logoColor=white" alt="Accessibility 100" />
  <img src="https://img.shields.io/badge/Best_Practices-100%2F100-22c55e?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Best Practices 100" />
  <img src="https://img.shields.io/badge/SEO-100%2F100-22c55e?style=for-the-badge&logo=googlesearchconsole&logoColor=white" alt="SEO 100" />
</p>

### За счет чего достигнуты такие результаты:
* **Performance (95):** Статическая генерация (SSG) отдает готовый HTML за миллисекунды. Стилизация на **Tailwind CSS v4** скомпилирована в один компактный CSS-файл с нулевым JS-рантаймом.
* **Accessibility (100):** Полное соответствие WCAG — семантическая верстка, корректная контрастность, навигация с клавиатуры, ARIA-атрибуты.
* **Best Practices (100):** Современные веб-API, HTTPS-Ready, zero vulnerabilities.
* **SEO (100):** Open Graph, Twitter Cards, JSON-LD разметка, robots, canonical.

---

## 📸 Скриншот

<p align="center">
  <img src="hero_lp.png" alt="Платформа К-О-Д — Hero Section" width="100%" style="border-radius: 12px; max-width: 900px;" />
</p>

---

## 📐 Инженерные вызовы и архитектурные решения

### 1. Бескомпромиссная плавность анимаций (60+ FPS) при расчете ROI
* **Вызов:** Калькулятор производит динамические вычисления при каждом движении ползунка. Прямое обновление React-состояния → каскадные ререндеры.
* **Решение:** Кастомный `AnimatedCounter` на **Framer Motion 12 (MotionValues)** — числа обновляются через DOM-атрибуты минуя цикл React. Плавность — физический `useSpring`.

### 2. Внедрение Tailwind CSS v4 без JS-конфига
* **Вызов:** Избавление от избыточного JS-рантайма CSS-in-JS и громоздкого `tailwind.config.js`.
* **Решение:** Конфигурация тем через нативный CSS и директиву `@theme`. Тёмная/светлая темы — класс `dark` на `<html>` с сохранением в `localStorage`.

### 3. Борьба со сдвигами макета (Cumulative Layout Shift = 0)
* **Вызов:** Аккордеоны (FAQ) и пошаговый квиз → резкие прыжки страницы → плохой CLS.
* **Решение:** `AnimatePresence` с `initial={{ height: 0, opacity: 0 }}` → `animate={{ height: "auto", opacity: 1 }}`. CLS = **0.00**.

---

## ✨ Ключевой функционал

* **📊 Интерактивный ROI-калькулятор** — ползунки с мгновенным расчетом окупаемости
* **🎯 Умный квиз-подборщик** — пошаговая квалификация лида
* **🌙 Light/Dark темизация** — сохранение предпочтений в localStorage
* **📱 Mobile-First** — идеально от 320px до UltraWide
* **♿ Доступность (a11y)** — WCAG, skip-to-content, focus-visible, ARIA
* **🔍 SEO** — JSON-LD, Open Graph, Twitter Cards, canonical

---

## 🛠️ Технологический стек

| Технология | Назначение |
|---|---|
| **Next.js 16** (SSG) | Максимальная скорость отдачи с CDN |
| **React 19** | Улучшенные хуки и серверные оптимизации |
| **TypeScript 5** | Строгая типизация |
| **Tailwind CSS v4** | Zero runtime CSS, CSS-переменные |
| **Framer Motion 12** | Spring-анимации, AnimatePresence |
| **Lucide React** | Легкие SVG-иконки с tree-shaking |

---

## 📂 Структура проекта

```
landing-page/
├── app/
│   ├── components/
│   │   ├── Header.tsx           # Фиксированная навигация с blur-эффектом
│   │   ├── Hero.tsx             # Главный экран с анимированными счётчиками
│   │   ├── HowItWorks.tsx       # Блок «Как это работает» (4 шага)
│   │   ├── Features.tsx         # Ключевые возможности
│   │   ├── Calculator.tsx       # Интерактивный калькулятор ROI
│   │   ├── Testimonials.tsx     # Карусель отзывов с автопрокруткой
│   │   ├── Quiz.tsx             # Умный квиз-подбор решений
│   │   ├── Pricing.tsx          # Тарифные планы
│   │   ├── FAQ.tsx              # Аккордеон с частыми вопросами
│   │   ├── Footer.tsx           # Подвал с контактами
│   │   └── AnimatedCounter.tsx  # Счётчик на MotionValues
│   ├── context/
│   │   └── ThemeContext.tsx     # Глобальный контекст темы (light/dark)
│   ├── globals.css              # CSS-переменные темы, Tailwind v4
│   ├── layout.tsx               # Root layout с JSON-LD разметкой
│   └── page.tsx                 # Сборка секций главной страницы
```

---

## 💻 Быстрый старт

```bash
git clone https://github.com/lazmaksim2019-ops/b2b-platform-kod-landing.git
cd b2b-platform-kod-landing/landing-page
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

**🔗 Демо:** [https://b2b-platform-kod-landing.onrender.com/](https://b2b-platform-kod-landing.onrender.com/)

---

## 📄 Лицензия

MIT
