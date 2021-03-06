export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return d.toLocaleDateString() + ' @ ' + time.substr(0, 5) + time.slice(-2) + ' '
  }