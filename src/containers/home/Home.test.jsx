import React from 'react'
import Home from './Home';
import { screen, waitFor, fireEvent, render, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
require('dotenv').config();

describe('Home Page Container', () => {
  jest.setTimeout(30000)
  it('Add New City Via Zip Code', async () => {

    act(() => {
      render(
        <Router>
          <Home />
        </Router>
      );
    })

    const zipInput = screen.getByPlaceholderText('ex: 97210');
    const addButton = screen.getByText('Add');

    waitFor(() => {
      fireEvent.input(zipInput, {
        target: {
          value: '10940'
        }
      })
    })

    waitFor(() => { fireEvent.click(addButton) })

    await new Promise((r) => setTimeout(r, 4500));

    return waitFor(() => { expect(screen.getByText('Middletown')).toBeInTheDocument() })

  })
  it('Switch From Fahrenheit to Celsius', async () => {

    act(() => {
      render(
        <Router>
          <Home />
        </Router>
      );
    })

    const zipInput = screen.getByPlaceholderText('ex: 97210');
    const addButton = screen.getByText('Add');
    const tempToggle = screen.getByTestId('toggle');

    waitFor(() => {
      fireEvent.input(zipInput, {
        target: {
          value: '97210'
        }
      })
    })

    waitFor(() => { fireEvent.click(addButton) })

    waitFor(() => { fireEvent.click(tempToggle) })

    return waitFor(() => { expect(screen.getByText('km/h', { exact: false })).toBeInTheDocument() })

  })

  it('Remove City By Clicking Delete Button', async () => {

    act(() => {
      render(
        <Router>
          <Home />
        </Router>
      );
    })

    const zipInput = screen.getByPlaceholderText('ex: 97210');
    const addButton = screen.getByText('Add');

    waitFor(() => {
      fireEvent.input(zipInput, {
        target: {
          value: '48104'
        }
      })
    })
    waitFor(() => { fireEvent.click(addButton) })


    await new Promise((r) => setTimeout(r, 4500));

    const deleteButton = screen.getByTestId('delete-48104');
    waitFor(() => { fireEvent.click(deleteButton) })

    await new Promise((r) => setTimeout(r, 3500));


    return waitFor(() => { expect(screen.queryByText('Ann Arbor')).not.toBeInTheDocument() })

  })

})
