import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || 'light'

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article flex">
        <SkeletonElement type="thumbnail" />
        <div className="w-full ml-3">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonArticle;