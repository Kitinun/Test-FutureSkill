import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import './home.css'
import { Layout } from 'antd';
import BoxCard from '../../components/BoxCard';
import DataTable from '../../components/DataTable';
import DataTableNodata from '../../components/DataNoTable';
import ModalSettingBook from '../../components/Modal/ModalSettingBook';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)
const { Content } = Layout;

function Home() {

  const [showModalBook, setShowModalBook] = useState(false)

  const state = useSelector(state => state)
  
  console.log('state', state);

  const initialForm = {
    mode: ""
  }
  const [form, setForm] = useState(initialForm);

  const dataTest = [
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
      name: 'Book1',
      date: '05/07/2022',
      name_author: 'Kitinun',
      time: '14:43',
      image: ''
    },
    {
      id: 3,
      name: 'Book1',
      date: '05/07/2022',
      name_author: 'Kitinun',
      time: '14:43',
      image: ''
    }
  ]

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

  const deleteBook = async (id) => {
    MySwal.fire({
      icon: "warning",
      text: "ยืนยันที่จะลบ?",
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง"
    }).then(async (result) => {
      // if (result.value) {
      //   try {
      //     const response = await API.deleteMenu(id)
      //     if (response.status === 200) {
      //       MySwal.fire({
      //         text: "ลบเมนูสำเร็จ",
      //         icon: "success",
      //         confirmButtonText: "ตกลง"
      //       }).then(async (result) => {
      //         if (result.value) {
      //           getSettingMenu()
      //         }
      //       })
      //     }
      //   } catch (error) {
      //     console.log(error);
      //     if (error.response && error.response.status === 401) {
      //       dispatch(logout({ history }))
      //       MySwal.fire({
      //         text: "ลบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
      //         icon: "warning",
      //         confirmButtonText: "ตกลง"
      //       })
      //     }
      //     if (error.response && error.response.status === 400) {
      //       MySwal.fire({
      //         text: "ลบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
      //         icon: "warning",
      //         confirmButtonText: "ตกลง"
      //       })
      //     }
      //     if (error.response && error.response.status === 500) {
      //       MySwal.fire({
      //         text: "ลบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
      //         icon: "warning",
      //         confirmButtonText: "ตกลง"
      //       })
      //     }
      //   }
      // }
    })
  }

  const toSaveBook = async (data) => {
    // const formData = new FormData();

    // formData.append("menu_code", data.menu_code)
    // formData.append("menu_th_name", data.menu_th_name)
    // formData.append("menu_en_name", data.menu_en_name)
    // formData.append("menu_status", data.status)

    // if (data.mode === "edit") {
    //     formData.append("_method", "PUT")
    // }

    // setShowModalMenu(false)
    // // return;
    // try {
    //     const response = data.mode === "save" ? await API.saveMenu(formData) : await API.updateMenu(data.idEdit, formData)
    //     if (response.status === 200) {
    //         MySwal.fire({
    //             text: data.mode === "save" ? "บันทึกรายการเมนูสำเร็จ" : "แก้ไขรายการเมนูสำเร็จ",
    //             icon: "success",
    //             confirmButtonText: "ตกลง"
    //         }).then(async (result) => {
    //             if (result.value) {
    //                 getSettingMenu()
    //             }
    //         })
    //     }
    // } catch (error) {
    //     console.log(error);
    //     if (error.response && error.response.status === 401) {
    //         dispatch(logout({ history }))
    //         MySwal.fire({
    //             text: "บันทึกไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
    //             icon: "warning",
    //             confirmButtonText: "ตกลง"
    //         })
    //     }
    //     if (error.response && error.response.status === 400) {
    //         MySwal.fire({
    //             text: "บันทึกไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
    //             icon: "warning",
    //             confirmButtonText: "ตกลง"
    //         })
    //     }
    //     if (error.response && error.response.status === 500) {
    //         MySwal.fire({
    //             text: "บันทึกไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
    //             icon: "warning",
    //             confirmButtonText: "ตกลง"
    //         })
    //     }
    // }
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
          <td>{item.image}</td>
          <td className="manage-width">
            <div className="d-flex justify-content-center border-0 ">
              <button className="btn btn-info mr-2 " onClick={() => {
                setShowModalBook(true)
                form.mode = 'edit'
              }} >
                แก้ไข
              </button>
              <button className="btn btn-danger" onClick={() => deleteBook(item.id)} >
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
      <Content>
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
              {renderTableBooks(dataTest)}
            </DataTable>
          </div>
        </BoxCard>

        {showModalBook &&
          <ModalSettingBook show={showModalBook} mode={form.mode} close={() => setShowModalBook(false)} save={(data) => toSaveBook(data)} />
        }
      </Content>
    </div>
  )
}

export default Home
