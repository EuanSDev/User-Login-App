import { render, screen } from "@testing-library/react";

import Card from "@/components/UI/Card";

describe('Card', () => {

	it('Renders a Card component', () => {
		// Arrange
		render(<Card><h1>Hello World!</h1></Card>);

		// Act

		// Assert
		const card = screen.getByText('Hello World!');
		expect(card).toBeInTheDocument();
	});

})