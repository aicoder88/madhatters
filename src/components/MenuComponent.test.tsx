import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MenuComponent from './MenuComponent'

describe('MenuComponent', () => {
  it('renders the menu section with heading', () => {
    render(<MenuComponent />)

    expect(screen.getByRole('heading', { name: /our menu/i })).toBeInTheDocument()
  })

  it('renders food and drinks tabs', () => {
    render(<MenuComponent />)

    expect(screen.getByRole('tab', { name: /food menu/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /drinks menu/i })).toBeInTheDocument()
  })

  it('shows food menu by default', () => {
    render(<MenuComponent />)

    expect(screen.getByText('Appetizers')).toBeInTheDocument()
    expect(screen.getByText('Loaded Nachos')).toBeInTheDocument()
  })

  it('switches to drinks menu when tab is clicked', async () => {
    const user = userEvent.setup()
    render(<MenuComponent />)

    const drinksTab = screen.getByRole('tab', { name: /drinks menu/i })
    await user.click(drinksTab)

    expect(screen.getByText('Signature Cocktails')).toBeInTheDocument()
  })

  it('renders food categories with items', () => {
    render(<MenuComponent />)

    expect(screen.getByText('Main Courses')).toBeInTheDocument()
    expect(screen.getByText('Mad Hatter Burger')).toBeInTheDocument()
  })

  it('displays item prices', () => {
    render(<MenuComponent />)

    expect(screen.getByText('$14.99')).toBeInTheDocument()
  })

  it('shows tags on food items', () => {
    render(<MenuComponent />)

    expect(screen.getByText('Shareable')).toBeInTheDocument()
    // Multiple items may have Vegetarian tag
    expect(screen.getAllByText('Vegetarian').length).toBeGreaterThan(0)
  })

  it('displays food availability badge', () => {
    render(<MenuComponent />)

    expect(screen.getByText('Available until midnight')).toBeInTheDocument()
  })
})
