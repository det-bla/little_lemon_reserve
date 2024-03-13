import { render, screen } from "@testing-library/react";
import { BookingForm }  from './Components/BookingForm.jsx'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve Your Table");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
    render(<Confirm />);
    const headingElement = screen.getByText("Confirmation");
    expect(headingElement).toBeInTheDocument();
});