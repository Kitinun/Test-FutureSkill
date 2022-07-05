import React, { useEffect, useState } from 'react'
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);

function UploadImageFile({ title, files, onChange, star, type, invalid, handleInvalid, classLabel, position, name, mode }) {

    const initialForm = {
        file: "",
        imagePreviewUrl: "",
        check: false
    }
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (mode == "edit") {
            setForm({ ...form, imagePreviewUrl: files })
        } else {
            setForm({ ...form, imagePreviewUrl: "" })
        }
    }, [files])

    const _handleImageChange = (e) => {
        e.preventDefault();
        const fileTypeArray = ['image/png', 'image/jpg', 'image/jpeg']
        let reader = new window.FileReader();
        let file = e.target.files[0];

        if (fileTypeArray.includes(file.type)) {
            reader.onloadend = () => {
                setForm({ ...form, file: file, imagePreviewUrl: reader.result });
            };
            reader.readAsDataURL(file);
            onChange(file, reader.result);
        }
    }

    const delImg = () => {
        setForm(initialForm);
    }

    const renderImage = () => {
        if (form.imagePreviewUrl) {
            return (
                <div className="d-flex align-items-center">
                    <img className="img-fluid border" src={form.imagePreviewUrl} alt="img-file" />
                    <img className="border-0 icon-del cursor-p ml-1" src={"/svg/del.svg"} alt="del" onClick={() => delImg()} />
                </div>
            )
        }
    }

    return (
        <div>
            <div className={position == "left" ? "d-flex align-items-center" : ""}>
                <p className={`${classLabel} mb-0`}>{title} <span className="text-danger">{star ? "*" : ""}</span></p>
                {position == "top" &&
                    <div className="previewComponent d-flex flex-wrap">
                        <div className={type == "profile" ? "imgPreview mb-3 mb-sm-0" : "imgPreviewFile mb-3 mb-sm-0"}>{renderImage()}</div>
                    </div>}

                {!form.check ? <div className="img-camera">
                    <div className="file">
                        <button className="btn btn-file btn-choose mr-1 text-white" >
                            <i className="fa fa-upload mr-2" aria-hidden="true"></i> {name ? name : "อัปโหลดรูป"}
                        </button>
                        <input
                            type="file"
                            name="file"
                            accept="image/png,image/jpeg,image/jpg"
                            onChange={e => {
                                _handleImageChange(e)
                                if (handleInvalid) {
                                    handleInvalid()
                                }
                            }}
                        />
                    </div>
                </div>
                    : ""
                }

            </div>
            {position == "left" &&
                <div className="previewComponent d-flex flex-wrap">
                    <div className={type == "profile" ? "imgPreview mb-3 mb-sm-0" : "imgPreviewFile mb-3 mb-sm-0"}>{renderImage()}</div>
                </div>
            }
            {invalid ? <span className="invalid-error">{invalid}</span> : ""}

            <style jsx="true" global="true">{`
                .previewComponent {
                    display: flex;
                    flex-direction: row;
                }
                .previewComponent p {
                    margin-bottom: 0;
                }
                // .img-camera {
                //   margin-top: -30px;
                //   margin-left: 70px;
                // }
                .img-camera .file {
                    position: relative;
                    overflow: hidden;
                    display: inline-block;

                }
                .img-camera .file:hover {
                    cursor: pointer!important;
                }
                .img-camera input {
                    position: absolute;
                    opacity: 0;
                    left: 0;
                    top: 0;
                    height: 100%;
                }

                .btn-file {
                    background: linear-gradient(180deg, #EABD4B 0%, #EABD4B 100%);
                    border: 1px solid #EABD4B;
                    box-sizing: border-box;
                }

                .previewComponent .imgPreview {
                    text-align: center;
                    margin: 0;
                }
                .previewComponent .imgPreview svg {
                    text-align: center;
                    margin: 1rem 0;
                    font-size: 10rem;
                }
                .previewComponent .imgPreview img {
                    width: 6rem;
                    height: 6rem;
                    object-fit: cover;
                    object-position: 30% 10%;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                }
                .previewComponent .imgPreviewFile img {
                    width: 20rem;
                    height: 12rem;
                    object-fit: cover;
                    object-position: left center;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                }
                .icon-del {
                    width: 25px !important;
                    height: 25px !important;
                }
          `}</style>
        </div>
    )
}

export default UploadImageFile;
