import React from 'react';
import { Button } from "react-bootstrap";

interface BookRowProps {
  id: string;
  title: string;
  author: string;
  price: number;
  totalQty: number;
  availableQty: number;
  onBookDelete: (id: string) => void;
  onBookUpdate: (id: string) => void;
}

const BookRow = ({
  id,
  title,
  author,
  price,
  totalQty,
  availableQty,
  onBookDelete,
  onBookUpdate,
}: BookRowProps) => {
  return (
    <tr className="item">
      <th>{id}</th>
      <td>{title}</td>
      <td>{author}</td>
      <td>{price}</td>
      <td>{totalQty}</td>
      <td>{availableQty}</td>
      <td>
        <Button
          variant="success"
          onClick={() => onBookUpdate(id)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => onBookDelete(id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default BookRow;
