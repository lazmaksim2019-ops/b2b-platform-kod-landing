'use client'

import { motion } from 'framer-motion'
import { Star, Zap, Users, Award } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  return (
<section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50/50 dark:bg-zinc-900/50">
      {/* Animated background circles */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main content */}
        <div className="text-center mb-12">
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
            <span className="text-4xl md:text-6xl lg:text-7xl block mt-2 text-gray-600 dark:text-gray-400">
              с платформой К-О-Д
            </span>
          </motion.h1>
          
          <h2 className="text-cyan-700 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm mt-6 mb-4">
            Интеллектуальная автоматизация B2B
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto"
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
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 dark:text-gray-300 transition-all duration-300 bg-white dark:bg-zinc-800 rounded-full border border-gray-200 dark:border-zinc-700 hover:shadow-md hover:shadow-gray-200/30 hover:scale-105"
          >
            <Star className="w-5 h-5 mr-2" />
            Пройти тест
          </a>
        </motion.div>

        {/* Stats Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-6 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">
                  <AnimatedCounter value={20} suffix="+" /> ч
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">в неделю</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Экономия времени</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Освободите до <strong>20 часов</strong> в неделю для каждого сотрудника за счёт автоматизации рутины.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group p-6 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">
                  <AnimatedCounter value={3} suffix="x" />
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">больше заказов</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Масштабирование</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Обрабатывайте в <strong>3 раза</strong> больше заказов без увеличения штата.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group p-6 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600">
                  <AnimatedCounter value={25} suffix="%" />
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">рост конверсии</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Рост выручки</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Увеличьте конверсию на <strong>15–25%</strong> за счёт умных рекомендаций ИИ.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}