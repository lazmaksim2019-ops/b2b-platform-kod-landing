export default function Footer() {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Платформа К-О-Д</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Интеллектуальная платформа для автоматизации бизнес-процессов B2B-компаний.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Возможности</a></li>
              <li><a href="#calculator" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Калькулятор</a></li>
              <li><a href="#quiz" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Тест</a></li>
              <li><a href="#pricing" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Тарифы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Блог</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Вебинары</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Документация</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Правовая информация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Оферта</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Платформа К-О-Д. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <a href="https://t.me/lazalex81" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-500 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a href="https://github.com/lazmaksim2019-ops" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-500 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}