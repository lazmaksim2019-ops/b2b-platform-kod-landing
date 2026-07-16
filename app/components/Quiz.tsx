'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, X } from 'lucide-react'

const quizSteps = [
  {
    id: 'company-type',
    question: 'Какой тип вашей компании?',
    options: [
      { id: 'wholesale', label: 'Оптовые продажи', icon: ArrowRight },
      { id: 'manufacturing', label: 'Производство', icon: ArrowRight },
      { id: 'distribution', label: 'Дистрибуция', icon: ArrowRight },
    ],
  },
  {
    id: 'pain-point',
    question: 'Какая ваша главная боль?',
    options: [
      { id: 'slow-processing', label: 'Долгая обработка заявок', icon: ArrowRight },
      { id: 'document-errors', label: 'Ошибки в документах', icon: ArrowRight },
      { id: 'customer-loss', label: 'Потеря клиентов', icon: ArrowRight },
    ],
  },
  {
    id: 'contact',
    question: 'Готовы получить персональное решение?',
    options: [
      { 
        id: 'yes', 
        label: 'Да, хочу оптимизировать бизнес', 
        icon: Check,
        isSubmit: true 
      },
      { 
        id: 'no', 
        label: 'Нет, спасибо', 
        icon: X,
        isSubmit: true 
      },
    ],
  },
]

function ProgressBar({ currentStep }: { currentStep: number }) {
  const progress = ((currentStep + 1) / quizSteps.length) * 100
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>Прогресс</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

function StepContent({
  currentStep,
  formData,
  updateForm,
}: {
  currentStep: number
  formData: { name: string; email: string; companyName: string }
  updateForm: (field: string, value: string) => void
}) {
  if (currentStep !== quizSteps.length - 1) return null

  return (
    <div className="mt-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="quiz-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    id="quiz-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-200 dark:border-zinc-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label htmlFor="quiz-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    id="quiz-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-200 dark:border-zinc-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label htmlFor="quiz-company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Название компании
                  </label>
                  <input
                    id="quiz-company"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => updateForm('companyName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-zinc-600 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600"
                  />
                </div>
              </div>
    </div>
  )
}

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
  })
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const currentQuestion = quizSteps[currentStep]

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const nextStep = () => {
    setAnswers(prev => ({ ...prev, [quizSteps[currentStep].id]: selectedOption }))
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedOption('')
    }
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
    setSelectedOption(answers[quizSteps[step]?.id] || '')
  }

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    setQuizSubmitted(true)
  }

  return (
    <section id="quiz" className="py-20 bg-white dark:bg-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Умный подбор решений
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Пройдите короткий тест и получите персональные рекомендации по автоматизации вашего бизнеса
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 md:p-12">
            <ProgressBar currentStep={currentStep} />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {currentQuestion.question}
              </h3>
              
              <div className="grid gap-4">
                {currentQuestion.options.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
                      selectedOption === option.id
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-500'
                    }`}
                  >
                    <option.icon className={`w-6 h-6 ${selectedOption === option.id ? 'text-white' : 'text-current'}`} />
                    <span className="text-lg font-medium">{option.label}</span>
                    {selectedOption === option.id && (
                      <Check className="w-5 h-5 text-white" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <StepContent currentStep={currentStep} formData={formData} updateForm={updateForm} />

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => goToStep(currentStep - 1)}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                  currentStep === 0 
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Назад
              </button>

              {currentStep === quizSteps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedOption || !formData.name || !formData.email}
                  className={`px-8 py-3 rounded-lg text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/30 ${
                    (!selectedOption || !formData.name || !formData.email) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Получить результаты
                </button>
              ) : selectedOption ? (
                <button
                  onClick={nextStep}
                  className="px-8 py-3 rounded-lg text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  Далее <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  disabled
                  className="px-8 py-3 rounded-lg text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-50 cursor-not-allowed"
                >
                  Выберите опцию
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {quizSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50"
            onClick={() => setQuizSubmitted(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 bg-white dark:bg-zinc-800 rounded-xl max-w-md w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-4">
              <Check className="w-12 h-12 text-emerald-600 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Готово!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
              Спасибо за прохождение теста. Наши специалисты анализируют ваши ответы и свяжутся с вами в ближайшее время.
            </p>
            <div className="text-center">
              <button
                onClick={() => setQuizSubmitted(false)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Закрыть
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}