'use client'

import { Button } from "@/components/Button"
import Link from "next/link"

export default async function error() {
  return (
    <div className="error-page">
      <div className="text">
        <h1>500</h1>
        <p>
          Внутренняя ошибка сервера
        </p>
      </div>
      <Link href="/"><Button>Вернуться на главную</Button></Link>
    </div>
  )
}
