import "./SearchHeader.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import editButton from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// This header can be used for the WareHouseList component and the WareHouseInventoryList component
function SearchHeader(props) {
  const { id } = useParams();

  const [checkSearch, setCheckSearch] = useState("display-none");
  const [checkEdit, setCheckEdit] = useState("display-none");
  const [checkTitle, setCheckTitle] = useState("");
  const [checkBackArrow, setCheckBackArrow] = useState("");
  const [pageSource, setPageSource] = useState("..");
  const navigate = useNavigate();

  useEffect(() => {
    if (props.addNewItem) {
      setCheckSearch("");
      setCheckBackArrow("display-none");
    } else {
      setCheckBackArrow("");
    }
    if (props.headerButton) {
      setCheckEdit("");
      setCheckTitle("--edit");
    }
    if (props.pageSource) {
      setPageSource(pageSource);
    }

    // console.log('Props in SearchHeader:', props);
  }, []);

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    props.onSearch(searchTerm);
  };

  return (
    <>
      <header className={`main ${checkTitle}`}>
        <div className="main__title--wrapper">
          <Link
            to={pageSource}
            className={`main__title--arrow ${checkBackArrow}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            <img
              src={backArrow}
              alt="Go Back"
              className="warehouseDetails__header-backArrow"
            />
          </Link>
          <h1 className="main__title">{props.title}</h1>
        </div>
        <div className={`main__content ${checkSearch}`}>
          <div className="main__content__input">
            <input
              className="main__content__input--box"
              type="text"
              placeholder="Search"
              onChange={handleSearchInputChange}
            />
            <img
              className="main__content__input--icon"
              src={searchIcon}
              alt="search icon"
            />
          </div>

          <div className={`main__content__button--wrapper ${checkSearch}`}>
            <Link
              to={`/${props.addURL}/add`}
              className="main__content__button--link"
            >
              <button type="submit" className="main__content__button">
                <div className="main__content__button--text">
                  + Add New {props.addNewItem}
                </div>
              </button>
            </Link>
          </div>
        </div>
        <Link
          to={`/${props.headerButton}/${id}/edit`}
          className={`header-button--edit ${checkEdit}`}
          state={{
            pageSource: props.pageSource,
            itemId: props.itemId,
            itemCategory: props.itemCategory,
            itemName: props.itemName,
            itemDescription: props.itemDescription,
            itemStatus: props.itemStatus,
            warehouseName: props.warehouseName,
            itemQuantity: props.itemQuantity,
          }}
        >
          <img
            src={editButton}
            className="header-button--editImg"
            alt={`Edit ${props.headerButton}`}
          />
          <span className="header-button--edit--text">Edit</span>
        </Link>
      </header>
      <div className={`divider divider--${checkBackArrow}`}></div>
    </>
  );
}

export default SearchHeader;
