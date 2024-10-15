import crypto from 'crypto'

const replaceSafeBase64 = (input: any) => {
  return input.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

// Hàm chuyển đổi từ hex sang Buffer
export const hexDecode = (hex: string) => Buffer.from(hex, 'hex')

export const signHash = (salt: any, target: any, secret: any) => {
  const hmac = crypto
    .createHmac('sha256', hexDecode(secret))

    .update(hexDecode(salt))
    .update(target)

  const result = hmac.digest()

  return replaceSafeBase64(Buffer.from(result).toString('base64'))
}
