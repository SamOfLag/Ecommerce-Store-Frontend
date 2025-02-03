import React from "react";
import { Table, Form, InputGroup } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import CustomButton from "../../../Components/Partials/Button/Button";
import './Card.css'


const ShoppingCard: React.FC = () => {
  return (
    <div className="container my-5">
      <h3 className="mb-4">Shopping Cart</h3>

      {/* Shopping Card Table */}
      <Table responsive bordered className="text-center align-middle">
        <thead className="bg-light">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Item Row 1 */}
          <tr>
            <td className="d-flex align-items-center gap-3">
              <CustomButton variant="outline-danger" size="sm" className="border-0">
                <BsTrash />
              </CustomButton>
              <img
                src="/assets/images/apple1.png"
                alt="4K UHD LED Smart TV"
                style={{ width: "80px", height: "auto", objectFit: "cover" }}
              />
              <div>
                <p className="mb-1 fw-bold">
                  4K UHD LED Smart TV with Chromecast Built-in
                </p>
              </div>
            </td>
            <td className="fw-bold">$70</td>
            <td>
              <InputGroup className="justify-content-center">
                <CustomButton variant="outline" size="sm">
                  -
                </CustomButton>
                <Form.Control
                  type="text"
                  value="01"
                  className="text-center"
                  style={{ width: "50px" }}
                  readOnly
                />
                <CustomButton variant="outline" size="sm">
                  +
                </CustomButton>
              </InputGroup>
            </td>
            <td className="fw-bold">$70</td>
          </tr>

          {/* Item Row 2 */}
          <tr>
            <td className="d-flex align-items-center gap-3">
              <CustomButton variant="outline-danger" size="sm" className="border-0">
                <BsTrash />
              </CustomButton>
              <img
                src="/assets/images/apple1.png"
                alt="Wired Over-Ear Gaming Headphones"
                style={{ width: "80px", height: "auto", objectFit: "cover" }}
              />
              <div>
                <p className="mb-1 fw-bold">
                  Wired Over-Ear Gaming Headphones with USB
                </p>
              </div>
            </td>
            <td className="fw-bold">$250</td>
            <td>
              <InputGroup className="justify-content-center">
                <CustomButton variant="outline" size="sm">
                  -
                </CustomButton>
                <Form.Control
                  type="text"
                  value="03"
                  className="text-center"
                  style={{ width: "50px" }}
                  readOnly
                />
                <CustomButton variant="outline" size="sm">
                  +
                </CustomButton>
              </InputGroup>
            </td>
            <td className="fw-bold">$250</td>
          </tr>
        </tbody>
      </Table>

      {/* Footer Buttons */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <CustomButton variant="outline-primary" className="d-flex align-items-center gap-2">
          <FaArrowLeft />
          Return to Shop
        </CustomButton>
        <CustomButton variant="primary">Update Cart</CustomButton>
      </div>
    </div>
  );
};

export default ShoppingCard;