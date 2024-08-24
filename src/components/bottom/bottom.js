import "./bottom.scss"
import React from 'react';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Space, Button, Select, } from 'antd';


function Bottom() {

    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1677ff',
            }}
        />
    );
    const onSearch = (value, _e, info) => console.log(info?.source, value);


    const options = [
        {
            value: 'JP+1',
            label: 'JP+1',
        },
        {
            value: 'Angola + 244',
            label: 'Angola + 244',
        },
    ];

    return (
        <>
            <div className="botfu">
                <div className="bottomfu">
                    <div className="bottomzileft">
                        <div className="zileft">
                            <div className="zilefts">
                                <div style={{ fontWeight: '600' }}>COMPANY INFO</div>
                                <a href="" className="zileftsa">About SHEIN</a>
                                <a href="" className="zileftsa">Social Responsibility</a>
                                <a href="" className="zileftsa">Business Model</a>
                                <a href="" className="zileftsa">Newsroom</a>
                                <a href="" className="zileftsa">#SHEINpartner</a>
                                <a href="" className="zileftsa">Careers</a>
                                <a href="" className="zileftsa">Legal Information and Notices</a>
                                <a href="" className="zileftsa">SHEIN TOKYO SHOWROOM</a>
                                <a href="" className="zileftsa">#SHEIN101</a>
                            </div>
                            <div className="zilefts">
                                <div style={{ fontWeight: '600' }}>HELP & SUPPORT</div>
                                <a href="" className="zileftsa">Shopping Guide</a>
                                <a href="" className="zileftsa">Payment Method </a>
                                <a href="" className="zileftsa">Shipping Info </a>
                                <a href="" className="zileftsa">Return Policy</a>
                                <a href="" className="zileftsa">Refund Method</a>
                                <a href="" className="zileftsa">How To Order </a>
                                <a href="" className="zileftsa">How To Track </a>
                                <a href="" className="zileftsa">Size Guide </a>
                                <a href="" className="zileftsa">SHEIN VIP </a>

                            </div>
                            <div className="zilefts">
                                <div style={{ fontWeight: '600' }}>CUSTOMER CARE</div>
                                <a href="" className="zileftsa">Contact Us </a>
                                <a href="" className="zileftsa">SHEIN Point </a>
                                <a href="" className="zileftsa">SHEIN Gift Card</a>
                                <a href="" className="zileftsa">SHEIN Wallet</a>
                                <a href="" className="zileftsa">Review Guidance</a>
                                <a href="" className="zileftsa">Rating Rules</a>
                            </div>
                        </div>
                        <div className="zileftbt">
                            <div style={{ margin: '10px 0', color: '#666666' }}>©2009-2024 SHEIN All Rights Reserved</div>
                            <div style={{ margin: '10px 0', color: '#666666' }}>
                                <a href="" style={{ color: '#666666', display: 'inline-block', marginRight: '10px' }}>Privacy Center</a> |
                                <a href="" style={{ color: '#666666', display: 'inline-block', marginLeft: '10px', marginRight: '5px', }}>Privacy & Cookie Policy</a> |
                                <a href="" style={{ color: '#666666', display: 'inline-block', marginLeft: '10px', marginRight: '5px', }}>Terms & Conditions</a> |
                                <a href="" style={{ color: '#666666', display: 'inline-block', marginLeft: '10px', marginRight: '5px', }}>Marketplace IP Rules</a> |
                                <a href="" style={{ color: '#666666', display: 'inline-block', marginLeft: '10px', marginRight: '5px', }}>IP Notice</a> |
                                <a href="" style={{ color: '#666666', display: 'inline-block', marginLeft: '10px', marginRight: '5px', }}>Imprint</a> |
                                <a href="" style={{ color: '#666666', display: 'inline-block', marginLeft: '10px', marginRight: '5px', }}>Ad Choice</a> |
                                <a href="" style={{ color: '#666666', display: 'inline-block', marginLeft: '10px', marginRight: '5px', }}>Japan</a>
                            </div>
                        </div>
                    </div>
                    <div className="bottomziright">

                        <div className="zirightone">
                            <div>FIND US ON SNS</div>
                            <div>APP</div>
                        </div>

                        <div className="zirighttwo">
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg1.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg2.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg3.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg4.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg5.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg6.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg7.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg10.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg8.png" alt="" style={{ width: '30px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimg9.png" alt="" style={{ width: '30px' }} /></a>
                        </div>

                        <div className="zirightone">
                            SIGN UP FOR SHEIN STYLE NEWS
                        </div>

                        <div className="zirightone">
                            <Search
                                style={{ width: '100%' }}
                                placeholder="Your Email Address"
                                allowClear
                                enterButton="Subscribe"
                                size="large"
                                onSearch={onSearch}
                            />
                        </div>

                        <div>
                            <Space.Compact style={{ width: '100%', }}>
                                <Select defaultValue="JP+1" options={options} />
                                <Input defaultValue="WhatsApp Account" />
                                <Button type="primary">Subscribe</Button>
                            </Space.Compact>
                        </div>

                        <div className="zirightone" style={{ marginTop: '55px' }}>
                            WE ACCEPT
                        </div>

                        <div className="zirighttwo">
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi1.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi2.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi3.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi4.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi5.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi6.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi7.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi8.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi9.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi10.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi11.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi12.png" alt="" style={{ width: '35px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px', cursor: 'default' }}> <img src="assets/botimgdi13.png" alt="" style={{ width: '35px' }} /></a>
                        </div>

                        <div className="zirighttwo">
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimgdix1.png" alt="" style={{ width: '50px' }} /></a>
                            <a href="" style={{ textDecoration: 'none', display: 'inline-block', marginRight: '20px' }}> <img src="assets/botimgdix2.png" alt="" style={{ width: '60px' }} /></a>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
export default Bottom