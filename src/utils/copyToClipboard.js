const copyToClipboard = text => {
  navigator.clipboard.writeText(text).then(
    () => console.log('Copied successfully!'),
    err => console.log('Copied failed: ' + err)
  )
}

export default copyToClipboard
