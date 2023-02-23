'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState(email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 
      }
    })
  }
  return <div>
    <form>
      <input required type="email" value={email} onChange={ (e) => }
    </form>
  </div>
  const handleSubmit = () => {}
  
}