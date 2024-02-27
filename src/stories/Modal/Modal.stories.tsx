import type { Meta, StoryObj } from "@storybook/react";

import Modal from ".";
import { useState } from "react";
import Button from "../Button";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    heading: "This is a modal",
    children:
      "This placeholder component can be replaced with your own local component.",
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <div>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal
          heading={args.heading}
          isOpen={isOpen}
          onClose={handleClose}
          ariaLabelledby="modal"
        >
          {args.children}
        </Modal>
      </div>
    );
  },
};
