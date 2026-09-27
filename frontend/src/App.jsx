import { useEffect, useState } from 'react'
import { api } from './api'
import ProjectForm from './components/ProjectForm.jsx'

export default function App() {
  const [status, setStatus] = useState('checking…')
  const [projects, setProjects] = useState([])
  const [error, setError] = useState(null)

  const load = async () => {
    try {
      const [h, list] = await Promise.all([api.health(), api.listProjects()])
      setStatus(h.status)
      setProjects(list)
      setError(null)
    } catch (err) {
      setStatus('offline')
      setError('Backend not reachable — start it on port 8000.')
    }
  }

  useEffect(() => { load() }, [])

  const create = async (data) => { await api.createProject(data); load() }
  const remove = async (id) => { await api.deleteProject(id); load() }

  return (
    <main className="container">
      <header>
        <h1>Interior Connect</h1>
        <span className={`badge ${status === 'ok' ? 'ok' : 'bad'}`}>API: {status}</span>
      </header>

      {error && <p className="error">{error}</p>}

      <div className="grid">
        <ProjectForm onCreate={create} />
        <section className="card">
          <h2>Projects</h2>
          {projects.length === 0 ? <p>No projects yet.</p> : (
            <ul className="list">
              {projects.map((p) => (
                <li key={p.id}>
                  <div>
                    <strong>{p.name}</strong>
                    <small>{p.client} · {p.room_type}{p.budget ? ` · ₹${p.budget.toLocaleString('en-IN')}` : ''}</small>
                  </div>
                  <button className="link" onClick={() => remove(p.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}
