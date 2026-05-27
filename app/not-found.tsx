import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Страница не найдена | Платформа К-О-Д',
  description: 'Запрашиваемая страница не существует. Вернитесь на главную.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
      <div className="text-center px-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 mb-8">
          <span className="text-5xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Страница не найдена
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Возможно, страница была удалена или вы перешли по неверной ссылке.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-105 transition-all duration-300"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
