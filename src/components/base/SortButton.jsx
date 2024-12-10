import React from 'react'

function SortButton({ options, bgColor, textColor, styles }) {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
    ...styles
  }
  return (
    <div>
        <select className='border border-2 rounded-lg p-2' style={style}>
            {
                options && options.map((option, index) => {
                    return <option value={option} key={option+index}>{ option }</option>
                })
            }
        </select>
    </div>
  )
}

export default SortButton