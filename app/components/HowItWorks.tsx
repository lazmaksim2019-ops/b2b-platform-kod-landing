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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Как это работает
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Всего 4 шага от аудита до полной автоматизации вашего бизнеса
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop only, behind icons) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Wrapper: icon + badge — isolated positioning */}
                <div className="relative mb-6">
                  {/* Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shadow-md border-2 border-white dark:border-gray-900 z-20">
                    {index + 1}
                  </div>

                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg z-10 relative">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
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
