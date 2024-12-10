import React from 'react'

function TopBanner() {
  return (
    <div className="bg-primary flex justify-between px-16 py-1 text-white">
        <div className="email">
            KaribuWinner@gmail.com
        </div>
        <div className="language_dropdown flex items-end gap-1">
            <span>Language</span><i className="icon dropdown_action"></i>
        </div>
    </div>
  )
}

export default TopBanner