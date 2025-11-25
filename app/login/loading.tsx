"use client"
import { useState, useEffect } from "react"
import { Spinner } from "@/components/ui/spinner"

const slogans = [
  "Write your thoughts, shape your world.",
  "Read more, think deeper.",
  "A blog grows when you write consistently.",
  "Writing is thinking made visible.",
  "Read daily, write boldly.",
  "Your blog is your personal voice online.",
  "Words build stories; stories build connections.",
  "Read widely, write wisely.",
  "A maintained blog is a growing legacy.",
  "Write today, inspire tomorrow.",
  "Blogs thrive on honest writing.",
  "Reading fuels writing.",
  "Write often, improve always.",
  "A blog is a journey written in words.",
  "Readers follow consistency—keep the blog alive."
];


const Loading = () => {
  const [currentSlogan, setCurrentSlogan] = useState(slogans[Math.floor(Math.random() * slogans.length)])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan(slogans[Math.floor(Math.random() * slogans.length)])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Spinner className="size-8" />
      <p className="text-gray-500 mt-4">{currentSlogan}</p>
    </div>
  )
}

export default Loading;
