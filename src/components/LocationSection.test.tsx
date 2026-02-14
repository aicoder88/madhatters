import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LocationSection from './LocationSection'

describe('LocationSection', () => {
  beforeEach(() => {
    vi.spyOn(window, 'open').mockImplementation(() => null)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the location section with heading', () => {
    render(<LocationSection />)

    expect(screen.getByRole('heading', { name: /find us/i })).toBeInTheDocument()
  })

  it('displays default contact information', () => {
    render(<LocationSection />)

    expect(screen.getByText('1240 Crescent St, Montreal, QC H3G 2A9')).toBeInTheDocument()
    expect(screen.getByText('(514) 393-1240')).toBeInTheDocument()
    expect(screen.getByText('Open daily until 3:00 AM')).toBeInTheDocument()
  })

  it('renders with custom address and phone', () => {
    render(
      <LocationSection
        address="123 Custom St"
        phone="(555) 123-4567"
      />
    )

    expect(screen.getByText('123 Custom St')).toBeInTheDocument()
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
  })

  it('displays nearby landmarks', () => {
    render(<LocationSection />)

    expect(screen.getByText('Bell Center')).toBeInTheDocument()
    expect(screen.getByText('McGill University')).toBeInTheDocument()
    expect(screen.getByText('Concordia University')).toBeInTheDocument()
  })

  it('shows landmark distances', () => {
    render(<LocationSection />)

    expect(screen.getByText('0.5 km away')).toBeInTheDocument()
    expect(screen.getByText('0.7 km away')).toBeInTheDocument()
    expect(screen.getByText('0.3 km away')).toBeInTheDocument()
  })

  it('renders Get Directions and Call Now buttons', () => {
    render(<LocationSection />)

    expect(screen.getByRole('button', { name: /get directions/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /call now/i })).toBeInTheDocument()
  })

  it('opens Google Maps when Get Directions is clicked', async () => {
    const user = userEvent.setup()
    render(<LocationSection />)

    const directionsBtn = screen.getByRole('button', { name: /get directions/i })
    await user.click(directionsBtn)

    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('google.com/maps/dir'),
      '_blank'
    )
  })

  it('renders embedded Google Map', () => {
    render(<LocationSection />)

    const iframe = document.querySelector('iframe')
    expect(iframe).toBeInTheDocument()
    expect(iframe?.title).toBe('Mad Hatter Pub Location')
  })
})
