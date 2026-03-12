"use client"

import { useState } from "react";

export default function Diary() {
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const diaryData = {
      date: date,
      content: content
    };

    console.log("送信するデータ:", diaryData);
  }

  return (
    <div>
      <header className="my-4 text-center text-4xl">
        <h1>Diary Me</h1>
      </header>

      <main className="mx-40">
        <div className="my-2">
          <h2>
            日付入力
          </h2>
          <input 
            className="border rounded-md"
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="my-2">
          <h2>
            日記入力
          </h2>
          <textarea 
            className="border rounded-md w-full h-96"
            placeholder="ここに内容を入力してください..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
        </div>
        <div className="text-right">
          <button 
            onClick={handleSubmit}
            className="py-2 px-4 text-white bg-gray-500 hover:bg-gray-600 rounded-md">
            登録
          </button>
        </div>
      </main>
    </div>
  );
}
