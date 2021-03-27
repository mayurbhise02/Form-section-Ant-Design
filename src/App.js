import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import {
  Form, Input, Row, Col, Button, Radio, Select, Checkbox, Cascader, DatePicker, InputNumber, TreeSelect, Switch,} from 'antd';
import './App.css';
const App = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <>
    <div className="form-style">
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
      {...formItemLayout}
    >
      {/* START PERSONAL INFORMATION */}
      <Alert message="Personal information" type="info" />
      <Row gutter={24} className="inner-form">
        <Col span={12}>
        <Form.Item label="Title">
          <Select>
            <Select.Option value=""></Select.Option>
            <Select.Option value="demo">Mr.</Select.Option>
            <Select.Option value="demo">Mrs.</Select.Option>
            <Select.Option value="demo">Miss</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item label="Marital Status">
          <Select>
            <Select.Option value=""></Select.Option>
            <Select.Option value="demo">Married</Select.Option>
            <Select.Option value="demo">Unmarried</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Lease Term">
          <Input />
        </Form.Item>
        <Form.Item label="Prefered Name">
          <Input />
        </Form.Item>
      </Col>
      </Row>
      {/* END PERSONAL INFORMATION */}
      {/* START ADDRESS INFORMATION */}
      <Alert message="Address information" type="info" />
      <Row gutter={24} className="inner-form">
        <Col span={12}>
        <Form.Item label="Country">
          <Select placeholder="United States of America">
            <Select.Option  value="Afganistan">Afghanistan</Select.Option>
            <Select.Option  value="Albania">Albania</Select.Option>
            <Select.Option  value="Algeria">Algeria</Select.Option>
            <Select.Option  value="American Samoa">American Samoa</Select.Option>
            <Select.Option  value="Andorra">Andorra</Select.Option>
            <Select.Option  value="Angola">Angola</Select.Option>
            <Select.Option  value="Anguilla">Anguilla</Select.Option>
            <Select.Option  value="Antigua & Barbuda">Antigua & Barbuda</Select.Option>
            <Select.Option  value="Argentina">Argentina</Select.Option>
            <Select.Option  value="Armenia">Armenia</Select.Option>
            <Select.Option  value="Aruba">Aruba</Select.Option>
            <Select.Option  value="Australia">Australia</Select.Option>
            <Select.Option  value="Austria">Austria</Select.Option>
            <Select.Option  value="Azerbaijan">Azerbaijan</Select.Option>
            <Select.Option  value="Bahamas">Bahamas</Select.Option>
            <Select.Option  value="Bahrain">Bahrain</Select.Option>
            <Select.Option  value="Bangladesh">Bangladesh</Select.Option>
            <Select.Option  value="Barbados">Barbados</Select.Option>
            <Select.Option  value="Belarus">Belarus</Select.Option>
            <Select.Option  value="Belgium">Belgium</Select.Option>
            <Select.Option  value="Belize">Belize</Select.Option>
            <Select.Option  value="Benin">Benin</Select.Option>
            <Select.Option  value="Bermuda">Bermuda</Select.Option>
            <Select.Option  value="Bhutan">Bhutan</Select.Option>
            <Select.Option  value="Bolivia">Bolivia</Select.Option>
            <Select.Option  value="Bonaire">Bonaire</Select.Option>
            <Select.Option  value="Bosnia & Herzegovina">Bosnia & Herzegovina</Select.Option>
            <Select.Option  value="Botswana">Botswana</Select.Option>
            <Select.Option  value="Brazil">Brazil</Select.Option>
            <Select.Option  value="British Indian Ocean Ter">British Indian Ocean Ter</Select.Option>
            <Select.Option  value="Brunei">Brunei</Select.Option>
            <Select.Option  value="Bulgaria">Bulgaria</Select.Option>
            <Select.Option  value="Burkina Faso">Burkina Faso</Select.Option>
            <Select.Option  value="Burundi">Burundi</Select.Option>
            <Select.Option  value="Cambodia">Cambodia</Select.Option>
            <Select.Option  value="Cameroon">Cameroon</Select.Option>
            <Select.Option  value="Canada">Canada</Select.Option>
            <Select.Option  value="Canary Islands">Canary Islands</Select.Option>
            <Select.Option  value="Cape Verde">Cape Verde</Select.Option>
            <Select.Option  value="Cayman Islands">Cayman Islands</Select.Option>
            <Select.Option  value="Central African Republic">Central African Republic</Select.Option>
            <Select.Option  value="Chad">Chad</Select.Option>
            <Select.Option  value="Channel Islands">Channel Islands</Select.Option>
            <Select.Option  value="Chile">Chile</Select.Option>
            <Select.Option  value="China">China</Select.Option>
            <Select.Option  value="Christmas Island">Christmas Island</Select.Option>
            <Select.Option  value="Cocos Island">Cocos Island</Select.Option>
            <Select.Option  value="Colombia">Colombia</Select.Option>
            <Select.Option  value="Comoros">Comoros</Select.Option>
            <Select.Option  value="Congo">Congo</Select.Option>
            <Select.Option  value="Cook Islands">Cook Islands</Select.Option>
            <Select.Option  value="Costa Rica">Costa Rica</Select.Option>
            <Select.Option  value="Cote DIvoire">Cote DIvoire</Select.Option>
            <Select.Option  value="Croatia">Croatia</Select.Option>
            <Select.Option  value="Cuba">Cuba</Select.Option>
            <Select.Option  value="Curaco">Curacao</Select.Option>
            <Select.Option  value="Cyprus">Cyprus</Select.Option>
            <Select.Option  value="Czech Republic">Czech Republic</Select.Option>
            <Select.Option  value="Denmark">Denmark</Select.Option>
            <Select.Option  value="Djibouti">Djibouti</Select.Option>
            <Select.Option  value="Dominica">Dominica</Select.Option>
            <Select.Option  value="Dominican Republic">Dominican Republic</Select.Option>
            <Select.Option  value="East Timor">East Timor</Select.Option>
            <Select.Option  value="Ecuador">Ecuador</Select.Option>
            <Select.Option  value="Egypt">Egypt</Select.Option>
            <Select.Option  value="El Salvador">El Salvador</Select.Option>
            <Select.Option  value="Equatorial Guinea">Equatorial Guinea</Select.Option>
            <Select.Option  value="Eritrea">Eritrea</Select.Option>
            <Select.Option  value="Estonia">Estonia</Select.Option>
            <Select.Option  value="Ethiopia">Ethiopia</Select.Option>
            <Select.Option  value="Falkland Islands">Falkland Islands</Select.Option>
            <Select.Option  value="Faroe Islands">Faroe Islands</Select.Option>
            <Select.Option  value="Fiji">Fiji</Select.Option>
            <Select.Option  value="Finland">Finland</Select.Option>
            <Select.Option  value="France">France</Select.Option>
            <Select.Option  value="French Guiana">French Guiana</Select.Option>
            <Select.Option  value="French Polynesia">French Polynesia</Select.Option>
            <Select.Option  value="French Southern Ter">French Southern Ter</Select.Option>
            <Select.Option  value="Gabon">Gabon</Select.Option>
            <Select.Option  value="Gambia">Gambia</Select.Option>
            <Select.Option  value="Georgia">Georgia</Select.Option>
            <Select.Option  value="Germany">Germany</Select.Option>
            <Select.Option  value="Ghana">Ghana</Select.Option>
            <Select.Option  value="Gibraltar">Gibraltar</Select.Option>
            <Select.Option  value="Great Britain">Great Britain</Select.Option>
            <Select.Option  value="Greece">Greece</Select.Option>
            <Select.Option  value="Greenland">Greenland</Select.Option>
            <Select.Option  value="Grenada">Grenada</Select.Option>
            <Select.Option  value="Guadeloupe">Guadeloupe</Select.Option>
            <Select.Option  value="Guam">Guam</Select.Option>
            <Select.Option  value="Guatemala">Guatemala</Select.Option>
            <Select.Option  value="Guinea">Guinea</Select.Option>
            <Select.Option  value="Guyana">Guyana</Select.Option>
            <Select.Option  value="Haiti">Haiti</Select.Option>
            <Select.Option  value="Hawaii">Hawaii</Select.Option>
            <Select.Option  value="Honduras">Honduras</Select.Option>
            <Select.Option  value="Hong Kong">Hong Kong</Select.Option>
            <Select.Option  value="Hungary">Hungary</Select.Option>
            <Select.Option  value="Iceland">Iceland</Select.Option>
            <Select.Option  value="Indonesia">Indonesia</Select.Option>
            <Select.Option  value="India">India</Select.Option>
            <Select.Option  value="Iran">Iran</Select.Option>
            <Select.Option  value="Iraq">Iraq</Select.Option>
            <Select.Option  value="Ireland">Ireland</Select.Option>
            <Select.Option  value="Isle of Man">Isle of Man</Select.Option>
            <Select.Option  value="Israel">Israel</Select.Option>
            <Select.Option  value="Italy">Italy</Select.Option>
            <Select.Option  value="Jamaica">Jamaica</Select.Option>
            <Select.Option  value="Japan">Japan</Select.Option>
            <Select.Option  value="Jordan">Jordan</Select.Option>
            <Select.Option  value="Kazakhstan">Kazakhstan</Select.Option>
            <Select.Option  value="Kenya">Kenya</Select.Option>
            <Select.Option  value="Kiribati">Kiribati</Select.Option>
            <Select.Option  value="Korea North">Korea North</Select.Option>
            <Select.Option  value="Korea Sout">Korea South</Select.Option>
            <Select.Option  value="Kuwait">Kuwait</Select.Option>
            <Select.Option  value="Kyrgyzstan">Kyrgyzstan</Select.Option>
            <Select.Option  value="Laos">Laos</Select.Option>
            <Select.Option  value="Latvia">Latvia</Select.Option>
            <Select.Option  value="Lebanon">Lebanon</Select.Option>
            <Select.Option  value="Lesotho">Lesotho</Select.Option>
            <Select.Option  value="Liberia">Liberia</Select.Option>
            <Select.Option  value="Libya">Libya</Select.Option>
            <Select.Option  value="Liechtenstein">Liechtenstein</Select.Option>
            <Select.Option  value="Lithuania">Lithuania</Select.Option>
            <Select.Option  value="Luxembourg">Luxembourg</Select.Option>
            <Select.Option  value="Macau">Macau</Select.Option>
            <Select.Option  value="Macedonia">Macedonia</Select.Option>
            <Select.Option  value="Madagascar">Madagascar</Select.Option>
            <Select.Option  value="Malaysia">Malaysia</Select.Option>
            <Select.Option  value="Malawi">Malawi</Select.Option>
            <Select.Option  value="Maldives">Maldives</Select.Option>
            <Select.Option  value="Mali">Mali</Select.Option>
            <Select.Option  value="Malta">Malta</Select.Option>
            <Select.Option  value="Marshall Islands">Marshall Islands</Select.Option>
            <Select.Option  value="Martinique">Martinique</Select.Option>
            <Select.Option  value="Mauritania">Mauritania</Select.Option>
            <Select.Option  value="Mauritius">Mauritius</Select.Option>
            <Select.Option  value="Mayotte">Mayotte</Select.Option>
            <Select.Option  value="Mexico">Mexico</Select.Option>
            <Select.Option  value="Midway Islands">Midway Islands</Select.Option>
            <Select.Option  value="Moldova">Moldova</Select.Option>
            <Select.Option  value="Monaco">Monaco</Select.Option>
            <Select.Option  value="Mongolia">Mongolia</Select.Option>
            <Select.Option  value="Montserrat">Montserrat</Select.Option>
            <Select.Option  value="Morocco">Morocco</Select.Option>
            <Select.Option  value="Mozambique">Mozambique</Select.Option>
            <Select.Option  value="Myanmar">Myanmar</Select.Option>
            <Select.Option  value="Nambia">Nambia</Select.Option>
            <Select.Option  value="Nauru">Nauru</Select.Option>
            <Select.Option  value="Nepal">Nepal</Select.Option>
            <Select.Option  value="Netherland Antilles">Netherland Antilles</Select.Option>
            <Select.Option  value="Netherlands">Netherlands (Holland, Europe)</Select.Option>
            <Select.Option  value="Nevis">Nevis</Select.Option>
            <Select.Option  value="New Caledonia">New Caledonia</Select.Option>
            <Select.Option  value="New Zealand">New Zealand</Select.Option>
            <Select.Option  value="Nicaragua">Nicaragua</Select.Option>
            <Select.Option  value="Niger">Niger</Select.Option>
            <Select.Option  value="Nigeria">Nigeria</Select.Option>
            <Select.Option  value="Niue">Niue</Select.Option>
            <Select.Option  value="Norfolk Island">Norfolk Island</Select.Option>
            <Select.Option  value="Norway">Norway</Select.Option>
            <Select.Option  value="Oman">Oman</Select.Option>
            <Select.Option  value="Pakistan">Pakistan</Select.Option>
            <Select.Option  value="Palau Island">Palau Island</Select.Option>
            <Select.Option  value="Palestine">Palestine</Select.Option>
            <Select.Option  value="Panama">Panama</Select.Option>
            <Select.Option  value="Papua New Guinea">Papua New Guinea</Select.Option>
            <Select.Option  value="Paraguay">Paraguay</Select.Option>
            <Select.Option  value="Peru">Peru</Select.Option>
            <Select.Option  value="Phillipines">Philippines</Select.Option>
            <Select.Option  value="Pitcairn Island">Pitcairn Island</Select.Option>
            <Select.Option  value="Poland">Poland</Select.Option>
            <Select.Option  value="Portugal">Portugal</Select.Option>
            <Select.Option  value="Puerto Rico">Puerto Rico</Select.Option>
            <Select.Option  value="Qatar">Qatar</Select.Option>
            <Select.Option  value="Republic of Montenegro">Republic of Montenegro</Select.Option>
            <Select.Option  value="Republic of Serbia">Republic of Serbia</Select.Option>
            <Select.Option  value="Reunion">Reunion</Select.Option>
            <Select.Option  value="Romania">Romania</Select.Option>
            <Select.Option  value="Russia">Russia</Select.Option>
            <Select.Option  value="Rwanda">Rwanda</Select.Option>
            <Select.Option  value="St Barthelemy">St Barthelemy</Select.Option>
            <Select.Option  value="St Eustatius">St Eustatius</Select.Option>
            <Select.Option  value="St Helena">St Helena</Select.Option>
            <Select.Option  value="St Kitts-Nevis">St Kitts-Nevis</Select.Option>
            <Select.Option  value="St Lucia">St Lucia</Select.Option>
            <Select.Option  value="St Maarten">St Maarten</Select.Option>
            <Select.Option  value="St Pierre & Miquelon">St Pierre & Miquelon</Select.Option>
            <Select.Option  value="St Vincent & Grenadines">St Vincent & Grenadines</Select.Option>
            <Select.Option  value="Saipan">Saipan</Select.Option>
            <Select.Option  value="Samoa">Samoa</Select.Option>
            <Select.Option  value="Samoa American">Samoa American</Select.Option>
            <Select.Option  value="San Marino">San Marino</Select.Option>
            <Select.Option  value="Sao Tome & Principe">Sao Tome & Principe</Select.Option>
            <Select.Option  value="Saudi Arabia">Saudi Arabia</Select.Option>
            <Select.Option  value="Senegal">Senegal</Select.Option>
            <Select.Option  value="Seychelles">Seychelles</Select.Option>
            <Select.Option  value="Sierra Leone">Sierra Leone</Select.Option>
            <Select.Option  value="Singapore">Singapore</Select.Option>
            <Select.Option  value="Slovakia">Slovakia</Select.Option>
            <Select.Option  value="Slovenia">Slovenia</Select.Option>
            <Select.Option  value="Solomon Islands">Solomon Islands</Select.Option>
            <Select.Option  value="Somalia">Somalia</Select.Option>
            <Select.Option  value="South Africa">South Africa</Select.Option>
            <Select.Option  value="Spain">Spain</Select.Option>
            <Select.Option  value="Sri Lanka">Sri Lanka</Select.Option>
            <Select.Option  value="Sudan">Sudan</Select.Option>
            <Select.Option  value="Suriname">Suriname</Select.Option>
            <Select.Option  value="Swaziland">Swaziland</Select.Option>
            <Select.Option  value="Sweden">Sweden</Select.Option>
            <Select.Option  value="Switzerland">Switzerland</Select.Option>
            <Select.Option  value="Syria">Syria</Select.Option>
            <Select.Option  value="Tahiti">Tahiti</Select.Option>
            <Select.Option  value="Taiwan">Taiwan</Select.Option>
            <Select.Option  value="Tajikistan">Tajikistan</Select.Option>
            <Select.Option  value="Tanzania">Tanzania</Select.Option>
            <Select.Option  value="Thailand">Thailand</Select.Option>
            <Select.Option  value="Togo">Togo</Select.Option>
            <Select.Option  value="Tokelau">Tokelau</Select.Option>
            <Select.Option  value="Tonga">Tonga</Select.Option>
            <Select.Option  value="Trinidad & Tobago">Trinidad & Tobago</Select.Option>
            <Select.Option  value="Tunisia">Tunisia</Select.Option>
            <Select.Option  value="Turkey">Turkey</Select.Option>
            <Select.Option  value="Turkmenistan">Turkmenistan</Select.Option>
            <Select.Option  value="Turks & Caicos Is">Turks & Caicos Is</Select.Option>
            <Select.Option  value="Tuvalu">Tuvalu</Select.Option>
            <Select.Option  value="Uganda">Uganda</Select.Option>
            <Select.Option  value="United Kingdom">United Kingdom</Select.Option>
            <Select.Option  value="Ukraine">Ukraine</Select.Option>
            <Select.Option  value="United Arab Erimates">United Arab Emirates</Select.Option>
            <Select.Option  value="United States of America">United States of America</Select.Option>
            <Select.Option  value="Uraguay">Uruguay</Select.Option>
            <Select.Option  value="Uzbekistan">Uzbekistan</Select.Option>
            <Select.Option  value="Vanuatu">Vanuatu</Select.Option>
            <Select.Option  value="Vatican City State">Vatican City State</Select.Option>
            <Select.Option  value="Venezuela">Venezuela</Select.Option>
            <Select.Option  value="Vietnam">Vietnam</Select.Option>
            <Select.Option  value="Virgin Islands (Brit)">Virgin Islands (Brit)</Select.Option>
            <Select.Option  value="Virgin Islands (USA)">Virgin Islands (USA)</Select.Option>
            <Select.Option  value="Wake Island">Wake Island</Select.Option>
            <Select.Option  value="Wallis & Futana Is">Wallis & Futana Is</Select.Option>
            <Select.Option  value="Yemen">Yemen</Select.Option>
            <Select.Option  value="Zaire">Zaire</Select.Option>
            <Select.Option  value="Zambia">Zambia</Select.Option>
            <Select.Option  value="Zimbabwe">Zimbabwe</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Address">
          <Input />
        </Form.Item>
        <Form.Item label="Address(Two line)">
          <Input />
        </Form.Item>
        <Form.Item label="City">
          <Input />
        </Form.Item>
        <Form.Item label="State Zip">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Alabama</Select.Option>
            <Select.Option value="AK">Alaska</Select.Option>
            <Select.Option value="AZ">Arizona</Select.Option>
            <Select.Option value="AR">Arkansas</Select.Option>
            <Select.Option value="CA">California</Select.Option>
            <Select.Option value="CO">Colorado</Select.Option>
            <Select.Option value="CT">Connecticut</Select.Option>
            <Select.Option value="DE">Delaware</Select.Option>
            <Select.Option value="DC">District Of Columbia</Select.Option>
            <Select.Option value="FL">Florida</Select.Option>
            <Select.Option value="GA">Georgia</Select.Option>
            <Select.Option value="HI">Hawaii</Select.Option>
            <Select.Option value="ID">Idaho</Select.Option>
            <Select.Option value="IL">Illinois</Select.Option>
            <Select.Option value="IN">Indiana</Select.Option>
            <Select.Option value="IA">Iowa</Select.Option>
            <Select.Option value="KS">Kansas</Select.Option>
            <Select.Option value="KY">Kentucky</Select.Option>
            <Select.Option value="LA">Louisiana</Select.Option>
            <Select.Option value="ME">Maine</Select.Option>
            <Select.Option value="MD">Maryland</Select.Option>
            <Select.Option value="MA">Massachusetts</Select.Option>
            <Select.Option value="MI">Michigan</Select.Option>
            <Select.Option value="MN">Minnesota</Select.Option>
            <Select.Option value="MS">Mississippi</Select.Option>
            <Select.Option value="MO">Missouri</Select.Option>
            <Select.Option value="MT">Montana</Select.Option>
            <Select.Option value="NE">Nebraska</Select.Option>
            <Select.Option value="NV">Nevada</Select.Option>
            <Select.Option value="NH">New Hampshire</Select.Option>
            <Select.Option value="NJ">New Jersey</Select.Option>
            <Select.Option value="NM">New Mexico</Select.Option>
            <Select.Option value="NY">New York</Select.Option>
            <Select.Option value="NC">North Carolina</Select.Option>
            <Select.Option value="ND">North Dakota</Select.Option>
            <Select.Option value="OH">Ohio</Select.Option>
            <Select.Option value="OK">Oklahoma</Select.Option>
            <Select.Option value="OR">Oregon</Select.Option>
            <Select.Option value="PA">Pennsylvania</Select.Option>
            <Select.Option value="RI">Rhode Island</Select.Option>
            <Select.Option value="SC">South Carolina</Select.Option>
            <Select.Option value="SD">South Dakota</Select.Option>
            <Select.Option value="TN">Tennessee</Select.Option>
            <Select.Option value="TX">Texas</Select.Option>
            <Select.Option value="UT">Utah</Select.Option>
            <Select.Option value="VT">Vermont</Select.Option>
            <Select.Option value="VA">Virginia</Select.Option>
            <Select.Option value="WA">Washington</Select.Option>
            <Select.Option value="WV">West Virginia</Select.Option>
            <Select.Option value="WI">Wisconsin</Select.Option>
            <Select.Option value="WY">Wyoming</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Apartment Community">
          <Input />
        </Form.Item>
        <Form.Item label="Management Company">
          <Input />
        </Form.Item>
        <Form.Item label="Management Company Phone">
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Residency From">
          <Input />
        </Form.Item>
        <Form.Item label="Monthly Rent/ Monthly mortgage payments">
          <Input />
        </Form.Item>
        <Form.Item label="Reason for Moving">
          <Input />
        </Form.Item>
        <Form.Item label="was 30 days notice given">
          <Select>
            <Select.Option value=""></Select.Option>
            <Select.Option value="demo">Yes</Select.Option>
            <Select.Option value="demo">No</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      </Row>
      {/* END PERSONAL INFORMATION */}
      {/* START EMPLOYMENT INFORMATION */}
      <Alert message="Employment Information" type="info" />
      <Row gutter={24} className="inner-form">
        <Col span={12}>
        <Form.Item label="Country">
          <Select placeholder="United States of America">
            <Select.Option  value="Afganistan">Afghanistan</Select.Option>
            <Select.Option  value="Albania">Albania</Select.Option>
            <Select.Option  value="Algeria">Algeria</Select.Option>
            <Select.Option  value="American Samoa">American Samoa</Select.Option>
            <Select.Option  value="Andorra">Andorra</Select.Option>
            <Select.Option  value="Angola">Angola</Select.Option>
            <Select.Option  value="Anguilla">Anguilla</Select.Option>
            <Select.Option  value="Antigua & Barbuda">Antigua & Barbuda</Select.Option>
            <Select.Option  value="Argentina">Argentina</Select.Option>
            <Select.Option  value="Armenia">Armenia</Select.Option>
            <Select.Option  value="Aruba">Aruba</Select.Option>
            <Select.Option  value="Australia">Australia</Select.Option>
            <Select.Option  value="Austria">Austria</Select.Option>
            <Select.Option  value="Azerbaijan">Azerbaijan</Select.Option>
            <Select.Option  value="Bahamas">Bahamas</Select.Option>
            <Select.Option  value="Bahrain">Bahrain</Select.Option>
            <Select.Option  value="Bangladesh">Bangladesh</Select.Option>
            <Select.Option  value="Barbados">Barbados</Select.Option>
            <Select.Option  value="Belarus">Belarus</Select.Option>
            <Select.Option  value="Belgium">Belgium</Select.Option>
            <Select.Option  value="Belize">Belize</Select.Option>
            <Select.Option  value="Benin">Benin</Select.Option>
            <Select.Option  value="Bermuda">Bermuda</Select.Option>
            <Select.Option  value="Bhutan">Bhutan</Select.Option>
            <Select.Option  value="Bolivia">Bolivia</Select.Option>
            <Select.Option  value="Bonaire">Bonaire</Select.Option>
            <Select.Option  value="Bosnia & Herzegovina">Bosnia & Herzegovina</Select.Option>
            <Select.Option  value="Botswana">Botswana</Select.Option>
            <Select.Option  value="Brazil">Brazil</Select.Option>
            <Select.Option  value="British Indian Ocean Ter">British Indian Ocean Ter</Select.Option>
            <Select.Option  value="Brunei">Brunei</Select.Option>
            <Select.Option  value="Bulgaria">Bulgaria</Select.Option>
            <Select.Option  value="Burkina Faso">Burkina Faso</Select.Option>
            <Select.Option  value="Burundi">Burundi</Select.Option>
            <Select.Option  value="Cambodia">Cambodia</Select.Option>
            <Select.Option  value="Cameroon">Cameroon</Select.Option>
            <Select.Option  value="Canada">Canada</Select.Option>
            <Select.Option  value="Canary Islands">Canary Islands</Select.Option>
            <Select.Option  value="Cape Verde">Cape Verde</Select.Option>
            <Select.Option  value="Cayman Islands">Cayman Islands</Select.Option>
            <Select.Option  value="Central African Republic">Central African Republic</Select.Option>
            <Select.Option  value="Chad">Chad</Select.Option>
            <Select.Option  value="Channel Islands">Channel Islands</Select.Option>
            <Select.Option  value="Chile">Chile</Select.Option>
            <Select.Option  value="China">China</Select.Option>
            <Select.Option  value="Christmas Island">Christmas Island</Select.Option>
            <Select.Option  value="Cocos Island">Cocos Island</Select.Option>
            <Select.Option  value="Colombia">Colombia</Select.Option>
            <Select.Option  value="Comoros">Comoros</Select.Option>
            <Select.Option  value="Congo">Congo</Select.Option>
            <Select.Option  value="Cook Islands">Cook Islands</Select.Option>
            <Select.Option  value="Costa Rica">Costa Rica</Select.Option>
            <Select.Option  value="Cote DIvoire">Cote DIvoire</Select.Option>
            <Select.Option  value="Croatia">Croatia</Select.Option>
            <Select.Option  value="Cuba">Cuba</Select.Option>
            <Select.Option  value="Curaco">Curacao</Select.Option>
            <Select.Option  value="Cyprus">Cyprus</Select.Option>
            <Select.Option  value="Czech Republic">Czech Republic</Select.Option>
            <Select.Option  value="Denmark">Denmark</Select.Option>
            <Select.Option  value="Djibouti">Djibouti</Select.Option>
            <Select.Option  value="Dominica">Dominica</Select.Option>
            <Select.Option  value="Dominican Republic">Dominican Republic</Select.Option>
            <Select.Option  value="East Timor">East Timor</Select.Option>
            <Select.Option  value="Ecuador">Ecuador</Select.Option>
            <Select.Option  value="Egypt">Egypt</Select.Option>
            <Select.Option  value="El Salvador">El Salvador</Select.Option>
            <Select.Option  value="Equatorial Guinea">Equatorial Guinea</Select.Option>
            <Select.Option  value="Eritrea">Eritrea</Select.Option>
            <Select.Option  value="Estonia">Estonia</Select.Option>
            <Select.Option  value="Ethiopia">Ethiopia</Select.Option>
            <Select.Option  value="Falkland Islands">Falkland Islands</Select.Option>
            <Select.Option  value="Faroe Islands">Faroe Islands</Select.Option>
            <Select.Option  value="Fiji">Fiji</Select.Option>
            <Select.Option  value="Finland">Finland</Select.Option>
            <Select.Option  value="France">France</Select.Option>
            <Select.Option  value="French Guiana">French Guiana</Select.Option>
            <Select.Option  value="French Polynesia">French Polynesia</Select.Option>
            <Select.Option  value="French Southern Ter">French Southern Ter</Select.Option>
            <Select.Option  value="Gabon">Gabon</Select.Option>
            <Select.Option  value="Gambia">Gambia</Select.Option>
            <Select.Option  value="Georgia">Georgia</Select.Option>
            <Select.Option  value="Germany">Germany</Select.Option>
            <Select.Option  value="Ghana">Ghana</Select.Option>
            <Select.Option  value="Gibraltar">Gibraltar</Select.Option>
            <Select.Option  value="Great Britain">Great Britain</Select.Option>
            <Select.Option  value="Greece">Greece</Select.Option>
            <Select.Option  value="Greenland">Greenland</Select.Option>
            <Select.Option  value="Grenada">Grenada</Select.Option>
            <Select.Option  value="Guadeloupe">Guadeloupe</Select.Option>
            <Select.Option  value="Guam">Guam</Select.Option>
            <Select.Option  value="Guatemala">Guatemala</Select.Option>
            <Select.Option  value="Guinea">Guinea</Select.Option>
            <Select.Option  value="Guyana">Guyana</Select.Option>
            <Select.Option  value="Haiti">Haiti</Select.Option>
            <Select.Option  value="Hawaii">Hawaii</Select.Option>
            <Select.Option  value="Honduras">Honduras</Select.Option>
            <Select.Option  value="Hong Kong">Hong Kong</Select.Option>
            <Select.Option  value="Hungary">Hungary</Select.Option>
            <Select.Option  value="Iceland">Iceland</Select.Option>
            <Select.Option  value="Indonesia">Indonesia</Select.Option>
            <Select.Option  value="India">India</Select.Option>
            <Select.Option  value="Iran">Iran</Select.Option>
            <Select.Option  value="Iraq">Iraq</Select.Option>
            <Select.Option  value="Ireland">Ireland</Select.Option>
            <Select.Option  value="Isle of Man">Isle of Man</Select.Option>
            <Select.Option  value="Israel">Israel</Select.Option>
            <Select.Option  value="Italy">Italy</Select.Option>
            <Select.Option  value="Jamaica">Jamaica</Select.Option>
            <Select.Option  value="Japan">Japan</Select.Option>
            <Select.Option  value="Jordan">Jordan</Select.Option>
            <Select.Option  value="Kazakhstan">Kazakhstan</Select.Option>
            <Select.Option  value="Kenya">Kenya</Select.Option>
            <Select.Option  value="Kiribati">Kiribati</Select.Option>
            <Select.Option  value="Korea North">Korea North</Select.Option>
            <Select.Option  value="Korea Sout">Korea South</Select.Option>
            <Select.Option  value="Kuwait">Kuwait</Select.Option>
            <Select.Option  value="Kyrgyzstan">Kyrgyzstan</Select.Option>
            <Select.Option  value="Laos">Laos</Select.Option>
            <Select.Option  value="Latvia">Latvia</Select.Option>
            <Select.Option  value="Lebanon">Lebanon</Select.Option>
            <Select.Option  value="Lesotho">Lesotho</Select.Option>
            <Select.Option  value="Liberia">Liberia</Select.Option>
            <Select.Option  value="Libya">Libya</Select.Option>
            <Select.Option  value="Liechtenstein">Liechtenstein</Select.Option>
            <Select.Option  value="Lithuania">Lithuania</Select.Option>
            <Select.Option  value="Luxembourg">Luxembourg</Select.Option>
            <Select.Option  value="Macau">Macau</Select.Option>
            <Select.Option  value="Macedonia">Macedonia</Select.Option>
            <Select.Option  value="Madagascar">Madagascar</Select.Option>
            <Select.Option  value="Malaysia">Malaysia</Select.Option>
            <Select.Option  value="Malawi">Malawi</Select.Option>
            <Select.Option  value="Maldives">Maldives</Select.Option>
            <Select.Option  value="Mali">Mali</Select.Option>
            <Select.Option  value="Malta">Malta</Select.Option>
            <Select.Option  value="Marshall Islands">Marshall Islands</Select.Option>
            <Select.Option  value="Martinique">Martinique</Select.Option>
            <Select.Option  value="Mauritania">Mauritania</Select.Option>
            <Select.Option  value="Mauritius">Mauritius</Select.Option>
            <Select.Option  value="Mayotte">Mayotte</Select.Option>
            <Select.Option  value="Mexico">Mexico</Select.Option>
            <Select.Option  value="Midway Islands">Midway Islands</Select.Option>
            <Select.Option  value="Moldova">Moldova</Select.Option>
            <Select.Option  value="Monaco">Monaco</Select.Option>
            <Select.Option  value="Mongolia">Mongolia</Select.Option>
            <Select.Option  value="Montserrat">Montserrat</Select.Option>
            <Select.Option  value="Morocco">Morocco</Select.Option>
            <Select.Option  value="Mozambique">Mozambique</Select.Option>
            <Select.Option  value="Myanmar">Myanmar</Select.Option>
            <Select.Option  value="Nambia">Nambia</Select.Option>
            <Select.Option  value="Nauru">Nauru</Select.Option>
            <Select.Option  value="Nepal">Nepal</Select.Option>
            <Select.Option  value="Netherland Antilles">Netherland Antilles</Select.Option>
            <Select.Option  value="Netherlands">Netherlands (Holland, Europe)</Select.Option>
            <Select.Option  value="Nevis">Nevis</Select.Option>
            <Select.Option  value="New Caledonia">New Caledonia</Select.Option>
            <Select.Option  value="New Zealand">New Zealand</Select.Option>
            <Select.Option  value="Nicaragua">Nicaragua</Select.Option>
            <Select.Option  value="Niger">Niger</Select.Option>
            <Select.Option  value="Nigeria">Nigeria</Select.Option>
            <Select.Option  value="Niue">Niue</Select.Option>
            <Select.Option  value="Norfolk Island">Norfolk Island</Select.Option>
            <Select.Option  value="Norway">Norway</Select.Option>
            <Select.Option  value="Oman">Oman</Select.Option>
            <Select.Option  value="Pakistan">Pakistan</Select.Option>
            <Select.Option  value="Palau Island">Palau Island</Select.Option>
            <Select.Option  value="Palestine">Palestine</Select.Option>
            <Select.Option  value="Panama">Panama</Select.Option>
            <Select.Option  value="Papua New Guinea">Papua New Guinea</Select.Option>
            <Select.Option  value="Paraguay">Paraguay</Select.Option>
            <Select.Option  value="Peru">Peru</Select.Option>
            <Select.Option  value="Phillipines">Philippines</Select.Option>
            <Select.Option  value="Pitcairn Island">Pitcairn Island</Select.Option>
            <Select.Option  value="Poland">Poland</Select.Option>
            <Select.Option  value="Portugal">Portugal</Select.Option>
            <Select.Option  value="Puerto Rico">Puerto Rico</Select.Option>
            <Select.Option  value="Qatar">Qatar</Select.Option>
            <Select.Option  value="Republic of Montenegro">Republic of Montenegro</Select.Option>
            <Select.Option  value="Republic of Serbia">Republic of Serbia</Select.Option>
            <Select.Option  value="Reunion">Reunion</Select.Option>
            <Select.Option  value="Romania">Romania</Select.Option>
            <Select.Option  value="Russia">Russia</Select.Option>
            <Select.Option  value="Rwanda">Rwanda</Select.Option>
            <Select.Option  value="St Barthelemy">St Barthelemy</Select.Option>
            <Select.Option  value="St Eustatius">St Eustatius</Select.Option>
            <Select.Option  value="St Helena">St Helena</Select.Option>
            <Select.Option  value="St Kitts-Nevis">St Kitts-Nevis</Select.Option>
            <Select.Option  value="St Lucia">St Lucia</Select.Option>
            <Select.Option  value="St Maarten">St Maarten</Select.Option>
            <Select.Option  value="St Pierre & Miquelon">St Pierre & Miquelon</Select.Option>
            <Select.Option  value="St Vincent & Grenadines">St Vincent & Grenadines</Select.Option>
            <Select.Option  value="Saipan">Saipan</Select.Option>
            <Select.Option  value="Samoa">Samoa</Select.Option>
            <Select.Option  value="Samoa American">Samoa American</Select.Option>
            <Select.Option  value="San Marino">San Marino</Select.Option>
            <Select.Option  value="Sao Tome & Principe">Sao Tome & Principe</Select.Option>
            <Select.Option  value="Saudi Arabia">Saudi Arabia</Select.Option>
            <Select.Option  value="Senegal">Senegal</Select.Option>
            <Select.Option  value="Seychelles">Seychelles</Select.Option>
            <Select.Option  value="Sierra Leone">Sierra Leone</Select.Option>
            <Select.Option  value="Singapore">Singapore</Select.Option>
            <Select.Option  value="Slovakia">Slovakia</Select.Option>
            <Select.Option  value="Slovenia">Slovenia</Select.Option>
            <Select.Option  value="Solomon Islands">Solomon Islands</Select.Option>
            <Select.Option  value="Somalia">Somalia</Select.Option>
            <Select.Option  value="South Africa">South Africa</Select.Option>
            <Select.Option  value="Spain">Spain</Select.Option>
            <Select.Option  value="Sri Lanka">Sri Lanka</Select.Option>
            <Select.Option  value="Sudan">Sudan</Select.Option>
            <Select.Option  value="Suriname">Suriname</Select.Option>
            <Select.Option  value="Swaziland">Swaziland</Select.Option>
            <Select.Option  value="Sweden">Sweden</Select.Option>
            <Select.Option  value="Switzerland">Switzerland</Select.Option>
            <Select.Option  value="Syria">Syria</Select.Option>
            <Select.Option  value="Tahiti">Tahiti</Select.Option>
            <Select.Option  value="Taiwan">Taiwan</Select.Option>
            <Select.Option  value="Tajikistan">Tajikistan</Select.Option>
            <Select.Option  value="Tanzania">Tanzania</Select.Option>
            <Select.Option  value="Thailand">Thailand</Select.Option>
            <Select.Option  value="Togo">Togo</Select.Option>
            <Select.Option  value="Tokelau">Tokelau</Select.Option>
            <Select.Option  value="Tonga">Tonga</Select.Option>
            <Select.Option  value="Trinidad & Tobago">Trinidad & Tobago</Select.Option>
            <Select.Option  value="Tunisia">Tunisia</Select.Option>
            <Select.Option  value="Turkey">Turkey</Select.Option>
            <Select.Option  value="Turkmenistan">Turkmenistan</Select.Option>
            <Select.Option  value="Turks & Caicos Is">Turks & Caicos Is</Select.Option>
            <Select.Option  value="Tuvalu">Tuvalu</Select.Option>
            <Select.Option  value="Uganda">Uganda</Select.Option>
            <Select.Option  value="United Kingdom">United Kingdom</Select.Option>
            <Select.Option  value="Ukraine">Ukraine</Select.Option>
            <Select.Option  value="United Arab Erimates">United Arab Emirates</Select.Option>
            <Select.Option  value="United States of America">United States of America</Select.Option>
            <Select.Option  value="Uraguay">Uruguay</Select.Option>
            <Select.Option  value="Uzbekistan">Uzbekistan</Select.Option>
            <Select.Option  value="Vanuatu">Vanuatu</Select.Option>
            <Select.Option  value="Vatican City State">Vatican City State</Select.Option>
            <Select.Option  value="Venezuela">Venezuela</Select.Option>
            <Select.Option  value="Vietnam">Vietnam</Select.Option>
            <Select.Option  value="Virgin Islands (Brit)">Virgin Islands (Brit)</Select.Option>
            <Select.Option  value="Virgin Islands (USA)">Virgin Islands (USA)</Select.Option>
            <Select.Option  value="Wake Island">Wake Island</Select.Option>
            <Select.Option  value="Wallis & Futana Is">Wallis & Futana Is</Select.Option>
            <Select.Option  value="Yemen">Yemen</Select.Option>
            <Select.Option  value="Zaire">Zaire</Select.Option>
            <Select.Option  value="Zambia">Zambia</Select.Option>
            <Select.Option  value="Zimbabwe">Zimbabwe</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Employment Status">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Employed</Select.Option>
            <Select.Option value="AK">Self-employed</Select.Option>
            <Select.Option value="AZ">Out of work</Select.Option>
            <Select.Option value="AR">Homemaker</Select.Option>
            <Select.Option value="CA">Student</Select.Option>
            <Select.Option value="CO">Retired</Select.Option>
            <Select.Option value="CT">Unable to work</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Job Title">
          <Input />
        </Form.Item>
        <Form.Item label="Employed Since">
          <Input />
        </Form.Item>
        <Form.Item label="Monthly Income">
          <Input />
        </Form.Item>
        <Form.Item label="Additional Income">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Alabama</Select.Option>
            <Select.Option value="AK">Alaska</Select.Option>
            <Select.Option value="AZ">Arizona</Select.Option>
            <Select.Option value="AR">Arkansas</Select.Option>
            <Select.Option value="CA">California</Select.Option>
            <Select.Option value="CO">Colorado</Select.Option>
            <Select.Option value="CT">Connecticut</Select.Option>
            <Select.Option value="DE">Delaware</Select.Option>
            <Select.Option value="DC">District Of Columbia</Select.Option>
            <Select.Option value="FL">Florida</Select.Option>
            <Select.Option value="GA">Georgia</Select.Option>
            <Select.Option value="HI">Hawaii</Select.Option>
            <Select.Option value="ID">Idaho</Select.Option>
            <Select.Option value="IL">Illinois</Select.Option>
            <Select.Option value="IN">Indiana</Select.Option>
            <Select.Option value="IA">Iowa</Select.Option>
            <Select.Option value="KS">Kansas</Select.Option>
            <Select.Option value="KY">Kentucky</Select.Option>
            <Select.Option value="LA">Louisiana</Select.Option>
            <Select.Option value="ME">Maine</Select.Option>
            <Select.Option value="MD">Maryland</Select.Option>
            <Select.Option value="MA">Massachusetts</Select.Option>
            <Select.Option value="MI">Michigan</Select.Option>
            <Select.Option value="MN">Minnesota</Select.Option>
            <Select.Option value="MS">Mississippi</Select.Option>
            <Select.Option value="MO">Missouri</Select.Option>
            <Select.Option value="MT">Montana</Select.Option>
            <Select.Option value="NE">Nebraska</Select.Option>
            <Select.Option value="NV">Nevada</Select.Option>
            <Select.Option value="NH">New Hampshire</Select.Option>
            <Select.Option value="NJ">New Jersey</Select.Option>
            <Select.Option value="NM">New Mexico</Select.Option>
            <Select.Option value="NY">New York</Select.Option>
            <Select.Option value="NC">North Carolina</Select.Option>
            <Select.Option value="ND">North Dakota</Select.Option>
            <Select.Option value="OH">Ohio</Select.Option>
            <Select.Option value="OK">Oklahoma</Select.Option>
            <Select.Option value="OR">Oregon</Select.Option>
            <Select.Option value="PA">Pennsylvania</Select.Option>
            <Select.Option value="RI">Rhode Island</Select.Option>
            <Select.Option value="SC">South Carolina</Select.Option>
            <Select.Option value="SD">South Dakota</Select.Option>
            <Select.Option value="TN">Tennessee</Select.Option>
            <Select.Option value="TX">Texas</Select.Option>
            <Select.Option value="UT">Utah</Select.Option>
            <Select.Option value="VT">Vermont</Select.Option>
            <Select.Option value="VA">Virginia</Select.Option>
            <Select.Option value="WA">Washington</Select.Option>
            <Select.Option value="WV">West Virginia</Select.Option>
            <Select.Option value="WI">Wisconsin</Select.Option>
            <Select.Option value="WY">Wyoming</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Additional Income Source">
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Employer">
          <Input />
        </Form.Item>
        <Form.Item label="Supervisor Name">
          <Input />
        </Form.Item>
        <Form.Item label="Address">
          <Input />
        </Form.Item>
        <Form.Item label="Address(line two)">
          <Input />
        </Form.Item>
        <Form.Item label="City">
          <Input />
        </Form.Item>
        <Form.Item label="State Zip">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Alabama</Select.Option>
            <Select.Option value="AK">Alaska</Select.Option>
            <Select.Option value="AZ">Arizona</Select.Option>
            <Select.Option value="AR">Arkansas</Select.Option>
            <Select.Option value="CA">California</Select.Option>
            <Select.Option value="CO">Colorado</Select.Option>
            <Select.Option value="CT">Connecticut</Select.Option>
            <Select.Option value="DE">Delaware</Select.Option>
            <Select.Option value="DC">District Of Columbia</Select.Option>
            <Select.Option value="FL">Florida</Select.Option>
            <Select.Option value="GA">Georgia</Select.Option>
            <Select.Option value="HI">Hawaii</Select.Option>
            <Select.Option value="ID">Idaho</Select.Option>
            <Select.Option value="IL">Illinois</Select.Option>
            <Select.Option value="IN">Indiana</Select.Option>
            <Select.Option value="IA">Iowa</Select.Option>
            <Select.Option value="KS">Kansas</Select.Option>
            <Select.Option value="KY">Kentucky</Select.Option>
            <Select.Option value="LA">Louisiana</Select.Option>
            <Select.Option value="ME">Maine</Select.Option>
            <Select.Option value="MD">Maryland</Select.Option>
            <Select.Option value="MA">Massachusetts</Select.Option>
            <Select.Option value="MI">Michigan</Select.Option>
            <Select.Option value="MN">Minnesota</Select.Option>
            <Select.Option value="MS">Mississippi</Select.Option>
            <Select.Option value="MO">Missouri</Select.Option>
            <Select.Option value="MT">Montana</Select.Option>
            <Select.Option value="NE">Nebraska</Select.Option>
            <Select.Option value="NV">Nevada</Select.Option>
            <Select.Option value="NH">New Hampshire</Select.Option>
            <Select.Option value="NJ">New Jersey</Select.Option>
            <Select.Option value="NM">New Mexico</Select.Option>
            <Select.Option value="NY">New York</Select.Option>
            <Select.Option value="NC">North Carolina</Select.Option>
            <Select.Option value="ND">North Dakota</Select.Option>
            <Select.Option value="OH">Ohio</Select.Option>
            <Select.Option value="OK">Oklahoma</Select.Option>
            <Select.Option value="OR">Oregon</Select.Option>
            <Select.Option value="PA">Pennsylvania</Select.Option>
            <Select.Option value="RI">Rhode Island</Select.Option>
            <Select.Option value="SC">South Carolina</Select.Option>
            <Select.Option value="SD">South Dakota</Select.Option>
            <Select.Option value="TN">Tennessee</Select.Option>
            <Select.Option value="TX">Texas</Select.Option>
            <Select.Option value="UT">Utah</Select.Option>
            <Select.Option value="VT">Vermont</Select.Option>
            <Select.Option value="VA">Virginia</Select.Option>
            <Select.Option value="WA">Washington</Select.Option>
            <Select.Option value="WV">West Virginia</Select.Option>
            <Select.Option value="WI">Wisconsin</Select.Option>
            <Select.Option value="WY">Wyoming</Select.Option>
            </Select>
        </Form.Item>
      </Col>
      </Row>
      {/* END EMPLOYMENT INFORMATION */}
      {/* START PREVIOUS EMPLOYMENT INFORMATION */}
      <h1>Previous Employment Information</h1>
      <Row gutter={24} className="inner-form">
        <Col span={12}>
        <Form.Item label="Job Title">
          <Input />
        </Form.Item>
        <Form.Item label="Employed Since">
          <Input />
        </Form.Item>
        <Form.Item label="Monthly Income">
          <Input />
        </Form.Item>
        <Form.Item label="Additional Income">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Alabama</Select.Option>
            <Select.Option value="AK">Alaska</Select.Option>
            <Select.Option value="AZ">Arizona</Select.Option>
            <Select.Option value="AR">Arkansas</Select.Option>
            <Select.Option value="CA">California</Select.Option>
            <Select.Option value="CO">Colorado</Select.Option>
            <Select.Option value="CT">Connecticut</Select.Option>
            <Select.Option value="DE">Delaware</Select.Option>
            <Select.Option value="DC">District Of Columbia</Select.Option>
            <Select.Option value="FL">Florida</Select.Option>
            <Select.Option value="GA">Georgia</Select.Option>
            <Select.Option value="HI">Hawaii</Select.Option>
            <Select.Option value="ID">Idaho</Select.Option>
            <Select.Option value="IL">Illinois</Select.Option>
            <Select.Option value="IN">Indiana</Select.Option>
            <Select.Option value="IA">Iowa</Select.Option>
            <Select.Option value="KS">Kansas</Select.Option>
            <Select.Option value="KY">Kentucky</Select.Option>
            <Select.Option value="LA">Louisiana</Select.Option>
            <Select.Option value="ME">Maine</Select.Option>
            <Select.Option value="MD">Maryland</Select.Option>
            <Select.Option value="MA">Massachusetts</Select.Option>
            <Select.Option value="MI">Michigan</Select.Option>
            <Select.Option value="MN">Minnesota</Select.Option>
            <Select.Option value="MS">Mississippi</Select.Option>
            <Select.Option value="MO">Missouri</Select.Option>
            <Select.Option value="MT">Montana</Select.Option>
            <Select.Option value="NE">Nebraska</Select.Option>
            <Select.Option value="NV">Nevada</Select.Option>
            <Select.Option value="NH">New Hampshire</Select.Option>
            <Select.Option value="NJ">New Jersey</Select.Option>
            <Select.Option value="NM">New Mexico</Select.Option>
            <Select.Option value="NY">New York</Select.Option>
            <Select.Option value="NC">North Carolina</Select.Option>
            <Select.Option value="ND">North Dakota</Select.Option>
            <Select.Option value="OH">Ohio</Select.Option>
            <Select.Option value="OK">Oklahoma</Select.Option>
            <Select.Option value="OR">Oregon</Select.Option>
            <Select.Option value="PA">Pennsylvania</Select.Option>
            <Select.Option value="RI">Rhode Island</Select.Option>
            <Select.Option value="SC">South Carolina</Select.Option>
            <Select.Option value="SD">South Dakota</Select.Option>
            <Select.Option value="TN">Tennessee</Select.Option>
            <Select.Option value="TX">Texas</Select.Option>
            <Select.Option value="UT">Utah</Select.Option>
            <Select.Option value="VT">Vermont</Select.Option>
            <Select.Option value="VA">Virginia</Select.Option>
            <Select.Option value="WA">Washington</Select.Option>
            <Select.Option value="WV">West Virginia</Select.Option>
            <Select.Option value="WI">Wisconsin</Select.Option>
            <Select.Option value="WY">Wyoming</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Additional Income Source">
          <Input />
        </Form.Item>
        <Form.Item label="Previous Employer Start Date">
          <Input />
        </Form.Item>
        <Form.Item label="Previous Employer End Date">
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Employer">
          <Input />
        </Form.Item>
        <Form.Item label="Supervisor Name">
          <Input />
        </Form.Item>
        <Form.Item label="Address">
          <Input />
        </Form.Item>
        <Form.Item label="Address(line two)">
          <Input />
        </Form.Item>
        <Form.Item label="City">
          <Input />
        </Form.Item>
        <Form.Item label="State Zip">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Alabama</Select.Option>
            <Select.Option value="AK">Alaska</Select.Option>
            <Select.Option value="AZ">Arizona</Select.Option>
            <Select.Option value="AR">Arkansas</Select.Option>
            <Select.Option value="CA">California</Select.Option>
            <Select.Option value="CO">Colorado</Select.Option>
            <Select.Option value="CT">Connecticut</Select.Option>
            <Select.Option value="DE">Delaware</Select.Option>
            <Select.Option value="DC">District Of Columbia</Select.Option>
            <Select.Option value="FL">Florida</Select.Option>
            <Select.Option value="GA">Georgia</Select.Option>
            <Select.Option value="HI">Hawaii</Select.Option>
            <Select.Option value="ID">Idaho</Select.Option>
            <Select.Option value="IL">Illinois</Select.Option>
            <Select.Option value="IN">Indiana</Select.Option>
            <Select.Option value="IA">Iowa</Select.Option>
            <Select.Option value="KS">Kansas</Select.Option>
            <Select.Option value="KY">Kentucky</Select.Option>
            <Select.Option value="LA">Louisiana</Select.Option>
            <Select.Option value="ME">Maine</Select.Option>
            <Select.Option value="MD">Maryland</Select.Option>
            <Select.Option value="MA">Massachusetts</Select.Option>
            <Select.Option value="MI">Michigan</Select.Option>
            <Select.Option value="MN">Minnesota</Select.Option>
            <Select.Option value="MS">Mississippi</Select.Option>
            <Select.Option value="MO">Missouri</Select.Option>
            <Select.Option value="MT">Montana</Select.Option>
            <Select.Option value="NE">Nebraska</Select.Option>
            <Select.Option value="NV">Nevada</Select.Option>
            <Select.Option value="NH">New Hampshire</Select.Option>
            <Select.Option value="NJ">New Jersey</Select.Option>
            <Select.Option value="NM">New Mexico</Select.Option>
            <Select.Option value="NY">New York</Select.Option>
            <Select.Option value="NC">North Carolina</Select.Option>
            <Select.Option value="ND">North Dakota</Select.Option>
            <Select.Option value="OH">Ohio</Select.Option>
            <Select.Option value="OK">Oklahoma</Select.Option>
            <Select.Option value="OR">Oregon</Select.Option>
            <Select.Option value="PA">Pennsylvania</Select.Option>
            <Select.Option value="RI">Rhode Island</Select.Option>
            <Select.Option value="SC">South Carolina</Select.Option>
            <Select.Option value="SD">South Dakota</Select.Option>
            <Select.Option value="TN">Tennessee</Select.Option>
            <Select.Option value="TX">Texas</Select.Option>
            <Select.Option value="UT">Utah</Select.Option>
            <Select.Option value="VT">Vermont</Select.Option>
            <Select.Option value="VA">Virginia</Select.Option>
            <Select.Option value="WA">Washington</Select.Option>
            <Select.Option value="WV">West Virginia</Select.Option>
            <Select.Option value="WI">Wisconsin</Select.Option>
            <Select.Option value="WY">Wyoming</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Employer Phone">
          <Input />
        </Form.Item>
      </Col>
      </Row>
      {/* END PREVIOUS EMPLOYMENT INFORMATION */}
      {/* START SCREENING INFORMATION */}
      <Alert message="Screening Information" type="info" />
      <Row gutter={24} className="inner-form">
        <Col span={12}>
        <Form.Item label="Country">
          <Select placeholder="United States of America">
            <Select.Option  value="Afganistan">Afghanistan</Select.Option>
            <Select.Option  value="Albania">Albania</Select.Option>
            <Select.Option  value="Algeria">Algeria</Select.Option>
            <Select.Option  value="American Samoa">American Samoa</Select.Option>
            <Select.Option  value="Andorra">Andorra</Select.Option>
            <Select.Option  value="Angola">Angola</Select.Option>
            <Select.Option  value="Anguilla">Anguilla</Select.Option>
            <Select.Option  value="Antigua & Barbuda">Antigua & Barbuda</Select.Option>
            <Select.Option  value="Argentina">Argentina</Select.Option>
            <Select.Option  value="Armenia">Armenia</Select.Option>
            <Select.Option  value="Aruba">Aruba</Select.Option>
            <Select.Option  value="Australia">Australia</Select.Option>
            <Select.Option  value="Austria">Austria</Select.Option>
            <Select.Option  value="Azerbaijan">Azerbaijan</Select.Option>
            <Select.Option  value="Bahamas">Bahamas</Select.Option>
            <Select.Option  value="Bahrain">Bahrain</Select.Option>
            <Select.Option  value="Bangladesh">Bangladesh</Select.Option>
            <Select.Option  value="Barbados">Barbados</Select.Option>
            <Select.Option  value="Belarus">Belarus</Select.Option>
            <Select.Option  value="Belgium">Belgium</Select.Option>
            <Select.Option  value="Belize">Belize</Select.Option>
            <Select.Option  value="Benin">Benin</Select.Option>
            <Select.Option  value="Bermuda">Bermuda</Select.Option>
            <Select.Option  value="Bhutan">Bhutan</Select.Option>
            <Select.Option  value="Bolivia">Bolivia</Select.Option>
            <Select.Option  value="Bonaire">Bonaire</Select.Option>
            <Select.Option  value="Bosnia & Herzegovina">Bosnia & Herzegovina</Select.Option>
            <Select.Option  value="Botswana">Botswana</Select.Option>
            <Select.Option  value="Brazil">Brazil</Select.Option>
            <Select.Option  value="British Indian Ocean Ter">British Indian Ocean Ter</Select.Option>
            <Select.Option  value="Brunei">Brunei</Select.Option>
            <Select.Option  value="Bulgaria">Bulgaria</Select.Option>
            <Select.Option  value="Burkina Faso">Burkina Faso</Select.Option>
            <Select.Option  value="Burundi">Burundi</Select.Option>
            <Select.Option  value="Cambodia">Cambodia</Select.Option>
            <Select.Option  value="Cameroon">Cameroon</Select.Option>
            <Select.Option  value="Canada">Canada</Select.Option>
            <Select.Option  value="Canary Islands">Canary Islands</Select.Option>
            <Select.Option  value="Cape Verde">Cape Verde</Select.Option>
            <Select.Option  value="Cayman Islands">Cayman Islands</Select.Option>
            <Select.Option  value="Central African Republic">Central African Republic</Select.Option>
            <Select.Option  value="Chad">Chad</Select.Option>
            <Select.Option  value="Channel Islands">Channel Islands</Select.Option>
            <Select.Option  value="Chile">Chile</Select.Option>
            <Select.Option  value="China">China</Select.Option>
            <Select.Option  value="Christmas Island">Christmas Island</Select.Option>
            <Select.Option  value="Cocos Island">Cocos Island</Select.Option>
            <Select.Option  value="Colombia">Colombia</Select.Option>
            <Select.Option  value="Comoros">Comoros</Select.Option>
            <Select.Option  value="Congo">Congo</Select.Option>
            <Select.Option  value="Cook Islands">Cook Islands</Select.Option>
            <Select.Option  value="Costa Rica">Costa Rica</Select.Option>
            <Select.Option  value="Cote DIvoire">Cote DIvoire</Select.Option>
            <Select.Option  value="Croatia">Croatia</Select.Option>
            <Select.Option  value="Cuba">Cuba</Select.Option>
            <Select.Option  value="Curaco">Curacao</Select.Option>
            <Select.Option  value="Cyprus">Cyprus</Select.Option>
            <Select.Option  value="Czech Republic">Czech Republic</Select.Option>
            <Select.Option  value="Denmark">Denmark</Select.Option>
            <Select.Option  value="Djibouti">Djibouti</Select.Option>
            <Select.Option  value="Dominica">Dominica</Select.Option>
            <Select.Option  value="Dominican Republic">Dominican Republic</Select.Option>
            <Select.Option  value="East Timor">East Timor</Select.Option>
            <Select.Option  value="Ecuador">Ecuador</Select.Option>
            <Select.Option  value="Egypt">Egypt</Select.Option>
            <Select.Option  value="El Salvador">El Salvador</Select.Option>
            <Select.Option  value="Equatorial Guinea">Equatorial Guinea</Select.Option>
            <Select.Option  value="Eritrea">Eritrea</Select.Option>
            <Select.Option  value="Estonia">Estonia</Select.Option>
            <Select.Option  value="Ethiopia">Ethiopia</Select.Option>
            <Select.Option  value="Falkland Islands">Falkland Islands</Select.Option>
            <Select.Option  value="Faroe Islands">Faroe Islands</Select.Option>
            <Select.Option  value="Fiji">Fiji</Select.Option>
            <Select.Option  value="Finland">Finland</Select.Option>
            <Select.Option  value="France">France</Select.Option>
            <Select.Option  value="French Guiana">French Guiana</Select.Option>
            <Select.Option  value="French Polynesia">French Polynesia</Select.Option>
            <Select.Option  value="French Southern Ter">French Southern Ter</Select.Option>
            <Select.Option  value="Gabon">Gabon</Select.Option>
            <Select.Option  value="Gambia">Gambia</Select.Option>
            <Select.Option  value="Georgia">Georgia</Select.Option>
            <Select.Option  value="Germany">Germany</Select.Option>
            <Select.Option  value="Ghana">Ghana</Select.Option>
            <Select.Option  value="Gibraltar">Gibraltar</Select.Option>
            <Select.Option  value="Great Britain">Great Britain</Select.Option>
            <Select.Option  value="Greece">Greece</Select.Option>
            <Select.Option  value="Greenland">Greenland</Select.Option>
            <Select.Option  value="Grenada">Grenada</Select.Option>
            <Select.Option  value="Guadeloupe">Guadeloupe</Select.Option>
            <Select.Option  value="Guam">Guam</Select.Option>
            <Select.Option  value="Guatemala">Guatemala</Select.Option>
            <Select.Option  value="Guinea">Guinea</Select.Option>
            <Select.Option  value="Guyana">Guyana</Select.Option>
            <Select.Option  value="Haiti">Haiti</Select.Option>
            <Select.Option  value="Hawaii">Hawaii</Select.Option>
            <Select.Option  value="Honduras">Honduras</Select.Option>
            <Select.Option  value="Hong Kong">Hong Kong</Select.Option>
            <Select.Option  value="Hungary">Hungary</Select.Option>
            <Select.Option  value="Iceland">Iceland</Select.Option>
            <Select.Option  value="Indonesia">Indonesia</Select.Option>
            <Select.Option  value="India">India</Select.Option>
            <Select.Option  value="Iran">Iran</Select.Option>
            <Select.Option  value="Iraq">Iraq</Select.Option>
            <Select.Option  value="Ireland">Ireland</Select.Option>
            <Select.Option  value="Isle of Man">Isle of Man</Select.Option>
            <Select.Option  value="Israel">Israel</Select.Option>
            <Select.Option  value="Italy">Italy</Select.Option>
            <Select.Option  value="Jamaica">Jamaica</Select.Option>
            <Select.Option  value="Japan">Japan</Select.Option>
            <Select.Option  value="Jordan">Jordan</Select.Option>
            <Select.Option  value="Kazakhstan">Kazakhstan</Select.Option>
            <Select.Option  value="Kenya">Kenya</Select.Option>
            <Select.Option  value="Kiribati">Kiribati</Select.Option>
            <Select.Option  value="Korea North">Korea North</Select.Option>
            <Select.Option  value="Korea Sout">Korea South</Select.Option>
            <Select.Option  value="Kuwait">Kuwait</Select.Option>
            <Select.Option  value="Kyrgyzstan">Kyrgyzstan</Select.Option>
            <Select.Option  value="Laos">Laos</Select.Option>
            <Select.Option  value="Latvia">Latvia</Select.Option>
            <Select.Option  value="Lebanon">Lebanon</Select.Option>
            <Select.Option  value="Lesotho">Lesotho</Select.Option>
            <Select.Option  value="Liberia">Liberia</Select.Option>
            <Select.Option  value="Libya">Libya</Select.Option>
            <Select.Option  value="Liechtenstein">Liechtenstein</Select.Option>
            <Select.Option  value="Lithuania">Lithuania</Select.Option>
            <Select.Option  value="Luxembourg">Luxembourg</Select.Option>
            <Select.Option  value="Macau">Macau</Select.Option>
            <Select.Option  value="Macedonia">Macedonia</Select.Option>
            <Select.Option  value="Madagascar">Madagascar</Select.Option>
            <Select.Option  value="Malaysia">Malaysia</Select.Option>
            <Select.Option  value="Malawi">Malawi</Select.Option>
            <Select.Option  value="Maldives">Maldives</Select.Option>
            <Select.Option  value="Mali">Mali</Select.Option>
            <Select.Option  value="Malta">Malta</Select.Option>
            <Select.Option  value="Marshall Islands">Marshall Islands</Select.Option>
            <Select.Option  value="Martinique">Martinique</Select.Option>
            <Select.Option  value="Mauritania">Mauritania</Select.Option>
            <Select.Option  value="Mauritius">Mauritius</Select.Option>
            <Select.Option  value="Mayotte">Mayotte</Select.Option>
            <Select.Option  value="Mexico">Mexico</Select.Option>
            <Select.Option  value="Midway Islands">Midway Islands</Select.Option>
            <Select.Option  value="Moldova">Moldova</Select.Option>
            <Select.Option  value="Monaco">Monaco</Select.Option>
            <Select.Option  value="Mongolia">Mongolia</Select.Option>
            <Select.Option  value="Montserrat">Montserrat</Select.Option>
            <Select.Option  value="Morocco">Morocco</Select.Option>
            <Select.Option  value="Mozambique">Mozambique</Select.Option>
            <Select.Option  value="Myanmar">Myanmar</Select.Option>
            <Select.Option  value="Nambia">Nambia</Select.Option>
            <Select.Option  value="Nauru">Nauru</Select.Option>
            <Select.Option  value="Nepal">Nepal</Select.Option>
            <Select.Option  value="Netherland Antilles">Netherland Antilles</Select.Option>
            <Select.Option  value="Netherlands">Netherlands (Holland, Europe)</Select.Option>
            <Select.Option  value="Nevis">Nevis</Select.Option>
            <Select.Option  value="New Caledonia">New Caledonia</Select.Option>
            <Select.Option  value="New Zealand">New Zealand</Select.Option>
            <Select.Option  value="Nicaragua">Nicaragua</Select.Option>
            <Select.Option  value="Niger">Niger</Select.Option>
            <Select.Option  value="Nigeria">Nigeria</Select.Option>
            <Select.Option  value="Niue">Niue</Select.Option>
            <Select.Option  value="Norfolk Island">Norfolk Island</Select.Option>
            <Select.Option  value="Norway">Norway</Select.Option>
            <Select.Option  value="Oman">Oman</Select.Option>
            <Select.Option  value="Pakistan">Pakistan</Select.Option>
            <Select.Option  value="Palau Island">Palau Island</Select.Option>
            <Select.Option  value="Palestine">Palestine</Select.Option>
            <Select.Option  value="Panama">Panama</Select.Option>
            <Select.Option  value="Papua New Guinea">Papua New Guinea</Select.Option>
            <Select.Option  value="Paraguay">Paraguay</Select.Option>
            <Select.Option  value="Peru">Peru</Select.Option>
            <Select.Option  value="Phillipines">Philippines</Select.Option>
            <Select.Option  value="Pitcairn Island">Pitcairn Island</Select.Option>
            <Select.Option  value="Poland">Poland</Select.Option>
            <Select.Option  value="Portugal">Portugal</Select.Option>
            <Select.Option  value="Puerto Rico">Puerto Rico</Select.Option>
            <Select.Option  value="Qatar">Qatar</Select.Option>
            <Select.Option  value="Republic of Montenegro">Republic of Montenegro</Select.Option>
            <Select.Option  value="Republic of Serbia">Republic of Serbia</Select.Option>
            <Select.Option  value="Reunion">Reunion</Select.Option>
            <Select.Option  value="Romania">Romania</Select.Option>
            <Select.Option  value="Russia">Russia</Select.Option>
            <Select.Option  value="Rwanda">Rwanda</Select.Option>
            <Select.Option  value="St Barthelemy">St Barthelemy</Select.Option>
            <Select.Option  value="St Eustatius">St Eustatius</Select.Option>
            <Select.Option  value="St Helena">St Helena</Select.Option>
            <Select.Option  value="St Kitts-Nevis">St Kitts-Nevis</Select.Option>
            <Select.Option  value="St Lucia">St Lucia</Select.Option>
            <Select.Option  value="St Maarten">St Maarten</Select.Option>
            <Select.Option  value="St Pierre & Miquelon">St Pierre & Miquelon</Select.Option>
            <Select.Option  value="St Vincent & Grenadines">St Vincent & Grenadines</Select.Option>
            <Select.Option  value="Saipan">Saipan</Select.Option>
            <Select.Option  value="Samoa">Samoa</Select.Option>
            <Select.Option  value="Samoa American">Samoa American</Select.Option>
            <Select.Option  value="San Marino">San Marino</Select.Option>
            <Select.Option  value="Sao Tome & Principe">Sao Tome & Principe</Select.Option>
            <Select.Option  value="Saudi Arabia">Saudi Arabia</Select.Option>
            <Select.Option  value="Senegal">Senegal</Select.Option>
            <Select.Option  value="Seychelles">Seychelles</Select.Option>
            <Select.Option  value="Sierra Leone">Sierra Leone</Select.Option>
            <Select.Option  value="Singapore">Singapore</Select.Option>
            <Select.Option  value="Slovakia">Slovakia</Select.Option>
            <Select.Option  value="Slovenia">Slovenia</Select.Option>
            <Select.Option  value="Solomon Islands">Solomon Islands</Select.Option>
            <Select.Option  value="Somalia">Somalia</Select.Option>
            <Select.Option  value="South Africa">South Africa</Select.Option>
            <Select.Option  value="Spain">Spain</Select.Option>
            <Select.Option  value="Sri Lanka">Sri Lanka</Select.Option>
            <Select.Option  value="Sudan">Sudan</Select.Option>
            <Select.Option  value="Suriname">Suriname</Select.Option>
            <Select.Option  value="Swaziland">Swaziland</Select.Option>
            <Select.Option  value="Sweden">Sweden</Select.Option>
            <Select.Option  value="Switzerland">Switzerland</Select.Option>
            <Select.Option  value="Syria">Syria</Select.Option>
            <Select.Option  value="Tahiti">Tahiti</Select.Option>
            <Select.Option  value="Taiwan">Taiwan</Select.Option>
            <Select.Option  value="Tajikistan">Tajikistan</Select.Option>
            <Select.Option  value="Tanzania">Tanzania</Select.Option>
            <Select.Option  value="Thailand">Thailand</Select.Option>
            <Select.Option  value="Togo">Togo</Select.Option>
            <Select.Option  value="Tokelau">Tokelau</Select.Option>
            <Select.Option  value="Tonga">Tonga</Select.Option>
            <Select.Option  value="Trinidad & Tobago">Trinidad & Tobago</Select.Option>
            <Select.Option  value="Tunisia">Tunisia</Select.Option>
            <Select.Option  value="Turkey">Turkey</Select.Option>
            <Select.Option  value="Turkmenistan">Turkmenistan</Select.Option>
            <Select.Option  value="Turks & Caicos Is">Turks & Caicos Is</Select.Option>
            <Select.Option  value="Tuvalu">Tuvalu</Select.Option>
            <Select.Option  value="Uganda">Uganda</Select.Option>
            <Select.Option  value="United Kingdom">United Kingdom</Select.Option>
            <Select.Option  value="Ukraine">Ukraine</Select.Option>
            <Select.Option  value="United Arab Erimates">United Arab Emirates</Select.Option>
            <Select.Option  value="United States of America">United States of America</Select.Option>
            <Select.Option  value="Uraguay">Uruguay</Select.Option>
            <Select.Option  value="Uzbekistan">Uzbekistan</Select.Option>
            <Select.Option  value="Vanuatu">Vanuatu</Select.Option>
            <Select.Option  value="Vatican City State">Vatican City State</Select.Option>
            <Select.Option  value="Venezuela">Venezuela</Select.Option>
            <Select.Option  value="Vietnam">Vietnam</Select.Option>
            <Select.Option  value="Virgin Islands (Brit)">Virgin Islands (Brit)</Select.Option>
            <Select.Option  value="Virgin Islands (USA)">Virgin Islands (USA)</Select.Option>
            <Select.Option  value="Wake Island">Wake Island</Select.Option>
            <Select.Option  value="Wallis & Futana Is">Wallis & Futana Is</Select.Option>
            <Select.Option  value="Yemen">Yemen</Select.Option>
            <Select.Option  value="Zaire">Zaire</Select.Option>
            <Select.Option  value="Zambia">Zambia</Select.Option>
            <Select.Option  value="Zimbabwe">Zimbabwe</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Date Of Birth">
          <Input />
        </Form.Item>
        <Form.Item label="Do you a Social Security Number?">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Yes</Select.Option>
            <Select.Option value="AK">No</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="SSN">
          <Input />
        </Form.Item>
        <Form.Item label="Have you ever been evicted">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Yes</Select.Option>
            <Select.Option value="AK">No</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="If yes,explain">
        <Input.TextArea />
      </Form.Item>
        <Form.Item label="Have you ever been evicted of a felony">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Yes</Select.Option>
            <Select.Option value="AK">No</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="If yes,explain">
        <Input.TextArea />
      </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Country">
          <Select placeholder="United States of America">
            <Select.Option  value="Afganistan">Afghanistan</Select.Option>
            <Select.Option  value="Albania">Albania</Select.Option>
            <Select.Option  value="Algeria">Algeria</Select.Option>
            <Select.Option  value="American Samoa">American Samoa</Select.Option>
            <Select.Option  value="Andorra">Andorra</Select.Option>
            <Select.Option  value="Angola">Angola</Select.Option>
            <Select.Option  value="Anguilla">Anguilla</Select.Option>
            <Select.Option  value="Antigua & Barbuda">Antigua & Barbuda</Select.Option>
            <Select.Option  value="Argentina">Argentina</Select.Option>
            <Select.Option  value="Armenia">Armenia</Select.Option>
            <Select.Option  value="Aruba">Aruba</Select.Option>
            <Select.Option  value="Australia">Australia</Select.Option>
            <Select.Option  value="Austria">Austria</Select.Option>
            <Select.Option  value="Azerbaijan">Azerbaijan</Select.Option>
            <Select.Option  value="Bahamas">Bahamas</Select.Option>
            <Select.Option  value="Bahrain">Bahrain</Select.Option>
            <Select.Option  value="Bangladesh">Bangladesh</Select.Option>
            <Select.Option  value="Barbados">Barbados</Select.Option>
            <Select.Option  value="Belarus">Belarus</Select.Option>
            <Select.Option  value="Belgium">Belgium</Select.Option>
            <Select.Option  value="Belize">Belize</Select.Option>
            <Select.Option  value="Benin">Benin</Select.Option>
            <Select.Option  value="Bermuda">Bermuda</Select.Option>
            <Select.Option  value="Bhutan">Bhutan</Select.Option>
            <Select.Option  value="Bolivia">Bolivia</Select.Option>
            <Select.Option  value="Bonaire">Bonaire</Select.Option>
            <Select.Option  value="Bosnia & Herzegovina">Bosnia & Herzegovina</Select.Option>
            <Select.Option  value="Botswana">Botswana</Select.Option>
            <Select.Option  value="Brazil">Brazil</Select.Option>
            <Select.Option  value="British Indian Ocean Ter">British Indian Ocean Ter</Select.Option>
            <Select.Option  value="Brunei">Brunei</Select.Option>
            <Select.Option  value="Bulgaria">Bulgaria</Select.Option>
            <Select.Option  value="Burkina Faso">Burkina Faso</Select.Option>
            <Select.Option  value="Burundi">Burundi</Select.Option>
            <Select.Option  value="Cambodia">Cambodia</Select.Option>
            <Select.Option  value="Cameroon">Cameroon</Select.Option>
            <Select.Option  value="Canada">Canada</Select.Option>
            <Select.Option  value="Canary Islands">Canary Islands</Select.Option>
            <Select.Option  value="Cape Verde">Cape Verde</Select.Option>
            <Select.Option  value="Cayman Islands">Cayman Islands</Select.Option>
            <Select.Option  value="Central African Republic">Central African Republic</Select.Option>
            <Select.Option  value="Chad">Chad</Select.Option>
            <Select.Option  value="Channel Islands">Channel Islands</Select.Option>
            <Select.Option  value="Chile">Chile</Select.Option>
            <Select.Option  value="China">China</Select.Option>
            <Select.Option  value="Christmas Island">Christmas Island</Select.Option>
            <Select.Option  value="Cocos Island">Cocos Island</Select.Option>
            <Select.Option  value="Colombia">Colombia</Select.Option>
            <Select.Option  value="Comoros">Comoros</Select.Option>
            <Select.Option  value="Congo">Congo</Select.Option>
            <Select.Option  value="Cook Islands">Cook Islands</Select.Option>
            <Select.Option  value="Costa Rica">Costa Rica</Select.Option>
            <Select.Option  value="Cote DIvoire">Cote DIvoire</Select.Option>
            <Select.Option  value="Croatia">Croatia</Select.Option>
            <Select.Option  value="Cuba">Cuba</Select.Option>
            <Select.Option  value="Curaco">Curacao</Select.Option>
            <Select.Option  value="Cyprus">Cyprus</Select.Option>
            <Select.Option  value="Czech Republic">Czech Republic</Select.Option>
            <Select.Option  value="Denmark">Denmark</Select.Option>
            <Select.Option  value="Djibouti">Djibouti</Select.Option>
            <Select.Option  value="Dominica">Dominica</Select.Option>
            <Select.Option  value="Dominican Republic">Dominican Republic</Select.Option>
            <Select.Option  value="East Timor">East Timor</Select.Option>
            <Select.Option  value="Ecuador">Ecuador</Select.Option>
            <Select.Option  value="Egypt">Egypt</Select.Option>
            <Select.Option  value="El Salvador">El Salvador</Select.Option>
            <Select.Option  value="Equatorial Guinea">Equatorial Guinea</Select.Option>
            <Select.Option  value="Eritrea">Eritrea</Select.Option>
            <Select.Option  value="Estonia">Estonia</Select.Option>
            <Select.Option  value="Ethiopia">Ethiopia</Select.Option>
            <Select.Option  value="Falkland Islands">Falkland Islands</Select.Option>
            <Select.Option  value="Faroe Islands">Faroe Islands</Select.Option>
            <Select.Option  value="Fiji">Fiji</Select.Option>
            <Select.Option  value="Finland">Finland</Select.Option>
            <Select.Option  value="France">France</Select.Option>
            <Select.Option  value="French Guiana">French Guiana</Select.Option>
            <Select.Option  value="French Polynesia">French Polynesia</Select.Option>
            <Select.Option  value="French Southern Ter">French Southern Ter</Select.Option>
            <Select.Option  value="Gabon">Gabon</Select.Option>
            <Select.Option  value="Gambia">Gambia</Select.Option>
            <Select.Option  value="Georgia">Georgia</Select.Option>
            <Select.Option  value="Germany">Germany</Select.Option>
            <Select.Option  value="Ghana">Ghana</Select.Option>
            <Select.Option  value="Gibraltar">Gibraltar</Select.Option>
            <Select.Option  value="Great Britain">Great Britain</Select.Option>
            <Select.Option  value="Greece">Greece</Select.Option>
            <Select.Option  value="Greenland">Greenland</Select.Option>
            <Select.Option  value="Grenada">Grenada</Select.Option>
            <Select.Option  value="Guadeloupe">Guadeloupe</Select.Option>
            <Select.Option  value="Guam">Guam</Select.Option>
            <Select.Option  value="Guatemala">Guatemala</Select.Option>
            <Select.Option  value="Guinea">Guinea</Select.Option>
            <Select.Option  value="Guyana">Guyana</Select.Option>
            <Select.Option  value="Haiti">Haiti</Select.Option>
            <Select.Option  value="Hawaii">Hawaii</Select.Option>
            <Select.Option  value="Honduras">Honduras</Select.Option>
            <Select.Option  value="Hong Kong">Hong Kong</Select.Option>
            <Select.Option  value="Hungary">Hungary</Select.Option>
            <Select.Option  value="Iceland">Iceland</Select.Option>
            <Select.Option  value="Indonesia">Indonesia</Select.Option>
            <Select.Option  value="India">India</Select.Option>
            <Select.Option  value="Iran">Iran</Select.Option>
            <Select.Option  value="Iraq">Iraq</Select.Option>
            <Select.Option  value="Ireland">Ireland</Select.Option>
            <Select.Option  value="Isle of Man">Isle of Man</Select.Option>
            <Select.Option  value="Israel">Israel</Select.Option>
            <Select.Option  value="Italy">Italy</Select.Option>
            <Select.Option  value="Jamaica">Jamaica</Select.Option>
            <Select.Option  value="Japan">Japan</Select.Option>
            <Select.Option  value="Jordan">Jordan</Select.Option>
            <Select.Option  value="Kazakhstan">Kazakhstan</Select.Option>
            <Select.Option  value="Kenya">Kenya</Select.Option>
            <Select.Option  value="Kiribati">Kiribati</Select.Option>
            <Select.Option  value="Korea North">Korea North</Select.Option>
            <Select.Option  value="Korea Sout">Korea South</Select.Option>
            <Select.Option  value="Kuwait">Kuwait</Select.Option>
            <Select.Option  value="Kyrgyzstan">Kyrgyzstan</Select.Option>
            <Select.Option  value="Laos">Laos</Select.Option>
            <Select.Option  value="Latvia">Latvia</Select.Option>
            <Select.Option  value="Lebanon">Lebanon</Select.Option>
            <Select.Option  value="Lesotho">Lesotho</Select.Option>
            <Select.Option  value="Liberia">Liberia</Select.Option>
            <Select.Option  value="Libya">Libya</Select.Option>
            <Select.Option  value="Liechtenstein">Liechtenstein</Select.Option>
            <Select.Option  value="Lithuania">Lithuania</Select.Option>
            <Select.Option  value="Luxembourg">Luxembourg</Select.Option>
            <Select.Option  value="Macau">Macau</Select.Option>
            <Select.Option  value="Macedonia">Macedonia</Select.Option>
            <Select.Option  value="Madagascar">Madagascar</Select.Option>
            <Select.Option  value="Malaysia">Malaysia</Select.Option>
            <Select.Option  value="Malawi">Malawi</Select.Option>
            <Select.Option  value="Maldives">Maldives</Select.Option>
            <Select.Option  value="Mali">Mali</Select.Option>
            <Select.Option  value="Malta">Malta</Select.Option>
            <Select.Option  value="Marshall Islands">Marshall Islands</Select.Option>
            <Select.Option  value="Martinique">Martinique</Select.Option>
            <Select.Option  value="Mauritania">Mauritania</Select.Option>
            <Select.Option  value="Mauritius">Mauritius</Select.Option>
            <Select.Option  value="Mayotte">Mayotte</Select.Option>
            <Select.Option  value="Mexico">Mexico</Select.Option>
            <Select.Option  value="Midway Islands">Midway Islands</Select.Option>
            <Select.Option  value="Moldova">Moldova</Select.Option>
            <Select.Option  value="Monaco">Monaco</Select.Option>
            <Select.Option  value="Mongolia">Mongolia</Select.Option>
            <Select.Option  value="Montserrat">Montserrat</Select.Option>
            <Select.Option  value="Morocco">Morocco</Select.Option>
            <Select.Option  value="Mozambique">Mozambique</Select.Option>
            <Select.Option  value="Myanmar">Myanmar</Select.Option>
            <Select.Option  value="Nambia">Nambia</Select.Option>
            <Select.Option  value="Nauru">Nauru</Select.Option>
            <Select.Option  value="Nepal">Nepal</Select.Option>
            <Select.Option  value="Netherland Antilles">Netherland Antilles</Select.Option>
            <Select.Option  value="Netherlands">Netherlands (Holland, Europe)</Select.Option>
            <Select.Option  value="Nevis">Nevis</Select.Option>
            <Select.Option  value="New Caledonia">New Caledonia</Select.Option>
            <Select.Option  value="New Zealand">New Zealand</Select.Option>
            <Select.Option  value="Nicaragua">Nicaragua</Select.Option>
            <Select.Option  value="Niger">Niger</Select.Option>
            <Select.Option  value="Nigeria">Nigeria</Select.Option>
            <Select.Option  value="Niue">Niue</Select.Option>
            <Select.Option  value="Norfolk Island">Norfolk Island</Select.Option>
            <Select.Option  value="Norway">Norway</Select.Option>
            <Select.Option  value="Oman">Oman</Select.Option>
            <Select.Option  value="Pakistan">Pakistan</Select.Option>
            <Select.Option  value="Palau Island">Palau Island</Select.Option>
            <Select.Option  value="Palestine">Palestine</Select.Option>
            <Select.Option  value="Panama">Panama</Select.Option>
            <Select.Option  value="Papua New Guinea">Papua New Guinea</Select.Option>
            <Select.Option  value="Paraguay">Paraguay</Select.Option>
            <Select.Option  value="Peru">Peru</Select.Option>
            <Select.Option  value="Phillipines">Philippines</Select.Option>
            <Select.Option  value="Pitcairn Island">Pitcairn Island</Select.Option>
            <Select.Option  value="Poland">Poland</Select.Option>
            <Select.Option  value="Portugal">Portugal</Select.Option>
            <Select.Option  value="Puerto Rico">Puerto Rico</Select.Option>
            <Select.Option  value="Qatar">Qatar</Select.Option>
            <Select.Option  value="Republic of Montenegro">Republic of Montenegro</Select.Option>
            <Select.Option  value="Republic of Serbia">Republic of Serbia</Select.Option>
            <Select.Option  value="Reunion">Reunion</Select.Option>
            <Select.Option  value="Romania">Romania</Select.Option>
            <Select.Option  value="Russia">Russia</Select.Option>
            <Select.Option  value="Rwanda">Rwanda</Select.Option>
            <Select.Option  value="St Barthelemy">St Barthelemy</Select.Option>
            <Select.Option  value="St Eustatius">St Eustatius</Select.Option>
            <Select.Option  value="St Helena">St Helena</Select.Option>
            <Select.Option  value="St Kitts-Nevis">St Kitts-Nevis</Select.Option>
            <Select.Option  value="St Lucia">St Lucia</Select.Option>
            <Select.Option  value="St Maarten">St Maarten</Select.Option>
            <Select.Option  value="St Pierre & Miquelon">St Pierre & Miquelon</Select.Option>
            <Select.Option  value="St Vincent & Grenadines">St Vincent & Grenadines</Select.Option>
            <Select.Option  value="Saipan">Saipan</Select.Option>
            <Select.Option  value="Samoa">Samoa</Select.Option>
            <Select.Option  value="Samoa American">Samoa American</Select.Option>
            <Select.Option  value="San Marino">San Marino</Select.Option>
            <Select.Option  value="Sao Tome & Principe">Sao Tome & Principe</Select.Option>
            <Select.Option  value="Saudi Arabia">Saudi Arabia</Select.Option>
            <Select.Option  value="Senegal">Senegal</Select.Option>
            <Select.Option  value="Seychelles">Seychelles</Select.Option>
            <Select.Option  value="Sierra Leone">Sierra Leone</Select.Option>
            <Select.Option  value="Singapore">Singapore</Select.Option>
            <Select.Option  value="Slovakia">Slovakia</Select.Option>
            <Select.Option  value="Slovenia">Slovenia</Select.Option>
            <Select.Option  value="Solomon Islands">Solomon Islands</Select.Option>
            <Select.Option  value="Somalia">Somalia</Select.Option>
            <Select.Option  value="South Africa">South Africa</Select.Option>
            <Select.Option  value="Spain">Spain</Select.Option>
            <Select.Option  value="Sri Lanka">Sri Lanka</Select.Option>
            <Select.Option  value="Sudan">Sudan</Select.Option>
            <Select.Option  value="Suriname">Suriname</Select.Option>
            <Select.Option  value="Swaziland">Swaziland</Select.Option>
            <Select.Option  value="Sweden">Sweden</Select.Option>
            <Select.Option  value="Switzerland">Switzerland</Select.Option>
            <Select.Option  value="Syria">Syria</Select.Option>
            <Select.Option  value="Tahiti">Tahiti</Select.Option>
            <Select.Option  value="Taiwan">Taiwan</Select.Option>
            <Select.Option  value="Tajikistan">Tajikistan</Select.Option>
            <Select.Option  value="Tanzania">Tanzania</Select.Option>
            <Select.Option  value="Thailand">Thailand</Select.Option>
            <Select.Option  value="Togo">Togo</Select.Option>
            <Select.Option  value="Tokelau">Tokelau</Select.Option>
            <Select.Option  value="Tonga">Tonga</Select.Option>
            <Select.Option  value="Trinidad & Tobago">Trinidad & Tobago</Select.Option>
            <Select.Option  value="Tunisia">Tunisia</Select.Option>
            <Select.Option  value="Turkey">Turkey</Select.Option>
            <Select.Option  value="Turkmenistan">Turkmenistan</Select.Option>
            <Select.Option  value="Turks & Caicos Is">Turks & Caicos Is</Select.Option>
            <Select.Option  value="Tuvalu">Tuvalu</Select.Option>
            <Select.Option  value="Uganda">Uganda</Select.Option>
            <Select.Option  value="United Kingdom">United Kingdom</Select.Option>
            <Select.Option  value="Ukraine">Ukraine</Select.Option>
            <Select.Option  value="United Arab Erimates">United Arab Emirates</Select.Option>
            <Select.Option  value="United States of America">United States of America</Select.Option>
            <Select.Option  value="Uraguay">Uruguay</Select.Option>
            <Select.Option  value="Uzbekistan">Uzbekistan</Select.Option>
            <Select.Option  value="Vanuatu">Vanuatu</Select.Option>
            <Select.Option  value="Vatican City State">Vatican City State</Select.Option>
            <Select.Option  value="Venezuela">Venezuela</Select.Option>
            <Select.Option  value="Vietnam">Vietnam</Select.Option>
            <Select.Option  value="Virgin Islands (Brit)">Virgin Islands (Brit)</Select.Option>
            <Select.Option  value="Virgin Islands (USA)">Virgin Islands (USA)</Select.Option>
            <Select.Option  value="Wake Island">Wake Island</Select.Option>
            <Select.Option  value="Wallis & Futana Is">Wallis & Futana Is</Select.Option>
            <Select.Option  value="Yemen">Yemen</Select.Option>
            <Select.Option  value="Zaire">Zaire</Select.Option>
            <Select.Option  value="Zambia">Zambia</Select.Option>
            <Select.Option  value="Zimbabwe">Zimbabwe</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Government Issued identification Number">
          <Input />
        </Form.Item>
        <Form.Item label="Government Issuing Entity">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Yes</Select.Option>
            <Select.Option value="AK">No</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Do you have any criminal charges pending,awaiting disposion or looming in any way?">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Yes</Select.Option>
            <Select.Option value="AK">No</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="If yes,explain">
        <Input.TextArea />
      </Form.Item>
      </Col>
      </Row>
      <Checkbox>I have read the Renter Screening sectio of the Terms and Condition,and I authorize the use of the information and contact provided in this applications to complete a credit, reference,and/or background check. <a href="#">Click here</a> toused Terms and Conditions.</Checkbox>
      <Checkbox className="check-box">By submitting this application.verify that the statements provided in this application are true and correct and i agree to be screned after payment of applicaton fees.</Checkbox>
      {/* END SCREENING INFORMATION */}
      {/* START PET FORMATION */}
      <Alert message="Pet Information" type="info" />
      <Alert className="alert-padding" message="Please limit Pet Breed Field to 24 Characters.Abbreviate if nedded." type="info" style={{padding:"20px 10px"}} />
      <Form.Item label="Do you have any Pet?" style={{padding:"30px 0"}}>
      <Radio.Group>
      <Radio value={1}>Yes</Radio>
      <Radio value={2}>No</Radio>
    </Radio.Group>
        </Form.Item>
      {/* END PET INFORMATION */}
      {/* START EMERGENCY CONTACT */}
      <div className="emergency-border">
      <Alert message="Screening Information" type="info" />
      <Row gutter={24} className="inner-form">
        <Col span={12}>
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Relationship">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Married couple.</Select.Option>
            <Select.Option value="AK">Father / child.</Select.Option>
            <Select.Option value="AK">Mother / child.</Select.Option>
            <Select.Option value="AK">Mother-in-law and daughter-in-law / son.</Select.Option>
            <Select.Option value="AK">Brothers and sisters.</Select.Option>
            <Select.Option value="AK">Grandparents and grandchildren.</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Phone">
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Country">
          <Select placeholder="United States of America">
            <Select.Option  value="Afganistan">Afghanistan</Select.Option>
            <Select.Option  value="Albania">Albania</Select.Option>
            <Select.Option  value="Algeria">Algeria</Select.Option>
            <Select.Option  value="American Samoa">American Samoa</Select.Option>
            <Select.Option  value="Andorra">Andorra</Select.Option>
            <Select.Option  value="Angola">Angola</Select.Option>
            <Select.Option  value="Anguilla">Anguilla</Select.Option>
            <Select.Option  value="Antigua & Barbuda">Antigua & Barbuda</Select.Option>
            <Select.Option  value="Argentina">Argentina</Select.Option>
            <Select.Option  value="Armenia">Armenia</Select.Option>
            <Select.Option  value="Aruba">Aruba</Select.Option>
            <Select.Option  value="Australia">Australia</Select.Option>
            <Select.Option  value="Austria">Austria</Select.Option>
            <Select.Option  value="Azerbaijan">Azerbaijan</Select.Option>
            <Select.Option  value="Bahamas">Bahamas</Select.Option>
            <Select.Option  value="Bahrain">Bahrain</Select.Option>
            <Select.Option  value="Bangladesh">Bangladesh</Select.Option>
            <Select.Option  value="Barbados">Barbados</Select.Option>
            <Select.Option  value="Belarus">Belarus</Select.Option>
            <Select.Option  value="Belgium">Belgium</Select.Option>
            <Select.Option  value="Belize">Belize</Select.Option>
            <Select.Option  value="Benin">Benin</Select.Option>
            <Select.Option  value="Bermuda">Bermuda</Select.Option>
            <Select.Option  value="Bhutan">Bhutan</Select.Option>
            <Select.Option  value="Bolivia">Bolivia</Select.Option>
            <Select.Option  value="Bonaire">Bonaire</Select.Option>
            <Select.Option  value="Bosnia & Herzegovina">Bosnia & Herzegovina</Select.Option>
            <Select.Option  value="Botswana">Botswana</Select.Option>
            <Select.Option  value="Brazil">Brazil</Select.Option>
            <Select.Option  value="British Indian Ocean Ter">British Indian Ocean Ter</Select.Option>
            <Select.Option  value="Brunei">Brunei</Select.Option>
            <Select.Option  value="Bulgaria">Bulgaria</Select.Option>
            <Select.Option  value="Burkina Faso">Burkina Faso</Select.Option>
            <Select.Option  value="Burundi">Burundi</Select.Option>
            <Select.Option  value="Cambodia">Cambodia</Select.Option>
            <Select.Option  value="Cameroon">Cameroon</Select.Option>
            <Select.Option  value="Canada">Canada</Select.Option>
            <Select.Option  value="Canary Islands">Canary Islands</Select.Option>
            <Select.Option  value="Cape Verde">Cape Verde</Select.Option>
            <Select.Option  value="Cayman Islands">Cayman Islands</Select.Option>
            <Select.Option  value="Central African Republic">Central African Republic</Select.Option>
            <Select.Option  value="Chad">Chad</Select.Option>
            <Select.Option  value="Channel Islands">Channel Islands</Select.Option>
            <Select.Option  value="Chile">Chile</Select.Option>
            <Select.Option  value="China">China</Select.Option>
            <Select.Option  value="Christmas Island">Christmas Island</Select.Option>
            <Select.Option  value="Cocos Island">Cocos Island</Select.Option>
            <Select.Option  value="Colombia">Colombia</Select.Option>
            <Select.Option  value="Comoros">Comoros</Select.Option>
            <Select.Option  value="Congo">Congo</Select.Option>
            <Select.Option  value="Cook Islands">Cook Islands</Select.Option>
            <Select.Option  value="Costa Rica">Costa Rica</Select.Option>
            <Select.Option  value="Cote DIvoire">Cote DIvoire</Select.Option>
            <Select.Option  value="Croatia">Croatia</Select.Option>
            <Select.Option  value="Cuba">Cuba</Select.Option>
            <Select.Option  value="Curaco">Curacao</Select.Option>
            <Select.Option  value="Cyprus">Cyprus</Select.Option>
            <Select.Option  value="Czech Republic">Czech Republic</Select.Option>
            <Select.Option  value="Denmark">Denmark</Select.Option>
            <Select.Option  value="Djibouti">Djibouti</Select.Option>
            <Select.Option  value="Dominica">Dominica</Select.Option>
            <Select.Option  value="Dominican Republic">Dominican Republic</Select.Option>
            <Select.Option  value="East Timor">East Timor</Select.Option>
            <Select.Option  value="Ecuador">Ecuador</Select.Option>
            <Select.Option  value="Egypt">Egypt</Select.Option>
            <Select.Option  value="El Salvador">El Salvador</Select.Option>
            <Select.Option  value="Equatorial Guinea">Equatorial Guinea</Select.Option>
            <Select.Option  value="Eritrea">Eritrea</Select.Option>
            <Select.Option  value="Estonia">Estonia</Select.Option>
            <Select.Option  value="Ethiopia">Ethiopia</Select.Option>
            <Select.Option  value="Falkland Islands">Falkland Islands</Select.Option>
            <Select.Option  value="Faroe Islands">Faroe Islands</Select.Option>
            <Select.Option  value="Fiji">Fiji</Select.Option>
            <Select.Option  value="Finland">Finland</Select.Option>
            <Select.Option  value="France">France</Select.Option>
            <Select.Option  value="French Guiana">French Guiana</Select.Option>
            <Select.Option  value="French Polynesia">French Polynesia</Select.Option>
            <Select.Option  value="French Southern Ter">French Southern Ter</Select.Option>
            <Select.Option  value="Gabon">Gabon</Select.Option>
            <Select.Option  value="Gambia">Gambia</Select.Option>
            <Select.Option  value="Georgia">Georgia</Select.Option>
            <Select.Option  value="Germany">Germany</Select.Option>
            <Select.Option  value="Ghana">Ghana</Select.Option>
            <Select.Option  value="Gibraltar">Gibraltar</Select.Option>
            <Select.Option  value="Great Britain">Great Britain</Select.Option>
            <Select.Option  value="Greece">Greece</Select.Option>
            <Select.Option  value="Greenland">Greenland</Select.Option>
            <Select.Option  value="Grenada">Grenada</Select.Option>
            <Select.Option  value="Guadeloupe">Guadeloupe</Select.Option>
            <Select.Option  value="Guam">Guam</Select.Option>
            <Select.Option  value="Guatemala">Guatemala</Select.Option>
            <Select.Option  value="Guinea">Guinea</Select.Option>
            <Select.Option  value="Guyana">Guyana</Select.Option>
            <Select.Option  value="Haiti">Haiti</Select.Option>
            <Select.Option  value="Hawaii">Hawaii</Select.Option>
            <Select.Option  value="Honduras">Honduras</Select.Option>
            <Select.Option  value="Hong Kong">Hong Kong</Select.Option>
            <Select.Option  value="Hungary">Hungary</Select.Option>
            <Select.Option  value="Iceland">Iceland</Select.Option>
            <Select.Option  value="Indonesia">Indonesia</Select.Option>
            <Select.Option  value="India">India</Select.Option>
            <Select.Option  value="Iran">Iran</Select.Option>
            <Select.Option  value="Iraq">Iraq</Select.Option>
            <Select.Option  value="Ireland">Ireland</Select.Option>
            <Select.Option  value="Isle of Man">Isle of Man</Select.Option>
            <Select.Option  value="Israel">Israel</Select.Option>
            <Select.Option  value="Italy">Italy</Select.Option>
            <Select.Option  value="Jamaica">Jamaica</Select.Option>
            <Select.Option  value="Japan">Japan</Select.Option>
            <Select.Option  value="Jordan">Jordan</Select.Option>
            <Select.Option  value="Kazakhstan">Kazakhstan</Select.Option>
            <Select.Option  value="Kenya">Kenya</Select.Option>
            <Select.Option  value="Kiribati">Kiribati</Select.Option>
            <Select.Option  value="Korea North">Korea North</Select.Option>
            <Select.Option  value="Korea Sout">Korea South</Select.Option>
            <Select.Option  value="Kuwait">Kuwait</Select.Option>
            <Select.Option  value="Kyrgyzstan">Kyrgyzstan</Select.Option>
            <Select.Option  value="Laos">Laos</Select.Option>
            <Select.Option  value="Latvia">Latvia</Select.Option>
            <Select.Option  value="Lebanon">Lebanon</Select.Option>
            <Select.Option  value="Lesotho">Lesotho</Select.Option>
            <Select.Option  value="Liberia">Liberia</Select.Option>
            <Select.Option  value="Libya">Libya</Select.Option>
            <Select.Option  value="Liechtenstein">Liechtenstein</Select.Option>
            <Select.Option  value="Lithuania">Lithuania</Select.Option>
            <Select.Option  value="Luxembourg">Luxembourg</Select.Option>
            <Select.Option  value="Macau">Macau</Select.Option>
            <Select.Option  value="Macedonia">Macedonia</Select.Option>
            <Select.Option  value="Madagascar">Madagascar</Select.Option>
            <Select.Option  value="Malaysia">Malaysia</Select.Option>
            <Select.Option  value="Malawi">Malawi</Select.Option>
            <Select.Option  value="Maldives">Maldives</Select.Option>
            <Select.Option  value="Mali">Mali</Select.Option>
            <Select.Option  value="Malta">Malta</Select.Option>
            <Select.Option  value="Marshall Islands">Marshall Islands</Select.Option>
            <Select.Option  value="Martinique">Martinique</Select.Option>
            <Select.Option  value="Mauritania">Mauritania</Select.Option>
            <Select.Option  value="Mauritius">Mauritius</Select.Option>
            <Select.Option  value="Mayotte">Mayotte</Select.Option>
            <Select.Option  value="Mexico">Mexico</Select.Option>
            <Select.Option  value="Midway Islands">Midway Islands</Select.Option>
            <Select.Option  value="Moldova">Moldova</Select.Option>
            <Select.Option  value="Monaco">Monaco</Select.Option>
            <Select.Option  value="Mongolia">Mongolia</Select.Option>
            <Select.Option  value="Montserrat">Montserrat</Select.Option>
            <Select.Option  value="Morocco">Morocco</Select.Option>
            <Select.Option  value="Mozambique">Mozambique</Select.Option>
            <Select.Option  value="Myanmar">Myanmar</Select.Option>
            <Select.Option  value="Nambia">Nambia</Select.Option>
            <Select.Option  value="Nauru">Nauru</Select.Option>
            <Select.Option  value="Nepal">Nepal</Select.Option>
            <Select.Option  value="Netherland Antilles">Netherland Antilles</Select.Option>
            <Select.Option  value="Netherlands">Netherlands (Holland, Europe)</Select.Option>
            <Select.Option  value="Nevis">Nevis</Select.Option>
            <Select.Option  value="New Caledonia">New Caledonia</Select.Option>
            <Select.Option  value="New Zealand">New Zealand</Select.Option>
            <Select.Option  value="Nicaragua">Nicaragua</Select.Option>
            <Select.Option  value="Niger">Niger</Select.Option>
            <Select.Option  value="Nigeria">Nigeria</Select.Option>
            <Select.Option  value="Niue">Niue</Select.Option>
            <Select.Option  value="Norfolk Island">Norfolk Island</Select.Option>
            <Select.Option  value="Norway">Norway</Select.Option>
            <Select.Option  value="Oman">Oman</Select.Option>
            <Select.Option  value="Pakistan">Pakistan</Select.Option>
            <Select.Option  value="Palau Island">Palau Island</Select.Option>
            <Select.Option  value="Palestine">Palestine</Select.Option>
            <Select.Option  value="Panama">Panama</Select.Option>
            <Select.Option  value="Papua New Guinea">Papua New Guinea</Select.Option>
            <Select.Option  value="Paraguay">Paraguay</Select.Option>
            <Select.Option  value="Peru">Peru</Select.Option>
            <Select.Option  value="Phillipines">Philippines</Select.Option>
            <Select.Option  value="Pitcairn Island">Pitcairn Island</Select.Option>
            <Select.Option  value="Poland">Poland</Select.Option>
            <Select.Option  value="Portugal">Portugal</Select.Option>
            <Select.Option  value="Puerto Rico">Puerto Rico</Select.Option>
            <Select.Option  value="Qatar">Qatar</Select.Option>
            <Select.Option  value="Republic of Montenegro">Republic of Montenegro</Select.Option>
            <Select.Option  value="Republic of Serbia">Republic of Serbia</Select.Option>
            <Select.Option  value="Reunion">Reunion</Select.Option>
            <Select.Option  value="Romania">Romania</Select.Option>
            <Select.Option  value="Russia">Russia</Select.Option>
            <Select.Option  value="Rwanda">Rwanda</Select.Option>
            <Select.Option  value="St Barthelemy">St Barthelemy</Select.Option>
            <Select.Option  value="St Eustatius">St Eustatius</Select.Option>
            <Select.Option  value="St Helena">St Helena</Select.Option>
            <Select.Option  value="St Kitts-Nevis">St Kitts-Nevis</Select.Option>
            <Select.Option  value="St Lucia">St Lucia</Select.Option>
            <Select.Option  value="St Maarten">St Maarten</Select.Option>
            <Select.Option  value="St Pierre & Miquelon">St Pierre & Miquelon</Select.Option>
            <Select.Option  value="St Vincent & Grenadines">St Vincent & Grenadines</Select.Option>
            <Select.Option  value="Saipan">Saipan</Select.Option>
            <Select.Option  value="Samoa">Samoa</Select.Option>
            <Select.Option  value="Samoa American">Samoa American</Select.Option>
            <Select.Option  value="San Marino">San Marino</Select.Option>
            <Select.Option  value="Sao Tome & Principe">Sao Tome & Principe</Select.Option>
            <Select.Option  value="Saudi Arabia">Saudi Arabia</Select.Option>
            <Select.Option  value="Senegal">Senegal</Select.Option>
            <Select.Option  value="Seychelles">Seychelles</Select.Option>
            <Select.Option  value="Sierra Leone">Sierra Leone</Select.Option>
            <Select.Option  value="Singapore">Singapore</Select.Option>
            <Select.Option  value="Slovakia">Slovakia</Select.Option>
            <Select.Option  value="Slovenia">Slovenia</Select.Option>
            <Select.Option  value="Solomon Islands">Solomon Islands</Select.Option>
            <Select.Option  value="Somalia">Somalia</Select.Option>
            <Select.Option  value="South Africa">South Africa</Select.Option>
            <Select.Option  value="Spain">Spain</Select.Option>
            <Select.Option  value="Sri Lanka">Sri Lanka</Select.Option>
            <Select.Option  value="Sudan">Sudan</Select.Option>
            <Select.Option  value="Suriname">Suriname</Select.Option>
            <Select.Option  value="Swaziland">Swaziland</Select.Option>
            <Select.Option  value="Sweden">Sweden</Select.Option>
            <Select.Option  value="Switzerland">Switzerland</Select.Option>
            <Select.Option  value="Syria">Syria</Select.Option>
            <Select.Option  value="Tahiti">Tahiti</Select.Option>
            <Select.Option  value="Taiwan">Taiwan</Select.Option>
            <Select.Option  value="Tajikistan">Tajikistan</Select.Option>
            <Select.Option  value="Tanzania">Tanzania</Select.Option>
            <Select.Option  value="Thailand">Thailand</Select.Option>
            <Select.Option  value="Togo">Togo</Select.Option>
            <Select.Option  value="Tokelau">Tokelau</Select.Option>
            <Select.Option  value="Tonga">Tonga</Select.Option>
            <Select.Option  value="Trinidad & Tobago">Trinidad & Tobago</Select.Option>
            <Select.Option  value="Tunisia">Tunisia</Select.Option>
            <Select.Option  value="Turkey">Turkey</Select.Option>
            <Select.Option  value="Turkmenistan">Turkmenistan</Select.Option>
            <Select.Option  value="Turks & Caicos Is">Turks & Caicos Is</Select.Option>
            <Select.Option  value="Tuvalu">Tuvalu</Select.Option>
            <Select.Option  value="Uganda">Uganda</Select.Option>
            <Select.Option  value="United Kingdom">United Kingdom</Select.Option>
            <Select.Option  value="Ukraine">Ukraine</Select.Option>
            <Select.Option  value="United Arab Erimates">United Arab Emirates</Select.Option>
            <Select.Option  value="United States of America">United States of America</Select.Option>
            <Select.Option  value="Uraguay">Uruguay</Select.Option>
            <Select.Option  value="Uzbekistan">Uzbekistan</Select.Option>
            <Select.Option  value="Vanuatu">Vanuatu</Select.Option>
            <Select.Option  value="Vatican City State">Vatican City State</Select.Option>
            <Select.Option  value="Venezuela">Venezuela</Select.Option>
            <Select.Option  value="Vietnam">Vietnam</Select.Option>
            <Select.Option  value="Virgin Islands (Brit)">Virgin Islands (Brit)</Select.Option>
            <Select.Option  value="Virgin Islands (USA)">Virgin Islands (USA)</Select.Option>
            <Select.Option  value="Wake Island">Wake Island</Select.Option>
            <Select.Option  value="Wallis & Futana Is">Wallis & Futana Is</Select.Option>
            <Select.Option  value="Yemen">Yemen</Select.Option>
            <Select.Option  value="Zaire">Zaire</Select.Option>
            <Select.Option  value="Zambia">Zambia</Select.Option>
            <Select.Option  value="Zimbabwe">Zimbabwe</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Address(line two)">
          <Input />
        </Form.Item>
        <Form.Item label="City">
          <Input />
        </Form.Item>
        <Form.Item label="State Zip">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Alabama</Select.Option>
            <Select.Option value="AK">Alaska</Select.Option>
            <Select.Option value="AZ">Arizona</Select.Option>
            <Select.Option value="AR">Arkansas</Select.Option>
            <Select.Option value="CA">California</Select.Option>
            <Select.Option value="CO">Colorado</Select.Option>
            <Select.Option value="CT">Connecticut</Select.Option>
            <Select.Option value="DE">Delaware</Select.Option>
            <Select.Option value="DC">District Of Columbia</Select.Option>
            <Select.Option value="FL">Florida</Select.Option>
            <Select.Option value="GA">Georgia</Select.Option>
            <Select.Option value="HI">Hawaii</Select.Option>
            <Select.Option value="ID">Idaho</Select.Option>
            <Select.Option value="IL">Illinois</Select.Option>
            <Select.Option value="IN">Indiana</Select.Option>
            <Select.Option value="IA">Iowa</Select.Option>
            <Select.Option value="KS">Kansas</Select.Option>
            <Select.Option value="KY">Kentucky</Select.Option>
            <Select.Option value="LA">Louisiana</Select.Option>
            <Select.Option value="ME">Maine</Select.Option>
            <Select.Option value="MD">Maryland</Select.Option>
            <Select.Option value="MA">Massachusetts</Select.Option>
            <Select.Option value="MI">Michigan</Select.Option>
            <Select.Option value="MN">Minnesota</Select.Option>
            <Select.Option value="MS">Mississippi</Select.Option>
            <Select.Option value="MO">Missouri</Select.Option>
            <Select.Option value="MT">Montana</Select.Option>
            <Select.Option value="NE">Nebraska</Select.Option>
            <Select.Option value="NV">Nevada</Select.Option>
            <Select.Option value="NH">New Hampshire</Select.Option>
            <Select.Option value="NJ">New Jersey</Select.Option>
            <Select.Option value="NM">New Mexico</Select.Option>
            <Select.Option value="NY">New York</Select.Option>
            <Select.Option value="NC">North Carolina</Select.Option>
            <Select.Option value="ND">North Dakota</Select.Option>
            <Select.Option value="OH">Ohio</Select.Option>
            <Select.Option value="OK">Oklahoma</Select.Option>
            <Select.Option value="OR">Oregon</Select.Option>
            <Select.Option value="PA">Pennsylvania</Select.Option>
            <Select.Option value="RI">Rhode Island</Select.Option>
            <Select.Option value="SC">South Carolina</Select.Option>
            <Select.Option value="SD">South Dakota</Select.Option>
            <Select.Option value="TN">Tennessee</Select.Option>
            <Select.Option value="TX">Texas</Select.Option>
            <Select.Option value="UT">Utah</Select.Option>
            <Select.Option value="VT">Vermont</Select.Option>
            <Select.Option value="VA">Virginia</Select.Option>
            <Select.Option value="WA">Washington</Select.Option>
            <Select.Option value="WV">West Virginia</Select.Option>
            <Select.Option value="WI">Wisconsin</Select.Option>
            <Select.Option value="WY">Wyoming</Select.Option>
            </Select>
        </Form.Item>
      </Col>
      </Row>
        </div>
      {/* END EMERGENCY CONTACT */}
      {/* START INSURANCE QUESTION */}
      <Alert message="Insurance Question" type="info" />
      <Row gutter={24} className="inner-form">
        <Col span={12}>
        <h1>Previous Employment Information</h1>
        <Form.Item label="Agree Insurance Program Policy">
          <Select>
            <Select.Option value=""></Select.Option>          
            <Select.Option value="AL">Married couple.</Select.Option>
            <Select.Option value="AK">Father / child.</Select.Option>
            <Select.Option value="AK">Mother / child.</Select.Option>
            <Select.Option value="AK">Mother-in-law and daughter-in-law / son.</Select.Option>
            <Select.Option value="AK">Brothers and sisters.</Select.Option>
            <Select.Option value="AK">Grandparents and grandchildren.</Select.Option>
            </Select>
        </Form.Item>
      </Col>
      <Col span={12}>
      </Col>
      </Row>
      {/* END INSURANCE QUESTION */}
      {/* START AGREEMENT */}
      <Alert message="Agreement" type="info" />
      <Row gutter={24} className="inner-form">
      <Checkbox>By signing this applicaton,I agee that the informationprovided in this application is true and correct.
Use your mouse or finger to sign in the boxes, <a href="#">or choose a script signature.</a></Checkbox> 
      </Row>
      {/* END AGREEMENT */}
    </Form>
    </div>
    <div className="footer">
      <p>Ⓒ2021 Avenue5 Residential,LLC.All Right Reserved. │ Website Design by RENT cafe Ⓒ2021 Yardi Systems,Inc.All Right TEserved. We do not aceot comprehensive reusable tenant scteening reports as defined by and pursuant to RCW 59.18.257.Screening Policy</p>
    </div>
    </>
  );
};
export default App;
