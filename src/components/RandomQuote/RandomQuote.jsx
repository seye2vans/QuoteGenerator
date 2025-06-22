"use client"

import { useState, useEffect } from "react"
import "./randomQuote.css"
import twitter_icon from "../assets/twitter.jpg"
import reload_icon from "../assets/reload.jpg"

const RandomQuote = () => {
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState({
    text: "Difficulties strengthen the mind, as labor does the body.",
    author: "Seneca",
  })
  const [loading, setLoading] = useState(false)

  // Fetch multiple quotes on component mount
  useEffect(() => {
    fetchQuotes()
  }, [])

  async function fetchQuotes() {
    try {
      setLoading(true)
      // Fetch multiple quotes at once
      const response = await fetch("https://api.quotable.io/quotes?limit=50")
      const data = await response.json()

      if (data.results && data.results.length > 0) {
        setQuotes(data.results)
        // Set the first quote as default
        setQuote({
          text: data.results[0].content,
          author: data.results[0].author,
        })
      }
    } catch (error) {
      console.error("Error fetching quotes:", error)
      // Fallback quotes if API fails
      const fallbackQuotes = [
        {
          content: "The only way to do great work is to love what you do.",
          author: "Steve Jobs",
        },
        {
          content: "Life is what happens to you while you're busy making other plans.",
          author: "John Lennon",
        },
        {
          content: "The future belongs to those who believe in the beauty of their dreams.",
          author: "Eleanor Roosevelt",
        },
        {
          content: "It is during our darkest moments that we must focus to see the light.",
          author: "Aristotle",
        },
        {
          content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          author: "Winston Churchill",
        },
      ]
      setQuotes(fallbackQuotes)
      setQuote({
        text: fallbackQuotes[0].content,
        author: fallbackQuotes[0].author,
      })
    } finally {
      setLoading(false)
    }
  }

  const random = async () => {
    if (quotes.length > 0) {
      // Select from existing quotes
      const select = quotes[Math.floor(Math.random() * quotes.length)]
      setQuote({
        text: select.content,
        author: select.author,
      })
    } else {
      // Fetch a new random quote if no quotes available
      try {
        setLoading(true)
        const response = await fetch("https://api.quotable.io/random")
        const data = await response.json()
        setQuote({
          text: data.content,
          author: data.author,
        })
      } catch (error) {
        console.error("Error fetching random quote:", error)
      } finally {
        setLoading(false)
      }
    }
  }

  const twitter = () => {
    const tweet = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author.split(",")[0]}`
    window.open(tweet, "_blank")
  }

  return (
    <div className="container">
      <div className="quote">{loading ? "Loading..." : quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <img
              src={reload_icon || "/placeholder.svg"}
              onClick={() => random()}
              alt="Reload"
              style={{ cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.5 : 1 }}
            />
            <img
              src={twitter_icon || "/placeholder.svg"}
              onClick={() => twitter()}
              alt="Share on Twitter"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
