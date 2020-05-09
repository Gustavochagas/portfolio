import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import './style.sass';

const Card = ({ id, text, title, icon, canChange, moveCard, findCard }) => {
  const originalIndex = findCard(id).index
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'skill', id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem()
      const didDrop = monitor.didDrop()
      if (!didDrop) {
        moveCard(droppedId, originalIndex)
      }
    },
    canDrag: canChange,
  })
  const [, drop] = useDrop({
    accept: 'skill',
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id)
        moveCard(draggedId, overIndex)
      }
    },
  });

  return (
    <div className={"skill " + (isDragging ? 'is-dragging' : '')} ref={(node) => drag(drop(node))}>
      <div className="skill-image">
        {icon}
      </div>
      <div className="skill-content">
        <h5 className="skill-title">{title}</h5>
        <p className="skill-description">{text}</p>
      </div>
    </div>
  )
}
export default Card
