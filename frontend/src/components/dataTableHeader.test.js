import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {DataTableHeader} from './dataTableHeader'

describe('DataTableHeader rendering and functionality tests', () => {
    const onFilterChangeMock = jest.fn()
    const selectedMonth = new Date().toLocaleString('default', {month: 'long'})

    test('renders correctly', () => {
        render(
            <DataTableHeader selectedMonth={selectedMonth} onFilterChange={onFilterChangeMock} />
        )

        // Check for Employee Information heading
        expect(screen.getByText('Employee Information')).toBeInTheDocument()

        // Check the select box to make sure it is
        const select = screen.getByRole('combobox')
        expect(select.value).toBe(new Date().toLocaleString('default', {month: 'long'}))

        // Check to make sure the
        expect(screen.getByDisplayValue(selectedMonth)).toBeInTheDocument()

        // Make sure the button is rendered
        expect(screen.getByRole('button', {name: 'Apply Filter'})).toBeInTheDocument()
    })

    test('updates the select value when changed', () => {
        render(
            <DataTableHeader selectedMonth={selectedMonth} onFilterChange={onFilterChangeMock} />
        )

        // Check to make sure the Select value can be changed properly
        const select = screen.getByRole('combobox')
        fireEvent.change(select, {target: {value: 'February'}})
        expect(select.value).toBe('February')
    })

    test('calls onFilterChange with the correct value when button is clicked', () => {
        render(
            <DataTableHeader selectedMonth={selectedMonth} onFilterChange={onFilterChangeMock} />
        )

        // Change the Select value to February
        const select = screen.getByRole('combobox')
        fireEvent.change(select, {target: {value: 'February'}})

        // Clicks button, then checks to make sure the function was ran with new Month value
        const button = screen.getByRole('button', {name: 'Apply Filter'})
        fireEvent.click(button)
        expect(onFilterChangeMock).toHaveBeenCalledWith('February')
    })
})
