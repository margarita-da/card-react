import React from "react"
import PropTypes from "prop-types"

function Card({ image, children }) {
  return (
    <div className="card">
      {image && image}
      <div className="card-body">{children}</div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.instanceOf(Element),
  children: PropTypes.instanceOf(Element),
}

export default Card
