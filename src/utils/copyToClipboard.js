const copyToClipboard = text => {
  navigator.clipboard.writeText(text).then(
    () => console.log('Copied link to profile successfully!'),
    err => console.log('Copied failed: ' + err)
  )
}

export default copyToClipboard
