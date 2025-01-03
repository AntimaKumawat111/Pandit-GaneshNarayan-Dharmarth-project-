import React, { useState } from "react";
import MiniHeaderCss from "./Mini_header.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

function Miniheader() {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (linkName) => {
    setActiveLink(linkName); // Set active link based on the clicked link
  };

  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const items = [
    {
      label: (
        <a href="https://gndcharitable.foundation/biggest-donation">
          biggest donation
        </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <a href="https://www.aliyun.com">join us</a>,
      key: "1",
    },
  ];

  const numbersMenu = {
    items: [
      {
        label: <p>+911111111111</p>,
        key: "0",
      },
      {
        type: "divider",
      },
      {
        label: <p>+912222222222</p>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: <p>+913333333333</p>,
        key: "2",
      },
      {
        type: "divider",
      },
      {
        label: <p>+914444444444</p>,
        key: "3",
      },
    ],
  };

  return (
    <>
      <div className={MiniHeaderCss.mini_header}>
        <img
          src="https://vakilsearch.com/blog/wp-content/uploads/2021/05/VS_Blog-Images_3-05.png"
          alt="ngo"
          id={MiniHeaderCss.ngo_Image}
        />

        <div className={MiniHeaderCss.containers}>
          <div className={MiniHeaderCss.box}>
            <div className={MiniHeaderCss.numbers}>
              <p className={MiniHeaderCss.num}>
                +911111111111 <span>,</span>
              </p>
              <p className={MiniHeaderCss.num}>
                +912222222222<span>,</span>
              </p>
              <p className={MiniHeaderCss.num}>
                +913333333333<span>,</span>
              </p>
              <p className={MiniHeaderCss.num}>+914444444444</p>

              <h2 className={MiniHeaderCss.Dropdown_numbers}>
                <span>
                  <Dropdown menu={numbersMenu} trigger={["click"]}>
                    <button
                      onClick={(e) => e.preventDefault()}
                      id={MiniHeaderCss.Dropdown_num}
                    >
                      <Space>
                        Contact No.
                        <DownOutlined />
                      </Space>
                    </button>
                  </Dropdown>
                </span>
              </h2>
            </div>

            <div className={MiniHeaderCss.icons}>
              <div className={MiniHeaderCss.social_icons}>
                <FacebookRoundedIcon id={MiniHeaderCss.facebook_icon} />
                <InstagramIcon id={MiniHeaderCss.insta_icon} />
                <YouTubeIcon id={MiniHeaderCss.youtube_icon} />
              </div>
              <div className={MiniHeaderCss.other_icons}>
                <SearchIcon id={MiniHeaderCss.search_icon} />
                <ShoppingCartIcon id={MiniHeaderCss.shoppingCart_icon} />
                <Person2Icon id={MiniHeaderCss.person2_icon} />
              </div>
            </div>
          </div>

          <div className={MiniHeaderCss.tags}>
            <h2 className={MiniHeaderCss.tag}>
              <span>
                <a
                  href="#"
                  onClick={() => handleClick("home")}
                  className={activeLink === "home" ? MiniHeaderCss.active : ""}
                  id={MiniHeaderCss.hometag}
                >
                  home
                </a>
              </span>
            </h2>
            <h2 className={MiniHeaderCss.tag}>
              <span>
                <a
                  href="https://gndcharitable.foundation/ngo-projects"
                  onClick={() => handleClick("ngo-project")}
                  className={
                    activeLink === "ngo-project" ? MiniHeaderCss.active : ""
                  }
                >
                  ngo project
                </a>
              </span>
            </h2>
            <h2 className={MiniHeaderCss.tag}>
              <span>
                <a
                  href="https://gndcharitable.foundation/home#a43445f6-520a-4dd7-b73d-1d4ba76f7091"
                  onClick={() => handleClick("partnership")}
                  className={
                    activeLink === "partnership" ? MiniHeaderCss.active : ""
                  }
                >
                  partnership
                </a>
              </span>
            </h2>
            <h2 className={MiniHeaderCss.tag} id={MiniHeaderCss.biggest_d_tag}>
              <span>
                <a
                  href="https://gndcharitable.foundation/biggest-donation"
                  onClick={() => handleClick("biggest-donation")}
                  className={
                    activeLink === "biggest-donation"
                      ? MiniHeaderCss.active
                      : ""
                  }
                >
                  biggest donation
                </a>
              </span>
            </h2>
            <h2 className={MiniHeaderCss.tag} id={MiniHeaderCss.join_us}>
              <span>
                <a
                  href="https://gndcharitable.foundation/join-us"
                  onClick={() => handleClick("join-us")}
                  className={
                    activeLink === "join-us" ? MiniHeaderCss.active : ""
                  }
                >
                  join us
                </a>
              </span>
            </h2>

            <h2 className={MiniHeaderCss.tag}>
              <span>
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <button
                    onClick={(e) => e.preventDefault()}
                    id={MiniHeaderCss.Dropdown}
                  >
                    <Space>
                      More
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>
              </span>
            </h2>
          </div>
        </div>

        <div className={MiniHeaderCss.tagContainer}>
          <div
            className={MiniHeaderCss.sidenav}
            style={{ width: isOpen ? "250px" : "0" }}
          >
            <CloseIcon
              className={MiniHeaderCss.sidenev_closebtn}
              onClick={closeNav}
            />

            <div className={MiniHeaderCss.sidenev_container}>
              <div className={MiniHeaderCss.sidenev_box}>
                <div className={MiniHeaderCss.sidenev_numbers}>
                  <h1>Contact us :</h1>
                  <p className={MiniHeaderCss.sidenev_num}>+911111111111</p>
                  <p className={MiniHeaderCss.sidenev_num}>+912222222222</p>
                  <p className={MiniHeaderCss.sidenev_num}>+913333333333</p>
                  <p className={MiniHeaderCss.sidenev_num}>+914444444444</p>
                </div>
                <div className={MiniHeaderCss.sidenev_icons}>
                  <div className={MiniHeaderCss.sidenev_social_icons}>
                    <FacebookRoundedIcon
                      id={MiniHeaderCss.sidenev_facebook_icon}
                    />
                    <InstagramIcon id={MiniHeaderCss.sidenev_insta_icon} />
                    <YouTubeIcon id={MiniHeaderCss.sidenev_youtube_icon} />
                  </div>
                  <div className={MiniHeaderCss.sidenev_other_icons}>
                    <SearchIcon id={MiniHeaderCss.sidenev_search_icon} />
                    <ShoppingCartIcon
                      id={MiniHeaderCss.sidenev_shoppingCart_icon}
                    />
                    <Person2Icon id={MiniHeaderCss.sidenev_person2_icon} />
                  </div>
                </div>
              </div>

              <div className={MiniHeaderCss.sidenev_tags}>
                <h2 className={MiniHeaderCss.sidenev_tag}>
                  <span>
                    <a
                      href="#"
                      onClick={() => handleClick("home")}
                      className={
                        activeLink === "home" ? MiniHeaderCss.active : ""
                      }
                      id={MiniHeaderCss.sidenev_hometag}
                    >
                      home
                    </a>
                  </span>
                </h2>
                <h2 className={MiniHeaderCss.sidenev_tag}>
                  <span>
                    <a
                      href="https://gndcharitable.foundation/ngo-projects"
                      onClick={() => handleClick("ngo-project")}
                      className={
                        activeLink === "ngo-project" ? MiniHeaderCss.active : ""
                      }
                    >
                      ngo project
                    </a>
                  </span>
                </h2>
                <h2 className={MiniHeaderCss.sidenev_tag}>
                  <span>
                    <a
                      href="https://gndcharitable.foundation/home#a43445f6-520a-4dd7-b73d-1d4ba76f7091"
                      onClick={() => handleClick("partnership")}
                      className={
                        activeLink === "partnership" ? MiniHeaderCss.active : ""
                      }
                    >
                      partnership
                    </a>
                  </span>
                </h2>
                <h2
                  className={MiniHeaderCss.sidenev_tag}
                  id={MiniHeaderCss.sidenev_biggest_d_tag}
                >
                  <span>
                    <a
                      href="https://gndcharitable.foundation/biggest-donation"
                      onClick={() => handleClick("biggest-donation")}
                      className={
                        activeLink === "biggest-donation"
                          ? MiniHeaderCss.active
                          : ""
                      }
                    >
                      biggest donation
                    </a>
                  </span>
                </h2>
                <h2
                  className={MiniHeaderCss.sidenev_tag}
                  id={MiniHeaderCss.sidenev_join_us}
                >
                  <span>
                    <a
                      href="https://gndcharitable.foundation/join-us"
                      onClick={() => handleClick("join-us")}
                      className={
                        activeLink === "join-us" ? MiniHeaderCss.active : ""
                      }
                    >
                      join us
                    </a>
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <span
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={openNav}
          >
            <MenuIcon id={MiniHeaderCss.menubtn} />
          </span>
        </div>
      </div>
    </>
  );
}

export default Miniheader;
