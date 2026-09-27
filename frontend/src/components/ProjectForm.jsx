import { useState } from 'react'

const empty = { name: '', client: '', room_type: '', budget: '' }

export default function ProjectForm({ onCreate }) {
  const [form, setForm] = useState(empty)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    await onCreate({ ...form, budget: form.budget ? Number(form.budget) : null })
    setForm(empty)
  }

  return (
    <form className="card form" onSubmit={submit}>
      <h2>New project</h2>
      <input name="name" placeholder="Project name" value={form.name} onChange={update} required />
      <input name="client" placeholder="Client" value={form.client} onChange={update} required />
      <input name="room_type" placeholder="Room type" value={form.room_type} onChange={update} required />
      <input name="budget" type="number" placeholder="Budget (₹)" value={form.budget} onChange={update} />
      <button type="submit">Add project</button>
    </form>
  )
}
