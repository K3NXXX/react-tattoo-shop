import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={289}
    height={440}
    viewBox="0 0 289 440"
    backgroundColor="#f5f0f0"
    foregroundColor="#e8e8e8"
    {...props}
  >
    <rect x="22" y="49" rx="0" ry="0" width="230" height="321" />
  </ContentLoader>
)

export default Skeleton