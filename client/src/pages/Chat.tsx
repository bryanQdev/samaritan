import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { supabase } from '../supabase'
import { useAuth } from '../context/AuthContext'

interface Message {
  id: string
  chat_id: string
  sender_id: string
  content: string
  created_at: string
}

export function Chat() {
  const { id } = useParams()
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchMessages() {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', id)
        .order('created_at', { ascending: true })

      if (data) setMessages(data)
    }

    fetchMessages()

    const subscription = supabase
      .channel(`chat-${id}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `chat_id=eq.${id}`
      }, (payload) => {
        setMessages((prev) => [...prev, payload.new as Message])
      })
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [id])

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  async function handleSend() {
    if (!newMessage.trim()) return

    await supabase.from('messages').insert({
      chat_id: id,
      sender_id: user?.uid,
      content: newMessage.trim()
    })

    setNewMessage('')
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="min-h-screen">
      <div className="px-4 md:px-8 py-4 navbar-blur">
        <NavBar />
      </div>
      <div className="max-w-lg mx-auto px-4 py-10">
        <h1 className="text-white text-2xl font-bold mb-6">Conversación</h1>
        <div className="border border-zinc-700/50 rounded-xl p-6 flex flex-col" style={{ height: '60vh', background: 'rgba(255,255,255,0.02)' }}>
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto flex flex-col gap-3 mb-4">
            {messages.length === 0 && (
              <p className="text-zinc-500 text-center text-sm">Inicio de la conversación</p>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender_id === user?.uid ? 'justify-end' : 'justify-start'}`}>
                <span className={`px-4 py-2 rounded-xl text-sm max-w-xs font-semibold ${msg.sender_id === user?.uid ? 'bg-green-500 text-black' : 'bg-zinc-700 text-zinc-100'}`}>
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-zinc-700 text-white placeholder-zinc-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSend}
              className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}