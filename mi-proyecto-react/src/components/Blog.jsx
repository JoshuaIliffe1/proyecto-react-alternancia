/** // Ejercicio 4 - Sistema de posts dinámico
 * Blog.jsx — Exercise 4
 * Dynamic post management (mini-CMS).
 * - Form to create new posts (title + description)
 * - Posts rendered as PostCard components
 * - Supports edit, delete, and highlight per post
 * All state lives here and flows down to PostCard as props.
 */
import { useState } from 'react'
import PostCard from './PostCard'

function Blog() {
  /** List of post objects: { id, title, description, highlighted } */
  const [posts, setPosts] = useState([])

  /** New-post form fields */
  const [newTitle, setNewTitle] = useState('')
  const [newDesc,  setNewDesc]  = useState('')

  /** Append a new post; ignore if title is empty */
  function handleAddPost(e) {
    e.preventDefault()
    if (!newTitle.trim()) return
    const post = {
      id:          Date.now(),
      title:       newTitle.trim(),
      description: newDesc.trim(),
      highlighted: false,
    }
    setPosts(prev => [post, ...prev])
    setNewTitle('')
    setNewDesc('')
  }

  /** Replace a post's title/description after inline edit */
  function handleUpdate(id, changes) {
    setPosts(prev =>
      prev.map(p => p.id === id ? { ...p, ...changes } : p)
    )
  }

  /** Remove a post by id */
  function handleDelete(id) {
    setPosts(prev => prev.filter(p => p.id !== id))
  }

  /** Toggle the highlighted flag for a post */
  function handleHighlight(id) {
    setPosts(prev =>
      prev.map(p => p.id === id ? { ...p, highlighted: !p.highlighted } : p)
    )
  }

  return (
    <div className="blog-container">
      {/* New post creation form */}
      <div className="blog-form-card">
        <h3>Nueva Publicación</h3>
        <form className="blog-form" onSubmit={handleAddPost}>
          <input
            type="text"
            placeholder="Título del post"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            aria-label="Título del nuevo post"
          />
          <textarea
            placeholder="Descripción del post"
            value={newDesc}
            onChange={e => setNewDesc(e.target.value)}
            aria-label="Descripción del nuevo post"
          />
          <button
            type="submit"
            className="btn-primary"
            disabled={!newTitle.trim()}
          >
            Publicar
          </button>
        </form>
      </div>

      {/* Post list */}
      {posts.length === 0 ? (
        <p className="posts-empty">
          Aún no hay publicaciones. ¡Crea la primera!
        </p>
      ) : (
        <div className="posts-list">
          {posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onHighlight={handleHighlight}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Blog
