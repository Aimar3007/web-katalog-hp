import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export const getDataHp = async ({ setDataHp, selected, page }) => {
  // if (selected.length) {
  //   const url = `${baseUrl}handphones/cari`
  //   console.log('1')
  //   const result = await axios.post(url, selected)
  //   setDataHp(result.data)
  // } else {
    const url = `${baseUrl}handphones`
    const payload = {
      ...selected,
      record: 15,
      page
    }
    console.log('2')

    const result = await axios.post(url, payload)
    setDataHp(result.data)
  // }
}

export const getDataToko = async ({ setTokoDetail, idHandphone }) => {
  const url = `${baseUrl}handphones/harga/toko`
  const payload = { idHandphone }
  console.log(payload);
  const result = await axios.post(url, payload)
  setTokoDetail(result.data.data)
}