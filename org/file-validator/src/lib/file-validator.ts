export function fileValidator(): string {
  return 'file-validator'
}


export function extractVersionFromHeader (header: string) {
  const versionMatch = header.match(/%PDF-(\d+\.\d+)/)
  if (versionMatch) {
    return parseFloat(versionMatch[1])
  }
  return null // Version not found in header
}

export function bufferToHeader (buffer: Buffer) {
  // Convert buffer to string
  const headerFromBuffer = buffer.toString('utf-8')

  // Read the first 1024 characters for the header
  const header = headerFromBuffer.substring(0, 1024)

  return header
}