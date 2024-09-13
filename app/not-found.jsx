'use client'

import { Button } from "@/components/Button"
import Link from "next/link"

export default async function error() {
  return (
    <div className="error-page">
      <div className="text">
        <h1>404</h1>
        <p>
          Страница не найдена
        </p>
      </div>
      <Link href="/"><Button>Вернуться на главную</Button></Link>
    </div>
  )
}
