'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Users, Check, Zap } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Ключевые возможности платформы
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Наши решения помогают автоматизировать бизнес-процессы и увеличивать эффективность
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <TrendingUp className="w-10 h-10 text-indigo-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Рост выручки</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Увеличьте конверсию на 15-25% за счёт умных рекомендаций и автоматизации продаж.
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
            <Shield className="w-10 h-10 text-emerald-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Безопасность данных</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Защитите бизнес благодаря GDPR-совместимым решениям и шифрованию данных.
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
            <Users className="w-10 h-10 text-cyan-600" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Масштабирование</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Обрабатывайте в 3 раза больше заказов без увеличения штата благодаря автоматизации.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}