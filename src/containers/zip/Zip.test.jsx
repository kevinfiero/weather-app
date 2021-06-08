import React from 'react'
import { screen, waitFor, fireEvent, render, act } from '@testing-library/react'
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Zip from './Zip';
require('dotenv').config();

describe('Zip Container', () => {
  it('Check Hourly Weather Page Renders', async () => {

    act(() => {
      render(
        <Router initialEntries={["/zip/75035"]}>
          <Route path="/zip/:id" component={Zip}>
          </Route>
        </Router>
      );
    })

    return await waitFor(() => { expect(screen.getByTestId('hourlyInfoZip-75035')).toBeInTheDocument() })

  })

  it('Check Number of Hourly Cards Rendered', async () => {

    act(() => {
      render(
        <Router initialEntries={["/zip/75035"]}>
          <Route path="/zip/:id" component={Zip}>
          </Route>
        </Router>
      );
    })

    const num1 = await screen.findAllByText('AM', { exact: false })
    const num2 = await screen.findAllByText('PM', { exact: false })

    const num = num1.length + num2.length;

    return await waitFor(() => { expect(num).toEqual(40) })

  })
})


