'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Алексей Иванов',
    role: 'Генеральный директор, ООО «ТехноПром»',
    text: 'После внедрения платформы К-О-Д время обработки заказов сократилось на 40%. Система окупилась за 3 месяца. Отдельная благодарность за seamless-интеграцию с нашей CRM.',
    rating: 5,
  },
  {
    name: 'Елена Соколова',
    role: 'CEO, «МаркетЛогистика»',
    text: 'Раньше уходило по 15 часов в неделю на сверку спецификаций. Теперь это делает ИИ-ассистент за 5 минут. Рекомендую всем B2B-компаниям.',
    rating: 5,
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Операционный директор, «СнабКомплект»',
    text: 'Ключевое преимущество — гибкость настройки. Мы смогли адаптировать платформу под наши уникальные бизнес-процессы без привлечения разработчиков.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Отзывы клиентов
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Узнайте, как платформа К-О-Д помогла другим компаниям
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="bg-slate-50 dark:bg-zinc-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-zinc-700">
                  <Quote className="w-10 h-10 text-indigo-400/50 mb-4" />
                  <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[current].name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {testimonials[current].name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonials[current].role}
                      </div>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setDirection(index > current ? 1 : -1); setCurrent(index) }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    index === current
                      ? 'bg-indigo-600 w-6'
                      : 'bg-gray-300 dark:bg-zinc-600 hover:bg-indigo-400'
                  }`}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
