import React from 'react'
import PropTypes from 'prop-types'
import iconNames from '../assets/iconNames.js'

function Svg({ iconType }) {
  return (
    <>
      {iconNames[iconType] && (
        <svg viewBox="0 0 128 128">
          <title>{`${iconType}-icon`}</title>
          {iconNames[iconType].length < 2 ? (
            <path {...iconNames[iconType][0]}></path>
          ) : (
            iconNames[iconType].map((icon) => (
              <path key={icon.d} {...icon}></path>
            ))
          )}
        </svg>
      )}
    </>
  )
}
Svg.propTypes = {
  iconType: PropTypes.string.isRequired,
}

export default Svg
