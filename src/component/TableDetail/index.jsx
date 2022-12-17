import Table from 'react-bootstrap/Table';

function TableDetail({detail}) {
  return (
    <Table striped bordered hover variant="dark">
      <label>KAMERA</label>
      <tbody>
        <tr>
          <td>Kamera Utama</td>
          <td>{detail.handphone.kamera_utama}</td>
        </tr>
        <tr>
          <td>Kamera Selfie</td>
          <td>{detail.handphone.kamera_selfi}</td>
        </tr>
        <tr>
          <td>Tipe Kamera</td>
          <td>{detail.handphone.tipe_kamera}</td>
        </tr>
        <tr>
          <td>Resolusi Video</td>
          <td>{detail.handphone.resolusi_video}</td>
        </tr>
      </tbody>

      <label className="mt-3">MEMORI</label>
      <tbody>
        <tr>
          <td>Penyimpanan</td>
          <td>{detail.handphone.penyimpanan}</td>
        </tr>
        <tr>
          <td>RAM</td>
          <td>{detail.handphone.ram}</td>
        </tr>
        <tr>
          <td>Memori yang Dapat Diperluas</td>
          <td>{detail.handphone.bisa_diperluas === 0 ? 'Tidak' : 'Iya'}</td>
        </tr>
      </tbody>

      <label className="mt-3">PLATFORM</label>
      <tbody>
        <tr>
          <td>Chipset</td>
          <td>{detail.handphone.chipset}</td>
        </tr>
        <tr>
          <td>Prosesor Inti</td>
          <td>{detail.handphone.prosesor_inti}</td>
        </tr>
        <tr>
          <td>Sistem Operasi</td>
          <td>{detail.handphone.sistem_operasi}</td>
        </tr>
        <tr>
          <td>Versi OS</td>
          <td>{detail.handphone.versi_os}</td>
        </tr>
      </tbody>

      <label className="mt-3">BATERAI</label>
      <tbody>
        <tr>
          <td>Kapasitas Baterai</td>
          <td>{detail.handphone.kapasitas_baterai}</td>
        </tr>
        <tr>
          <td>Charging</td>
          <td>{detail.handphone.charging}</td>
        </tr>
      </tbody>

      <label className="mt-3">KONEKSI</label>
      <tbody>
        <tr>
          <td>USB Connectors</td>
          <td>{detail.handphone.usb_connectors}</td>
        </tr>
        <tr>
          <td>5G</td>
          <td>{detail.handphone._5g === 0 ? 'Tidak' : 'Iya'}</td>
        </tr>
        <tr>
          <td>NFC</td>
          <td>{detail.handphone.nfc === 0 ? 'Tidak' : 'Iya'}</td>
        </tr>
        <tr>
          <td>Wi-Fi Standard</td>
          <td>{detail.handphone.wifi_standard}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableDetail;