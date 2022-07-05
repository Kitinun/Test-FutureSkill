import React, { Component, useState } from 'react';
// import { useSelector } from 'react-redux';
import './home.css'
import { Container } from 'react-bootstrap';
import BoxCard from '../../components/BoxCard';
import DataTable from '../../components/DataTable';
import DataTableNodata from '../../components/DataNoTable';
import ModalSettingBook from '../../components/Modal/ModalSettingBook';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

function Home() {

  const [showModalBook, setShowModalBook] = useState(false)

  // const state = useSelector(state => state)
  // console.log('state', state);

  const initialForm = {
    mode: "",
    dataBookEdit: {},
    indexEdit: ''
  }
  const [form, setForm] = useState(initialForm);

  const [bookList, setBookList] = useState([
    {
      id: 1,
      name: 'Book1',
      date: '05/07/2022',
      name_author: 'Kitinun',
      time: '14:43',
      image: ''
    },
    {
      id: 2,
      name: 'Book2',
      date: '05/07/2022',
      name_author: 'Kitinun',
      time: '20:16',
      image: ''
    },
    {
      id: 3,
      name: 'Book3',
      date: '06/07/2022',
      name_author: 'Kitinun',
      time: '10:43',
      image: ''
    }
  ])

  const headTitle = [
    {
      name: "ลำดับ"
    },
    {
      name: "ชื่อ"
    },
    {
      name: "วันที่อ่านจบ"
    },
    {
      name: "ชื่อคนเขียน"
    },
    {
      name: "ระยะเวาลาที่ให้ในการอ่าน"
    },
    {
      name: "รูปปก"
    },
    {
      name: "การจัดการ"
    }
  ]

  const deleteBook = async (index) => {
    MySwal.fire({
      icon: "warning",
      text: "ยืนยันที่จะลบ?",
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง"
    }).then(async (result) => {
      bookList.splice(index, 1)
      setBookList([...bookList])
      MySwal.fire({
        icon: "success",
        text: "ลบสำเร็จ",
        showCloseButton: true,
        confirmButtonText: "ตกลง"
      })
    })
  }

  const toSaveBook = async (data) => {
    bookList.push(data)
    setBookList([...bookList])
    MySwal.fire({
      icon: "success",
      text: "บันทึกสำเร็จ",
      showCloseButton: true,
      confirmButtonText: "ตกลง"
    })
  };

  const toSaveEdit = async (data, index) => {
    bookList[index] = data
    setBookList([...bookList])
    MySwal.fire({
      icon: "success",
      text: "บันทึกสำเร็จ",
      showCloseButton: true,
      confirmButtonText: "ตกลง"
    })
  };

  const renderTableBooks = (data) => {
    if (data && data.length > 0) {
      return data.map((item, i) => (
        <tr key={i} className="font14 text-center">
          <td className="index-width">{i + 1}</td>
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td>{item.name_author}</td>
          <td>{item.time}</td>
          <td><image src={item.image} />{item.image ? item.image : <span className='text-red'>No Image</span>}</td>
          <td className="manage-width">
            <div className="d-flex justify-content-center border-0 ">
              <button className="btn btn-info mr-2 " onClick={() => {
                setShowModalBook(true)
                setForm({
                  ...form,
                  mode: 'edit',
                  dataBookEdit: item,
                  indexEdit: i
                })
              }} >
                แก้ไข
              </button>
              <button className="btn btn-danger" onClick={() => deleteBook(i)} >
                ลบ
              </button>
            </div>
          </td>
        </tr>
      ))
    } else {
      return <DataTableNodata colSpan={7} />
    }
  }

  return (
    <div className="py-3 px-4 mt-2">
      <Container>
        <BoxCard className="mb-3 p-2">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="blod mb-0">รายการหนังสือ</h3>
            <div>
              <button className="btn btn-info" onClick={() => {
                setShowModalBook(true)
                form.mode = 'add'
              }}>
                <i className="fa fa-plus mr-2" aria-hidden="true"></i> เพิ่มหนังสือ
              </button>
            </div>
          </div>

          <div className="mt-4">
            <DataTable headColumns={headTitle}>
              {renderTableBooks(bookList)}
            </DataTable>
          </div>
        </BoxCard>

        {showModalBook &&
          <ModalSettingBook show={showModalBook} mode={form.mode} close={() => setShowModalBook(false)} save={(data) => toSaveBook(data)} saveEdit={(data, index) => toSaveEdit(data, index)}
            bookList={bookList} dataBook={form.dataBookEdit} indexEdit={form.indexEdit}
          />
        }
      </Container>
    </div>
  )
}

export default Home
