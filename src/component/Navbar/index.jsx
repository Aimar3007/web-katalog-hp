import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import { getDataHp } from "../../apiService";
import { seriHp } from "../../data/seriHp";

export default function Navbar({ selected, setSelected, setDataHp }) {
  const dropdown = ["Brand", "Seri", "Harga", "Toko"];
  const brand = ["Apple", "Infinix", "OPPO", "Samsung", "Xiaomi", "realme"];
  const toko = ["Blibli", "Bukalapak", "Lazada", "Shopee", "Tokopedia"];

  useEffect(() => {
    if (selected?.seri && selected?.brand) {
      setSelected({ ...selected, alert: false });
    }
  }, [selected?.seri, selected?.brand]);

  console.log('ini selected', selected);

  const changeHandler = (e) => {
    setSelected({
      ...selected,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-color" href="#">
            Katalog Handphone
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <input
              class="form-control me-2 search-costume"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="searched"
              onChange={changeHandler}
              autocomplete="off"
            />
            <Button
              variant="outline-secondary"
              onClick={async () => {
                if (selected?.brand && selected?.seri) {
                  getDataHp(setDataHp, selected);
                } else {
                  setSelected({ ...selected, alert: true });
                }
              }}
            >
              Search
            </Button>

            {dropdown.map((kategory, idx) => (
              <Dropdown className="d-inline mx-2 ">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  className="btn-dropdown-costume"
                  variant="secondary"
                >
                  <div style={{ marginRight: "5rem" }}>{kategory}</div>
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  {kategory === "Brand" ? (
                    brand.map((v) => (
                      <Dropdown.Item
                        onClick={() =>
                          setSelected({
                            ...selected,
                            brand: v.toLocaleLowerCase(),
                            seri: "",
                          })
                        }
                      >
                        {v}
                      </Dropdown.Item>
                    ))
                  ) : kategory === "Seri" && selected.brand ? (
                    seriHp[0][selected.brand].map((v) => (
                      <Dropdown.Item
                        onClick={() => setSelected({ ...selected, seri: v })}
                      >
                        {v}
                      </Dropdown.Item>
                    ))
                  ) : kategory === "Toko" ? (
                    toko.map((v) => (
                      <Dropdown.Item
                        onClick={() => setSelected({ ...selected, toko: v })}
                      >
                        {v}
                      </Dropdown.Item>
                    ))
                  ) : kategory === "Harga" ? (
                    <>
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <label>Harga Minimal</label>
                            <input
                              type="number"
                              style={{ width: "80%" }}
                              onChange={(e) =>
                                setSelected({
                                  ...selected,
                                  hargaMin: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <label>Harga Maximal</label>
                            <input
                              type="number"
                              style={{ width: "80%" }}
                              onChange={(e) =>
                                setSelected({
                                  ...selected,
                                  hargaMax: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </Dropdown.Menu>
              </Dropdown>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
