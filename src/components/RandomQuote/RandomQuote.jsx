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
          content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          author: "Winston Churchill",
        },
        {
          content: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt",
        },
        {
          content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
          author: "Ralph Waldo Emerson",
        },
        {
          content: "Don’t watch the clock; do what it does. Keep going.",
          author: "Sam Levenson",
        },
        {
          content: "Hardships often prepare ordinary people for an extraordinary destiny.",
          author: "C.S. Lewis",
        },
        {
          content: "Everything you’ve ever wanted is on the other side of fear.",
          author: "George Addair",
        },
        {
          content: "You miss 100% of the shots you don’t take.",
          author: "Wayne Gretzky",
        },
        {
          content: "I am not a product of my circumstances. I am a product of my decisions.",
          author: "Stephen R. Covey",
        },
        {
          content: "Act as if what you do makes a difference. It does.",
          author: "William James",
        },
        {
          content: "In three words I can sum up everything I've learned about life: it goes on.",
          author: "Robert Frost",
        },
        {
          content: "Life is really simple, but we insist on making it complicated.",
          author: "Confucius",
        },
        {
          content: "Life is 10% what happens to us and 90% how we react to it.",
          author: "Charles R. Swindoll",
        },
        {
          content: "It does not matter how slowly you go as long as you do not stop.",
          author: "Confucius",
        },
        {
          content: "To live is the rarest thing in the world. Most people exist, that is all.",
          author: "Oscar Wilde",
        },
        {
          content: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
          author: "Mark Twain",
        },
        {
          content: "Life isn’t about finding yourself. Life is about creating yourself.",
          author: "George Bernard Shaw",
        },
        {
          content: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
          author: "Marcus Aurelius",
        },
        {
          content: "Simplicity is the ultimate sophistication.",
          author: "Leonardo da Vinci",
        },
        {
          content: "The purpose of our lives is to be happy.",
          author: "Dalai Lama",
        },
        {
          content: "We accept the love we think we deserve.",
          author: "Stephen Chbosky",
        },
        {
          content: "Love all, trust a few, do wrong to none.",
          author: "William Shakespeare",
        },
        {
          content: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
          author: "Lao Tzu",
        },
        {
          content: "Where there is love there is life.",
          author: "Mahatma Gandhi",
        },
        {
          content: "To love and be loved is to feel the sun from both sides.",
          author: "David Viscott",
        },
        {
          content: "Love is composed of a single soul inhabiting two bodies.",
          author: "Aristotle",
        },
        {
          content: "The best thing to hold onto in life is each other.",
          author: "Audrey Hepburn",
        },
        {
          content: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
          author: "Dr. Seuss",
        },
        {
          content: "The giving of love is an education in itself.",
          author: "Eleanor Roosevelt",
        },
        {
          content: "True love begins when nothing is looked for in return.",
          author: "Antoine de Saint-Exupéry",
        },
        {
          content: "Success usually comes to those who are too busy to be looking for it.",
          author: "Henry David Thoreau",
        },
        {
          content: "Don’t be afraid to give up the good to go for the great.",
          author: "John D. Rockefeller",
        },
        {
          content: "I never dreamed about success. I worked for it.",
          author: "Estée Lauder",
        },
        {
          content: "Opportunities don't happen. You create them.",
          author: "Chris Grosser",
        },
        {
          content: "Success is walking from failure to failure with no loss of enthusiasm.",
          author: "Winston Churchill",
        },
        {
          content: "The secret of success is to do the common thing uncommonly well.",
          author: "John D. Rockefeller Jr.",
        },
        {
          content: "Don’t let yesterday take up too much of today.",
          author: "Will Rogers",
        },
        {
          content: "The only limit to our realization of tomorrow is our doubts of today.",
          author: "Franklin D. Roosevelt",
        },
        {
          content: "The harder you work for something, the greater you’ll feel when you achieve it.",
          author: "Unknown",
        },
        {
          content: "Do what you can, with what you have, where you are.",
          author: "Theodore Roosevelt",
        },
        {
          content: "Whether you think you can, or you think you can’t – you’re right.",
          author: "Henry Ford",
        },
        {
          content: "Discipline is the bridge between goals and accomplishment.",
          author: "Jim Rohn",
        },
        {
          content: "Your time is limited, so don’t waste it living someone else’s life.",
          author: "Steve Jobs",
        },
        {
          content: "Happiness is not something ready made. It comes from your own actions.",
          author: "Dalai Lama",
        },
        {
          content: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
          author: "Zig Ziglar",
        },
        {
          content: "You must be the change you wish to see in the world.",
          author: "Mahatma Gandhi",
        },
        {
          content: "Dream big and dare to fail.",
          author: "Norman Vaughan",
        },
        {
          content: "Push yourself, because no one else is going to do it for you.",
          author: "Unknown",
        },
        {
          content: "Start where you are. Use what you have. Do what you can.",
          author: "Arthur Ashe",
        },
        {
          content: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
          author: "Eleanor Roosevelt",
        },
        {
          content: "An unexamined life is not worth living.",
          author: "Socrates",
        },
        {
          content: "You become what you believe.",
          author: "Oprah Winfrey",
        }
      ];

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
