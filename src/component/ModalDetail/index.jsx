import { Button, Card, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { numberWithCommas } from "../../helper";
import TableDetail from "../TableDetail";

const baseUrl = process.env.REACT_APP_API_URL
export default function ModalDetail({ show, handleClose, detail, tokoDetail }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="row">
        <div className="col-3">
          <img src={`${baseUrl}images/${detail?.handphone?.gambar}`} alt="..." className="modal-img" />
        </div>
        <div className="col m-5 me-0">
          <h4>{detail?.handphone?.nama_hp}</h4>
          <div className="detail-hp">
            <div className="luas-table-detail">
              <TableDetail detail={detail} />
              <Row xs={1} md={4} className="g-4">
                {tokoDetail?.map((d, idx) => (
                  <Col>
                    <Card style={{height: '8.6rem'}}>
                      <Card.Img
                        variant="top"
                        src={`${baseUrl}logos/${d.toko.logo}`}
                        className="card-detail-toko"
                      />
                      <Card.Body>
                        <Card.Title>Rp.{numberWithCommas(d.harga)}</Card.Title>
                        <Button variant="primary">Check sekarang</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
