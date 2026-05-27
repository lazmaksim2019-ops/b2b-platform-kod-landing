'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Settings, BarChart3, Rocket } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Аудит процессов',
    description: 'Анализируем текущие бизнес-процессы и выявляем узкие места',
  },
  {
    icon: Settings,
    title: 'Настройка платформы',
    description: 'Адаптируем решение под специфику вашего бизнеса',
  },
  {
    icon: BarChart3,
    title: 'Тестовый запуск',
    description: 'Запускаем пилотный проект и собираем первые результаты',
  },
  {
    icon: Rocket,
    title: 'Полный запуск',
    description: 'Масштабируем автоматизацию на все отделы компании',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Как это работает
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Всего 4 шага от аудита до полной автоматизации вашего бизнеса
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Step label */}
                <div className="absolute -top-2 right-0 md:right-auto md:-top-3 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
