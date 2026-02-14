import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders with default props', () => {
    render(<HeroSection />)

    expect(screen.getByText('Mad Hatter Pub')).toBeInTheDocument()
    expect(screen.getByText("Montreal's Ultimate Nightlife Destination")).toBeInTheDocument()
    expect(screen.getByText('Explore Our Pub')).toBeInTheDocument()
  })

  it('renders with custom title and tagline', () => {
    render(
      <HeroSection
        title="Custom Title"
        tagline="Custom Tagline"
      />
    )

    expect(screen.getByText('Custom Title')).toBeInTheDocument()
    expect(screen.getByText('Custom Tagline')).toBeInTheDocument()
  })

  it('displays operating hours and location info', () => {
    render(<HeroSection />)

    expect(screen.getByText('Open daily until 3:00 AM')).toBeInTheDocument()
    expect(screen.getByText('Downtown Montreal')).toBeInTheDocument()
  })

  it('calls onCtaClick when CTA button is clicked', async () => {
    const user = userEvent.setup()
    const mockOnClick = vi.fn()

    render(<HeroSection onCtaClick={mockOnClick} />)

    const ctaButton = screen.getByRole('button', { name: /explore our pub/i })
    await user.click(ctaButton)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('renders custom CTA text', () => {
    render(<HeroSection ctaText="Book a Table" />)

    expect(screen.getByRole('button', { name: /book a table/i })).toBeInTheDocument()
  })
})
