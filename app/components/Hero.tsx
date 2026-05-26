'use client'

import { motion } from 'framer-motion'
import { Star, Zap, Users, Award } from 'lucide-react'

export default function Hero() {
  return (
<section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50">
      {/* Animated background circles */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main content */}
        <div className="text-center mb-12">
<motion.h2
  initial={{ opacity: 0 }}
  viewport={{ once: true }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="text-cyan-500 font-semibold tracking-wider uppercase text-sm mb-4"
>
            Интеллектуальная автоматизация B2B
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600">
              Автоматизируйте
            </span>
            <br />
            свой бизнес
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl block mt-2 text-gray-600">
              с платформой К-О-Д
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-8 max-w-3xl mx-auto"
          >
            Платформа К-О-Д помогает владельцам и топ-менеджерам автоматизировать ключевые бизнес-процессы, 
            сокращать издержки и увеличивать выручку за счёт интеллектуальных алгоритмов и seamless-интеграций.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a 
            href="#calculator" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Рассчитать стоимость
          </a>
          <a 
            href="#quiz" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 transition-all duration-300 bg-white rounded-full border border-gray-200 hover:shadow-md hover:shadow-gray-200/30 hover:scale-105"
          >
            <Star className="w-5 h-5 mr-2" />
            Пройти тест
          </a>
        </motion.div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Award className="w-10 h-10 text-indigo-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Экономия времени</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Автоматизируйте рутинные задачи и освободите до 20 часов в неделю для каждого сотрудника.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Users className="w-10 h-10 text-emerald-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Масштабирование</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Обрабатывайте в 3 раза больше заказов без увеличения штата.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Zap className="w-10 h-10 text-cyan-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Рост выручки</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Увеличьте конверсию на 15-25% за счёт умных рекомендаций.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}