export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, companyName, source, message } = body

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      return Response.json(
        { success: false, error: 'Notifications not configured' },
        { status: 200 }
      )
    }

    const text = [
      `📩 *Новая заявка с лендинга*`,
      `👤 Имя: ${name || '—'}`,
      `📧 Email: ${email || '—'}`,
      `📞 Телефон: ${phone || '—'}`,
      `🏢 Компания: ${companyName || '—'}`,
      `📋 Источник: ${source || '—'}`,
      `💬 Сообщение: ${message || '—'}`,
      `🕐 ${new Date().toLocaleString('ru-RU')}`,
    ].join('\n')

    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      }
    )

    if (!res.ok) {
      const err = await res.text()
      console.error('Telegram API error:', err)
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return Response.json({ success: false, error: 'Internal error' }, { status: 500 })
  }
}
