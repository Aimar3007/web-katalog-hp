import React, { useEffect, useState } from "react";
import { getDataHp, getDataToko } from "../../apiService";
import Navbar from "../../component/Navbar";
import Foto from "../../assets/test.png";
import { numberWithCommas } from "../../helper";
import ButtonHasil from "../../component/button/ButtonHasil";
import { Alert, Pagination } from "react-bootstrap";
import ModalDetail from "../../component/ModalDetail";
const baseUrl = process.env.REACT_APP_API_URL;

export default function Beranda() {
  const [dataHp, setDataHp] = useState([]);
  const [selected, setSelected] = useState([]);
  const [detail, setDetail] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [tokoDetail, setTokoDetail] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (dataHp) {
      getDataHp({ setDataHp: setDataHp, page: page, selected });
    }

    if (detail?.id_handphone)
      getDataToko({
        setTokoDetail: setTokoDetail,
        idHandphone: detail.id_handphone,
      });
  }, [detail?.id_handphone, page, selected]);


  return (
    <div>
      <Navbar
        selected={selected}
        setSelected={setSelected}
        setDataHp={setDataHp}
      />
      <div className="container mt-5">
        <ButtonHasil selected={selected} setSelected={setSelected} />
        <div className="row">
          <div className="col">
            {/* {selected?.alert && (
              <Alert variant="danger">Pilih brand dan Seri!</Alert>
            )} */}
            <div className="header"></div>
            <div className="contain">
              <div class="row row-cols-1 row-cols-md-5 g-4">
                {dataHp?.data?.map((d, idx) => (
                  <div class="col">
                    <div
                      class="card h-100"
                      onClick={() => {
                        setModalShow(true);
                        setDetail(d);
                      }}
                    >
                      <img
                       src={`${baseUrl}images/${d?.handphone?.gambar}`}
                        class="card-img-top"
                        alt="..."
                        style={{height: 'inherit'}}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{d.handphone.nama_hp}</h5>
                        <p class="card-text">Rp.{numberWithCommas(d.harga)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {dataHp?.pagination?.totalPage !== 1 && (
                <Pagination className="mt-3">
                  {dataHp?.pagination?.prev && (
                    <Pagination.Prev
                      onClick={() => setPage(dataHp?.pagination?.prev?.page)}
                    />
                  )}
                  {Array.from({ length: dataHp?.pagination?.totalPage }).map(
                    (_, idx) => (
                      <Pagination.Item
                        key={idx + 1}
                        active={idx + 1 === page}
                        onClick={() => setPage(idx + 1)}
                      >
                        {idx + 1}
                      </Pagination.Item>
                    )
                  )}
                  {dataHp?.pagination?.next && (
                    <Pagination.Next
                      onClick={() => setPage(dataHp?.pagination?.next?.page)}
                    />
                  )}
                </Pagination>
              )}
            </div>
            {/* <div className="footer">footer</div> */}
          </div>
        </div>
      </div>
      <ModalDetail
        show={modalShow}
        handleClose={() => setModalShow(false)}
        detail={detail}
        tokoDetail={tokoDetail}
      />
    </div>
  );
}
