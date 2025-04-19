import { render, screen } from "@testing-library/react";

import Input from "@/components/Input";

describe('Forms', () => {

  it('renders a Label and an Input to the screen', () => {
    // Arrange
    render(<Input type="email" label="Email" name="Email" />);

    // Act

    // Assert
    const label = screen.getByLabelText('Email');
    const input = screen.getByRole('textbox');
    
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

})