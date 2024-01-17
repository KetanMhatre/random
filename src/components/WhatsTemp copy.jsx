import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  CardTitle,
  CardBody,
  CardText,
} from 'react-bootstrap';
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaPlusCircle,
  FaRegSmile,
  FaBold,
  FaItalic,
  FaApple,
} from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { IoIosAddCircle, IoIosAddCircleOutline } from 'react-icons/io';
import { BsInfoCircleFill, BsAndroid2 } from 'react-icons/bs';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

function WhatsTemp() {
  const [formData, setFormData] = useState({
    templateName: '',
    category: '',
    language: '',
    headerType: 'None',
    bodyText: '',
    footerText: '',
    headerText: '',
    imageInput: null,
    videoInput: null,
    documentInput: null,
    checkboxes: {
      website: false,
      websiteInput: '',
      phone: false,
      phoneInput: '',
      // quick: false,
      // quickInput: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'templateName') {
      const validatedValue = value.toLowerCase().replace(/[^a-z_]/g, '');

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: validatedValue,
      }));
    } else if (files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const payload = {
    name: formData.templateName,
    category: formData.category,
    language: formData.language,
    components: [
      // Optional Header
      formData.headerType !== 'None' && {
        type: 'HEADER',
        format: formData.headerType.toUpperCase(),
        [formData.headerType.toLowerCase()]: formData.headerText,
      },
      // Important Body
      {
        type: 'BODY',
        text: formData.bodyText,
      },
      // Optional Buttons
      formData.checkboxes.website || formData.checkboxes.phone
        ? {
            type: 'BUTTONS',
            buttons: [
              formData.checkboxes.phone && {
                type: 'PHONE_NUMBER',
                text: 'Call Us',
                phone_number: formData.checkboxes.phoneInput,
              },
              formData.checkboxes.website && {
                type: 'URL',
                text: 'Visit',
                url: formData.checkboxes.websiteInput,
              },
            ].filter(Boolean),
          }
        : null,
      // Optional Footer
      formData.footerText && {
        type: 'FOOTER',
        text: formData.footerText,
      },
    ].filter(Boolean),
  };

  const payData = JSON.stringify(payload, null, 2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('data:', formData);
    console.log(payData);
  };

  const handleCheckboxChange = (option) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      checkboxes: {
        ...prevFormData.checkboxes,
        [option]: !prevFormData.checkboxes[option],
      },
    }));
  };
  const handleTextInputChange = (inputName, inputValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      checkboxes: {
        ...prevFormData.checkboxes,
        [inputName]: inputValue,
      },
    }));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg={6}>
            <h4>Template Name</h4>
            <FormGroup>
              <input
                className='form-control w-100'
                type='text'
                name='templateName'
                id='templateName'
                style={{ height: '40px' }}
                value={formData.templateName}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col lg={6}>
            <h4>Category</h4>
            <div>
              <FormGroup>
                <Input
                  type='select'
                  name='category'
                  id='category'
                  value={formData.category}
                  onChange={handleInputChange}
                  className='form-control'
                >
                  <option value='' disabled>
                    Select Category
                  </option>
                  <option value='MARKETING'>MARKETING</option>
                </Input>
              </FormGroup>
            </div>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xs={12}>
            <h4>Template(s)</h4>
          </Col>
          <Col xs={12}>
            <div className='d-flex  align-items-center '>
              <p className='mb-0'>Albanian</p>
              <FormGroup className='mt-3 ms-2'>
                <Input
                  type='select'
                  name='language'
                  id='language'
                  value={formData.language}
                  onChange={handleInputChange}
                >
                  <option value='' disabled>
                    {' '}
                    Add Language
                  </option>
                  <option value='en'>en</option>
                </Input>
              </FormGroup>
            </div>
          </Col>
          <hr className='mt-2' />
        </Row>
        <Row className='mt-4'>
          <Col lg={8}>
            <div className='left_first d-flex align-items-center justify-content-between accordion '>
              <h4 className='mb-0'>Template for Albanian Language </h4>
              <button
                type='button'
                className='btn btn-primary'
                style={{ background: 'green', border: 'none' }}
              >
                Add Sample
              </button>
            </div>
            <Card className='mt-4'>
              <CardBody>
                <h4> Header (Optional)</h4>
                <Card.Text className='mt-1'>
                  Add a title, or, select the media type you want to get
                  approved for this template's header
                </Card.Text>

                <div>
                  <FormGroup className='mt-3'>
                    {['None', 'Text', 'Image', 'Video', 'Document'].map(
                      (label, index) => (
                        <div
                          key={`inline-radio-${index}`}
                          className='mb-3 form-check-inline'
                        >
                          <Label check>
                            <Input
                              type='radio'
                              name='headerType'
                              value={label}
                              checked={formData.headerType === label}
                              onChange={handleInputChange}
                              className='me-1'
                            />
                            {label}
                          </Label>
                        </div>
                      )
                    )}
                  </FormGroup>

                  {formData.headerType === 'Text' && (
                    <div>
                      <Label for='headerText'>Text Input:</Label>
                      <Input
                        type='text'
                        id='headerText'
                        name='headerText'
                        value={formData.headerText}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {formData.headerType === 'Image' && (
                    <div>
                      <Label for='imageInput'>Image Input:</Label>
                      <Input
                        type='file'
                        id='imageInput'
                        name='imageInput'
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {formData.headerType === 'Video' && (
                    <div>
                      <Label for='videoInput'>Video Input:</Label>
                      <Input
                        type='file'
                        id='videoInput'
                        name='videoInput'
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {formData.headerType === 'Document' && (
                    <div>
                      <Label for='documentInput'>Document Input:</Label>
                      <Input
                        type='file'
                        id='documentInput'
                        name='documentInput'
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
            <Card className='mt-4'>
              <Card.Body>
                <h4>Body</h4>
                <Card.Text className='mt-1'>
                  The Whatsapp message in the language you have selected
                </Card.Text>
                <FormGroup>
                  <textarea
                    className='form-control'
                    style={{ width: '100%', height: '200px', resize: 'none' }}
                    name='bodyText'
                    id='bodyText'
                    value={formData.bodyText}
                    onChange={handleInputChange}
                  ></textarea>
                </FormGroup>
                <div className='d-flex justify-content-between mt-2'>
                  <div className='left_side d-flex align-items-center gap-2'>
                    <IoIosAddCircle
                      className='fs-4'
                      style={{ cursor: 'pointer' }}
                    />
                    <Button
                      onClick={() => {
                        console.log('hello');
                      }}
                    >
                      Add variable
                    </Button>
                    <BsInfoCircleFill className='fs-5' />
                  </div>
                  <div className='right_side d-flex align-items-center gap-2'>
                    <FaRegSmile />
                    <FaBold />
                    <FaItalic />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className='mt-4'>
              <CardBody>
                <h4>Footer (Optional)</h4>
                <CardText className='mt-1'>
                  Add a short line of text to the bottom of your message
                  template.
                </CardText>
                <FormGroup>
                  <input
                    type='text'
                    className='w-100 p-1 form-control'
                    name='footerText'
                    id='footerText'
                    value={formData.footerText}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </CardBody>
            </Card>
            <Card className='mt-4'>
              <CardBody>
                <h4>Buttons Optional</h4>
                <CardText>
                  Create buttons that let customers respond to your message or
                  take action.
                </CardText>
                <FormGroup check>
                  <Label check>
                    <Input
                      type='checkbox'
                      checked={formData.checkboxes.website}
                      onChange={() => handleCheckboxChange('website')}
                    />{' '}
                    Add Website URL
                  </Label>
                  {formData.checkboxes.website && (
                    <Input
                      type='text'
                      placeholder='Enter Website URL'
                      value={formData.checkboxes.websiteInput}
                      onChange={(e) =>
                        handleTextInputChange('websiteInput', e.target.value)
                      }
                    />
                  )}
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type='checkbox'
                      checked={formData.checkboxes.phone}
                      onChange={() => handleCheckboxChange('phone')}
                    />{' '}
                    Add Phone Number
                  </Label>
                  {formData.checkboxes.phone && (
                    <Input
                      type='text'
                      placeholder='Enter Phone Number'
                      value={formData.checkboxes.phoneInput}
                      onChange={(e) =>
                        handleTextInputChange('phoneInput', e.target.value)
                      }
                      maxLength={10}
                    />
                  )}
                </FormGroup>
                {/* <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      checked={formData.checkboxes.quick}
                      onChange={() => handleCheckboxChange('quick')}
                    />
                    {' '}
                    Add Quick Replies
                  </Label>
                  {formData.checkboxes.quick && (
                    <Input
                      type="text"
                      placeholder="Enter Quick Replies"
                      value={formData.checkboxes.quickInput}
                      onChange={(e) => handleTextInputChange('quickInput', e.target.value)}
                    />
                  )}
                </FormGroup> */}
              </CardBody>
            </Card>
            <Button
              type='submit'
              className='btn-primary text-end '
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Col>
          <Col md={4} className='mt-5'>
            <Card>
              <CardBody>
                <div className='d-flex justify-content-between align-items-center'>
                  <h4 className='mb-0'>Preview</h4>
                  <div className='d-flex gap-2 fs-5'>
                    <BsAndroid2 />
                    <FaApple />
                  </div>
                </div>
                <hr />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default WhatsTemp;
