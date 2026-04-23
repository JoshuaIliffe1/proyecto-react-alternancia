/**
 * PostCard.jsx — Exercise 4
 * Renders a single blog post with inline editing, delete, and highlight actions.
 * Edit mode is managed locally with useState; confirmed changes bubble up via onUpdate.
 */
import { useState } from 'react'

/**
 * @param {Object}   post         — { id, title, description, highlighted }
 * @param {Function} onUpdate     — (id, { title, description }) => void
 * @param {Function} onDelete     — (id) => void
 * @param {Function} onHighlight  — (id) => void
 */
function PostCard({ post, onUpdate, onDelete, onHighlight }) {
  const [editing, setEditing]   = useState(false)
  const [editTitle, setEditTitle]       = useState(post.title)
  const [editDesc,  setEditDesc]        = useState(post.description)

  /** Save the edited values and exit edit mode */
  function handleSave() {
    if (!editTitle.trim()) return
    onUpdate(post.id, { title: editTitle.trim(), description: editDesc.trim() })
    setEditing(false)
  }

  /** Discard unsaved changes */
  function handleCancel() {
    setEditTitle(post.title)
    setEditDesc(post.description)
    setEditing(false)
  }

  return (
    <article className={`post-card${post.highlighted ? ' highlighted' : ''}`}>
      <div className="post-card-header">
        {editing ? (
          /* --- Inline edit form --- */
          <div className="post-card-edit-form" style={{ flex: 1 }}>
            <input
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
              placeholder="Título"
              aria-label="Título del post"
            />
            <textarea
              value={editDesc}
              onChange={e => setEditDesc(e.target.value)}
              placeholder="Descripción"
              aria-label="Descripción del post"
            />
            <div className="edit-actions">
              <button className="btn-save" onClick={handleSave}>Guardar</button>
              <button className="btn-cancel" onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        ) : (
          <h3 className={`post-card-title${post.highlighted ? ' highlighted-text' : ''}`}>
            {post.highlighted && '⭐ '}{post.title}
          </h3>
        )}

        {/* Action buttons — always visible */}
        {!editing && (
          <div className="post-card-actions">
            <button
              className={`btn-highlight${post.highlighted ? ' active' : ''}`}
              onClick={() => onHighlight(post.id)}
              title={post.highlighted ? 'Quitar destacado' : 'Destacar'}
            >
              ⭐
            </button>
            <button
              className="btn-edit"
              onClick={() => setEditing(true)}
              title="Editar"
            >
              ✏️
            </button>
            <button
              className="btn-delete"
              onClick={() => onDelete(post.id)}
              title="Eliminar"
            >
              🗑️
            </button>
          </div>
        )}
      </div>

      {!editing && (
        <p className="post-card-body">{post.description}</p>
      )}
    </article>
  )
}

export default PostCard
