import globalObject from './globalObject'

const checkOwnId = pathname => {
  const profilePath = '/@' + globalObject.id
  if (
    pathname.indexOf(profilePath) === 0 &&
    (pathname.length === profilePath.length ||
      pathname[profilePath.length] === '/')
  )
    return true
  return false
}

export default checkOwnId
