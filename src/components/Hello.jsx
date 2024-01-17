import React from 'react';
import {
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { IoIosAddCircle } from 'react-icons/io';
import { BsInfoCircleFill, BsAndroid2 } from 'react-icons/bs';
import {
  FaRegSmile,
  FaBold,
  FaItalic,
  FaApple,
  FaPlusCircle,
} from 'react-icons/fa';
import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Hello() {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const toggleCategory = () =>
    setCategoryDropdownOpen((prevState) => !prevState);

  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const toggleLanguage = () =>
    setLanguageDropdownOpen((prevState) => !prevState);

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <div>
            <p>Template Name</p>
            <input type='text' className='w-100' />
          </div>
        </Col>
        <Col lg={6}>
          <div>
            <p>Category</p>
            <Dropdown isOpen={categoryDropdownOpen} toggle={toggleCategory}>
              <DropdownToggle
                caret
                size='sm'
                className=' d-flex align-items-center rounded-1 w-100 d-flex justify-content-between'
                style={{
                  backgroundColor: 'transparent',
                  color: 'black',
                }}
              >
                Authentication
              </DropdownToggle>
              <DropdownMenu className='w-100'>
                <DropdownItem>1</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p>Template(s)</p>
          </div>
          <div className='d-flex align-items-center'>
            <p className='mb-0'>Albanian</p>
            <Dropdown
              isOpen={languageDropdownOpen}
              toggle={toggleLanguage}
              className='ms-3'
            >
              <DropdownToggle
                caret
                size='sm'
                className=' d-flex align-items-center rounded-5'
                style={{
                  backgroundColor: 'transparent',
                  color: 'green',
                  borderColor: 'green',
                }}
              >
                <FaPlusCircle className='me-1' />
                Add Language
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>1</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={7}>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='mb-0'>Template for Albanian Language</p>
            <button type='button' className='btn btn-primary'>
              Primary
            </button>
          </div>
          <Card className='mt-3'>
            <Card.Body>
              <Card.Title>Header (Optional)</Card.Title>
              <Card.Text>
                Add a title, or, select the media type you want to get approved
                for this template's header
              </Card.Text>
              <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className='mb-3'>
                    <Form.Check
                      inline
                      label='None'
                      name='group1'
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label='Text'
                      name='group1'
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label='Image'
                      name='group1'
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label='Video'
                      name='group1'
                      type={type}
                      id={`inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      label='Document'
                      name='group1'
                      type={type}
                      id={`inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
            </Card.Body>
          </Card>
          <Card className='mt-4'>
            <Card.Body>
              <Card.Title>Body</Card.Title>
              <Card.Text>
                The Whatsapp message in the language you have selected
              </Card.Text>
              <textarea
                style={{ width: '100%', height: '200px', resize: 'none' }}
              ></textarea>
              <div className='d-flex justify-content-between'>
                <div className='left_side d-flex align-items-center gap-1'>
                  <IoIosAddCircle className='fs-5' />
                  <p className='mb-0 '>Add variable</p>
                  <BsInfoCircleFill className='fs-6' />
                </div>
                <div className='right_side d-flex align-items-center gap-2'>
                  <FaRegSmile />
                  <FaBold />
                  <FaItalic />
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className='mt-3'>
            <CardBody>
              <CardTitle>Footer (Optional)</CardTitle>
              <CardText>
                Add a short line of text to the bottom of your message template.
              </CardText>
              <div>
                <textarea
                  style={{ width: '100%', resize: 'none', height: '40px' }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={5} className='mt-5'>
          <Card>
            <CardBody>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'>Preview</p>
                <div className='d-flex gap-3 fs-5'>
                  <BsAndroid2 />
                  <FaApple />
                </div>
              </div>
              <hr />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Hello;
