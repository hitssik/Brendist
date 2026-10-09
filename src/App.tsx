import { useEffect, useState } from 'react'
import { Button } from './components/ui/Button'

// Демо-секція компонента Button. Решта сторінки поки що — статичний HTML в index.html.
export function App() {
  const [isSaving, setIsSaving] = useState(false)

  // Імітуємо запит до сервера: через 1.5 с loading вимикається.
  useEffect(() => {
    if (!isSaving) return
    const timer = setTimeout(() => setIsSaving(false), 1500)
    return () => clearTimeout(timer)
  }, [isSaving])

  return (
    <section id="components" aria-labelledby="components-title" className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
      <h2 id="components-title" className="text-3xl font-bold tracking-tight">
        Компоненти
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        Перший React-компонент цієї сторінки — <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">Button</code>.
        Спробуйте навігацію клавішею Tab, щоб побачити стан фокусу.
      </p>

      <div className="card mt-10 space-y-6 hover:translate-y-0 hover:shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button loading={isSaving} onClick={() => setIsSaving(true)}>
            {isSaving ? 'Зберігаю…' : 'Натисни: loading'}
          </Button>
        </div>
      </div>
    </section>
  )
}
