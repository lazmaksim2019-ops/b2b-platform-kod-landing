'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const formatPrice = (price: number) => 
  new Intl.NumberFormat('ru-RU', { 
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(price)

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [popularPlan, setPopularPlan] = useState('')

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
        'Чат поддержка',
        'API доступ',
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
        'Индивидуальная интеграция',
        'Обучение и внедрение',
        'SLA гарантии',
      ],
    },
  ]

  const toggleBilling = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')
  }

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
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Выберите подходящий тариф для вашего бизнеса
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="max-w-md mx-auto mb-12 text-center">
          <div className="inline-flex rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === 'yearly' ? 'bg-indigo-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              Годовое
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(plan.priceMonthly)} ₽/мес
                </span>
                <span className="text-gray-500 dark:text-gray-400">/месяц</span>
                {billingCycle === 'yearly' && (
                  <div className="text-lg font-bold text-emerald-600">
                    {formatPrice(plan.priceYearly)} ₽/год <span className="text-sm text-gray-500">(экономия 2 месяца)</span>
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setPopularPlan(plan.id)}
                disabled={popularPlan === plan.id}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  popularPlan === plan.id
                    ? 'bg-indigo-600 text-white cursor-default' 
                    : 'bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white'
                }`}
              >
                {popularPlan === plan.id ? 'Выбрано' : 'Выбрать'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}