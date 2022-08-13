const capitalize = str => {
  const value = String(str)
  return value.charAt(0).toUpperCase() + value.substring(1)
}

export default capitalize
