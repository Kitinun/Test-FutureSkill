import React, { useState } from 'react'
import { Row, Col, Modal, Form } from 'react-bootstrap';
import InputDatePicker from '../InputDatePicker';
import InputText from '../InputText';
import UploadImageFile from '../UploadImageFile';

function ModalSettingBook(props) {

    const initialForm = {
        name_book: '',
        date_read: '',
        author_book: '',
        time_read: ''
    }
    const [form, setForm] = useState(initialForm)

    const initInvalidMsg = {
        name_book: '',
        date_read: '',
        author_book: '',
        time_read: ''
    }
    const [invalid, setInvalid] = useState(initInvalidMsg);

    const [imageBook, setImageBook] = useState("")

    const handleClose = () => {
        props.close()
    }

    const addInvalid = (element, message) => {
        invalid[element] = message;
        setInvalid({ ...invalid });
    }

    const removeInvalid = (element) => {
        invalid[element] = "";
        setInvalid({ ...invalid });
    }

    const validate = () => {
        let validated = true;

        if (form.name_book === "") {
            addInvalid('name_book', "กรุณากรอกชื่อหนังสือ");
            validated = false;
        }

        if (form.date_read === "") {
            addInvalid('date_read', "กรุณาระบุวันที่อ่านจบ");
            validated = false;
        }

        if (form.author_book === "") {
            addInvalid('author_book', "กรุณากรอกชื่อผู้เขียน");
            validated = false;
        }

        if (form.time_read === "") {
            addInvalid('time_read', "กรุณาระบุระยะเวลาที่อ่านจบ");
            validated = false;
        }

        return validated;
    }

    const toSaveBook = async () => {
        if (validate()) {
            props.save(form)
        }
    };

    console.log('form', form);

    return (
        <Modal
            show={props.show}
            size={"lg"}
            onHide={() => handleClose(false)}
            centered
        >
            <Modal.Header closeButton>
                <h4 className="blod"> {props.mode === "add" ? "เพิ่มหนังสือ" : "แก้ไขหนังสือ"}</h4>
            </Modal.Header>
            <Modal.Body className='px-4'>
                <Row className="mb-4">
                    <Col lg={6} md={6} sm={12}>
                        <InputText title="ชื่อหนังสือ" star={true}
                            placeholder="กรุณาระบุ" idName="name_book" classLabel="normal" value={form.name_book}
                            handleChange={(value) => {
                                setForm({ ...form, name_book: value })
                            }}
                            handleInvalid={() => { removeInvalid("name_book") }} invalid={invalid.name_book}
                        />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <InputDatePicker title="วันที่อ่านจบ" classLabel="normal" placeholder="วัน/เดือน/ปี"
                            value={form.date_read} star={true}
                            handleChange={(value) => setForm({ ...form, date_read: value })}
                            handleInvalid={() => { removeInvalid("date_read") }} invalid={invalid.date_read}
                        />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="mt-2">
                        <InputText title="ชื่อคนเขียน" star={true}
                            placeholder="กรุณาระบุ" idName="author_book" classLabel="normal" value={form.author_book}
                            handleChange={(value) => {
                                setForm({ ...form, author_book: value })
                            }}
                            handleInvalid={() => { removeInvalid("author_book") }} invalid={invalid.author_book}
                        />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="mt-2">
                        <InputText title="ระยะเวลาในการอ่าน" star={true} placeholder="00:00" type="time"
                            idName="no" classLabel="normal" value={form.time_read}
                            handleChange={(value) => {
                                setForm({ ...form, time_read: value })
                            }}
                            handleInvalid={() => { removeInvalid("time_read") }} invalid={invalid.time_read}
                        />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="mt-4">
                        <UploadImageFile files={imageBook} type="img" name="รูปปก" position="left"
                            onChange={(file) => setImageBook(file)}
                        />
                    </Col>
                </Row>

                <div className="py-2 d-flex align-items-center justify-content-end">
                    <button className="btn btn-danger px-4 mr-2" onClick={() => handleClose()}>ยกเลิก</button>
                    <button className="btn btn-success px-4" onClick={() => toSaveBook()}>ตกลง</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalSettingBook