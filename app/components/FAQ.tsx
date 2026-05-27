'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Какие бизнес-процессы можно автоматизировать?',
    answer: 'Платформа К-О-Д автоматизирует обработку заказов, управление спецификациями, документооборот, согласование счетов, коммуникацию с поставщиками и аналитику продаж. Мы поддерживаем интеграцию с большинством популярных CRM и ERP-систем.',
  },
  {
    question: 'Сколько времени занимает внедрение?',
    answer: 'Базовое внедрение занимает от 2 до 4 недель. Включает аудит процессов, настройку платформы, интеграцию с текущими системами и обучение сотрудников. Пилотный запуск возможен уже через 7 дней.',
  },
  {
    question: 'Подходит ли платформа для малого бизнеса?',
    answer: 'Да, у нас есть гибкие тарифные планы для компаний любого размера. Для малого бизнеса доступен тариф «Базовый», который включает все ключевые функции автоматизации. Вы всегда можете перейти на более продвинутый тариф по мере роста.',
  },
  {
    question: 'Как обеспечивается безопасность данных?',
    answer: 'Мы используем шифрование данных на всех этапах (AES-256), регулярное резервное копирование, многофакторную аутентификацию и соответствуем требованиям GDPR. Все данные хранятся на серверах, расположенных на территории РФ.',
  },
  {
    question: 'Можно ли протестировать платформу перед покупкой?',
    answer: 'Да, мы предоставляем бесплатный тестовый период на 14 дней с полным доступом ко всем функциям выбранного тарифа. Также вы можете запросить персональную демонстрацию для вашей команды.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Часто задаваемые вопросы
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Всё, что нужно знать о платформе К-О-Д перед началом работы
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-zinc-700 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
