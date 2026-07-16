'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

const formatNumber = (num: number) => 
  new Intl.NumberFormat('ru-RU', { 
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(num)

const calculateResults = (employees: number, turnover: number) => {
  const timeSaved = employees * 4 // 4 hours saved per employee
  const revenueIncrease = turnover * 0.05 // 5% revenue increase
  return {
    timeSaved,
    revenueIncrease
  }
}

export default function Calculator() {
  const [employees, setEmployees] = useState(50)
  const [turnover, setTurnover] = useState(1000000)
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [modalSubmitted, setModalSubmitted] = useState(false)

  const { timeSaved, revenueIncrease } = calculateResults(employees, turnover)

  const employeesPercent = ((employees - 5) / (500 - 5)) * 100
  const turnoverPercent = ((turnover - 100000) / (10000000 - 100000)) * 100

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setModalSubmitted(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setModalSubmitted(false)
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
<section id="calculator" className="py-20 bg-slate-50 dark:bg-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
<motion.h2
  initial={{ opacity: 0 }}
  viewport={{ once: true }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
>
            Интерактивный калькулятор окупаемости
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Рассчитайте, сколько вы сэкономите, автоматизировав бизнес-процессы с платформой К-О-Д
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-xl">
            {/* Sliders */}
            <div className="space-y-8">
              <div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <label id="employees-label" className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        Количество сотрудников
                      </label>
                      <span className="text-2xl font-bold text-indigo-600">
                        {formatNumber(employees)} чел.
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="500"
                      value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      aria-labelledby="employees-label"
                      className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${employeesPercent}%, #e5e7eb ${employeesPercent}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>5</span>
                      <span>500</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-4">
                      <label id="turnover-label" className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        Объем заказов в месяц (руб.)
                      </label>
                      <span className="text-2xl font-bold text-emerald-600">
                        {formatNumber(turnover)} ₽
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="10000000"
                      step="50000"
                      value={turnover}
                      onChange={(e) => setTurnover(parseInt(e.target.value))}
                      aria-labelledby="turnover-label"
                      className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #059669 0%, #059669 ${turnoverPercent}%, #e5e7eb ${turnoverPercent}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>100 тыс.</span>
                      <span>10 млн</span>
                    </div>
                  </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white">
              <div className="text-center">
                <p className="text-lg mb-4">Прогнозируемая выгода</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-indigo-100 mb-1">Экономия времени в месяц</p>
                    <p className="text-4xl font-bold">
                      <AnimatedCounter value={timeSaved} suffix="" /> <span className="text-lg">часов</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-100 mb-1">Рост выручки в месяц</p>
                    <p className="text-4xl font-bold">
                      <AnimatedCounter value={revenueIncrease} suffix="" /> <span className="text-lg">₽</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Audit Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Получить детальный аудит
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Audit Request */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          />

          {modalSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 bg-white dark:bg-zinc-800 rounded-xl max-w-md w-full p-8 shadow-2xl text-center"
            >
              <Check className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Заявка отправлена!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Спасибо! Наш специалист свяжется с вами в ближайшее время.
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Закрыть
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 bg-white dark:bg-zinc-800 rounded-xl max-w-md w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                Получить детальный аудит
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                Оставьте свои контактные данные, и наш специалист свяжется с вами для обсуждения деталей.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="calc-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ваше имя *</label>
                  <input
                    id="calc-name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 dark:border-zinc-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label htmlFor="calc-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                  <input
                    id="calc-email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 dark:border-zinc-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label htmlFor="calc-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Телефон</label>
                  <input
                    id="calc-phone"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-zinc-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600"
                  />
                </div>

                <div className="flex gap-4 justify-center mt-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    disabled={!name || !email}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      )}

    </section>
  )
}