import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {Table} from "react-bootstrap";
import BookRow from "./BookRow";

export default {
  title: "Components/BookRow",
  component: BookRow,
  args: {
    id: "1",
    title: "JavaScript",
    author: "FPT",
    price: 35,
    totalQty: 50,
    availableQty: 47
  },
} as ComponentMeta<typeof BookRow>;

const Template: ComponentStory<typeof BookRow> = (args) => (
  <Table>
    <tbody>
      <BookRow {...args}/>
    </tbody>
  </Table>
);
const Row = Template.bind({});

export { Row };
