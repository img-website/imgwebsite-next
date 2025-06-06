import { render } from '@testing-library/react'
import TawkToWidget from '@/components/TawkToWidget'

describe('TawkToWidget', () => {
  it('adds and removes script element', () => {
    const scriptSrc = 'https://embed.tawk.to/66cc5e1450c10f7a00a07d00/1i674v16o'
    const { unmount } = render(<TawkToWidget />)
    expect(document.querySelector(`script[src="${scriptSrc}"]`)).not.toBeNull()
    unmount()
    expect(document.querySelector(`script[src="${scriptSrc}"]`)).toBeNull()
  })
})
