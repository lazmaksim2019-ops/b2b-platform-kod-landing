'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(price)

const plans = [
  {
    id: 'basic',
    name: 'Базовый',
    priceMonthly: 5000,
    priceYearly: 50000,
    features: [
      'Доступ к платформе',
      'Базовая аналитика',
      '5 пользователей',
      'Email поддержка',
    ],
  },
  {
    id: 'professional',
    name: 'Профессиональный',
    priceMonthly: 15000,
    priceYearly: 150000,
    features: [
      'Все возможности базового тарифа',
      'Продвинутая аналитика',
      'Неограниченное количество пользователей',
      'Чат поддержка 24/7',
      'API доступ',
      'Индивидуальная интеграция',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceMonthly: 30000,
    priceYearly: 300000,
    features: [
      'Все возможности профессионального',
      'Персональный менеджер',
      'Обучение и внедрение',
      'SLA гарантии',
      'Приоритетная поддержка',
    ],
  },
]

function PriceDisplay({ plan, billingCycle }: { plan: typeof plans[number]; billingCycle: 'monthly' | 'yearly' }) {
  const monthlyPrice = plan.priceMonthly
  const yearlyPrice = plan.priceYearly
  const monthlyWhenYearly = Math.round(yearlyPrice / 12)
  const savings = monthlyPrice * 12 - yearlyPrice

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={billingCycle}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
      >
        {billingCycle === 'monthly' ? (
          <div className="mb-1">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              {formatPrice(monthlyPrice)}
            </span>
            <span className="text-gray-500 dark:text-zinc-400 ml-1">₽/мес</span>
          </div>
        ) : (
          <div className="mb-1">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              {formatPrice(yearlyPrice)}
            </span>
            <span className="text-gray-500 dark:text-zinc-400 ml-1">₽/год</span>
            <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">
              {formatPrice(monthlyWhenYearly)} ₽/мес при оплате за год
            </div>
            {savings > 0 && (
              <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                экономия {formatPrice(savings)} ₽
              </div>
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Тарифные планы
          </motion.h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Выберите подходящий тариф для вашего бизнеса
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="max-w-md mx-auto mb-12 text-center">
          <div className="inline-flex rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Годовое
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const isPopular = plan.id === 'professional'

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col rounded-2xl p-8 shadow-sm border transition-all duration-300 ${
                  isPopular
                    ? 'md:scale-105 bg-white dark:bg-zinc-800 border-indigo-200 dark:border-indigo-800 shadow-indigo-200/50 dark:shadow-indigo-900/30'
                    : 'bg-white dark:bg-zinc-800/60 border-zinc-200 dark:border-zinc-700/50 hover:shadow-md'
                }`}
              >
                {/* Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      ХИТ ПРОДАЖ
                    </span>
                  </div>
                )}

                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-2 ${
                  isPopular ? 'mt-2' : ''
                }`}>
                  {plan.name}
                </h3>

                <div className="mb-6 min-h-[100px]">
                  <PriceDisplay plan={plan} billingCycle={billingCycle} />
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        isPopular ? 'text-indigo-600 dark:text-indigo-400' : 'text-emerald-600 dark:text-emerald-400'
                      }`} />
                      <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {isPopular ? (
                  <button
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25"
                  >
                    Начать бесплатный период
                  </button>
                ) : (
                  <button
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-zinc-700 dark:text-zinc-300 bg-transparent border-2 border-zinc-200 dark:border-zinc-700 hover:border-indigo-600 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 active:scale-[0.98] transition-all duration-300"
                  >
                    Подробнее
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
