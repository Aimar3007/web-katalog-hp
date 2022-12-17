import React from "react";
import { numberWithCommas } from "../../../helper";

export default function ButtonHasil({ selected, setSelected }) {
  return (
    <div>

      {selected?.brand && (
        <button className="btn-hasil" type="button" onClick={() => setSelected({...selected, brand: ''})}>
          {selected?.brand} <span className="ms-1">X</span>
        </button>
      )}

      {selected?.seri && (
        <button className="btn-hasil" onClick={() => setSelected({...selected, seri: ''})}>
          {selected.seri} <span className="ms-1">X</span>
        </button>
      )}

      {selected?.hargaMin && selected?.hargaMax && (
        <button className="btn-hasil" onClick={() => setSelected({...selected, hargaMin: '', hargaMax: ''})}>
          Rp. {numberWithCommas(selected.hargaMin)}-{numberWithCommas(selected.hargaMax)} <span className="ms-1">X</span>
        </button>
      )}

      {selected?.toko && (
        <button className="btn-hasil" onClick={() => setSelected({...selected, toko: ''})}>
          {selected.toko} <span className="ms-1">X</span>
        </button>
      )}
    </div>
  );
}
