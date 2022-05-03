import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";

import React from "react";

const DonatePage = () => {
  return (
    <div className="page">
      <main>
        <h1>Donate</h1>
        <div>
          <Form>
            <FormGroup className="form-group" row>
              <Label for="firstName" size="lg" sm={2} className="form-label">
                First Name
              </Label>
              <Col sm={4}>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="with a placeholder"
                  type="text"
                  className="form-input"
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="lastName" size="lg" sm={2} className="form-label">
                Last Name
              </Label>
              <Col sm={4}>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="with a placeholder"
                  type="text"
                  className="form-input"
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="exampleEmail" size="lg" sm={2} className="form-label">
                Email
              </Label>
              <Col sm={4}>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  className="form-input"
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="address" size="lg" sm={2} className="form-label">
                Address
              </Label>
              <Col sm={4}>
                <Input
                  id="address"
                  name="address"
                  placeholder="with a placeholder"
                  type="text"
                  className="form-input"
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="city" size="lg" sm={2} className="form-label">
                City
              </Label>
              <Col sm={4}>
                <Input
                  id="city"
                  name="city"
                  placeholder="with a placeholder"
                  type="text"
                  className="form-input"
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="state" size="lg" sm={2} className="form-label">
                State
              </Label>
              <Col sm={4}>
                <Input id="state" name="state" type="select">
                  <option>AL</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CZ</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>DC</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>GU</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>PR</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VI</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="zip" size="lg" sm={2} className="form-label">
                Zip Code
              </Label>
              <Col sm={4}>
                <Input
                  id="zip"
                  name="zip"
                  placeholder="with a placeholder"
                  type="text"
                  className="form-input"
                />
              </Col>
            </FormGroup>
            <FormGroup className="form-group" row>
              <Label for="phoneNum" size="lg" sm={2} className="form-label">
                Phone Number
              </Label>
              <Col sm={4}>
                <Input
                  id="phoneNum"
                  name="address"
                  placeholder="with a placeholder"
                  type="phone"
                  className="form-input"
                />
              </Col>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default DonatePage;
