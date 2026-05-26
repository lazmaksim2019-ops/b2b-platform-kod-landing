export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Платформа К-О-Д</h3>
            <p className="text-sm text-gray-400">
              Интеллектуальная платформа для автоматизации бизнес-процессов B2B-компаний.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Калькулятор</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">Тест</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вебинары</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Правовая информация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Оферта</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Платформа К-О-Д. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.684 0H8.316C3.732 0 0 3.732 0 8.316v7.368C0 20.268 3.732 24 8.316 24h7.368C20.268 24 24 20.268 24 15.684V8.316C24 3.732 20.268 0 15.684 0zm3.6 16.932h-1.548c-.66 0-.864-.516-2.052-1.704-1.032-1.008-1.488-1.14-1.74-1.14-.36 0-.456.144-.456.852v1.572c0 .48-.144.744-1.368.744-2.016 0-4.248-1.224-5.796-3.516C4.14 11.268 3.6 9.372 3.6 8.652c0-.348.156-.516.516-.516h1.548c.516 0 .708.264.912.888.576 1.86 1.548 3.54 1.944 3.54.156 0 .228-.072.228-.576v-2.22c-.06-.996-.588-1.068-.588-1.428 0-.168.144-.312.372-.312h2.448c.312 0 .42.156.42.516v2.784c0 .312.144.42.228.42.18 0 .336-.108.672-.444.828-.936 1.416-2.376 1.416-2.376.084-.192.24-.348.516-.348h1.548c.372 0 .48.192.372.588-.156.744-2.016 3.024-2.016 3.024-.156.252-.204.372 0 .648.144.24.648.792.972 1.14.6.672 1.068 1.224 1.068 1.584 0 .24-.108.48-.744.48z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}