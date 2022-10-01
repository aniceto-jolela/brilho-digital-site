import * as React from "react";
import styled from "@emotion/styled";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import SidebarMobile from "./sidebar-mobile";
import Link from "next/link";
import { useRouter } from "next/router";

const UlFather = styled.ul`
  list-style-type: none;
  display: flex;
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0px;
  cursor: pointer;
  li:hover {
    background-color: white;
    ul {
      display: block;
    }
  }
`;
const Ulson = styled.ul`
  background-color: #0a0a0ad9;
  color: #e4eced;
  display: none;
  position: fixed;
  list-style-type: none;
  margin-top: 15px;
  margin-left: -10px;
  padding-left: 10px;
  li:hover {
    color: black;
  }
  li {
    a {
      background-color: #4d4848;
      text-decoration-line: none;
      color: #e4eced;
      padding-right: 50px;
      padding-top: 2px;
      padding-bottom: 2px;
      margin-bottom: -4px;
      margin-top: -2px;
      margin-right: -25px;
      display: block;
    }
  }
`;

export default function Menu() {
  const [setSubMenuSelected, getSubMenuSelected] = React.useState<number>(0);
  const [setSubMenuSelectedMapCod, getSubMenuSelectedMapCod] =
    React.useState<number>(0);
  const [setSubMenuSelectedMapName, getSubMenuSelectedName] =
    React.useState<string>("");

  function handleMenu(index: number) {
    getSubMenuSelectedMapCod(index);
  }
  function handleSubMenu(index: number, name: string, cod: number) {
    getSubMenuSelected(index);
    getSubMenuSelectedName(name);
    getSubMenuSelectedMapCod(cod);
  } 

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const ListMenu = [
    {
      menu: { id: 11, name: "DESIGNER" },
      submenu: [
        { id: 1, name: "Mockup", href: "/bd/Mockup", cod: 11 },
        { id: 2, name: "Branding", href: "/bd/Branding", cod: 11 },
        { id: 3, name: "Template", href: "/bd/Template", cod: 11 },
        { id: 4, name: "Flyer", href: "/bd/Flyer", cod: 11 },
        { id: 5, name: "Cartão de Visita", href: "/bd/CartaoVisita", cod: 11 },
      ],
    },
    {
      menu: { id: 22, name: "FOTOS" },
      submenu: [
        { id: 6, name: "Artística", href: "/bd/Artistica", cod: 22 },
        { id: 7, name: "Retrato", href: "/bd/Retrato", cod: 22 },
        { id: 8, name: "De Rua", href: "/bd/DeRua", cod: 22 },
        { id: 9, name: "FPP", href: "/bd/FPP", cod: 22 },
        { id: 10, name: "Gif", href: "/bd/Gif", cod: 22 },
      ],
    },
    {
      menu: { id: 33, name: "ANIMAÇÃO" },
      submenu: [
        { id: 11, name: "Romance", href: "/bd/Romance", cod: 33 },
        { id: 12, name: "Ficção", href: "/bd/Ficcao", cod: 33 },
        { id: 13, name: "Dedicatória", href: "/bd/Dedicatoria", cod: 33 },
      ],
    },
    {
      menu: { id: 44, name: "CONTATO" },
      submenu: [
        { id: 14, name: "Whatsapp", href: "/bd/Whatsapp", cod: 44 },
        { id: 15, name: "E-mail", href: "/bd/Email", cod: 44 },
        { id: 16, name: "Facebook", href: "/bd/Facebook", cod: 44 },
        { id: 17, name: "Intagram", href: "/bd/Instagram", cod: 44 },
        { id: 18, name: "Telefone", href: "/bd/Telefone", cod: 44 },
      ],
    },
  ];

  const {query,asPath} = useRouter();
  const { id }: any = query

  function LayoutLoad(){
    ListMenu.map((m)=>{
      m.submenu.map((sub)=>{
        asPath===sub.href?handleMenu(m.menu.id):''
        asPath===sub.href?handleSubMenu(sub.id,sub.name,sub.cod):''
        asPath==='/bd/Sobre'?handleMenu(55):''
      })
    })
  }
  
  React.useInsertionEffect(()=>(
    LayoutLoad()
  ),[id!==undefined])

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "#E5E5E5",
          display: "flex",
          position: "fixed",
          width: "100%",
          justifyContent: "space-between",
          marginTop: -6,
          zIndex: 4,
        }}
      >
          <Link href={smDown?'#':"/bd/Home"}>
            <a style={{ paddingTop: 5, }} onClick={() => handleMenu(0)}>
              <Box sx={{ paddingLeft: 1, }} >
                  <Image src="/img/logo.svg" alt="BD" width={40} height={40} />
              </Box>
            </a>
          </Link>

        <Box sx={{ display: smDown ? "none" : "flex" }}>
          <UlFather>
            <>
              <li
                onClick={() => handleMenu(0)}
                style={{
                  backgroundColor:
                    setSubMenuSelectedMapCod === 0 ? "#CC4D4D" : "",
                  padding: "15px 10px",
                  fontSize: 15,
                }}
              >
                <Link href="/bd/Home">
                  <a
                    style={{
                      padding: "19px 10px",
                      margin: -10,
                      color:
                        setSubMenuSelectedMapCod === 0 ? "#ffffff" : "#212020",
                      textDecorationLine: "none",
                    }}
                  >
                    HOME
                  </a>
                </Link>
              </li>

              {ListMenu.map((item) => {
                return (
                  <li
                    key={item.menu.id}
                    style={{
                      backgroundColor:
                        setSubMenuSelectedMapCod === item.menu.id
                          ? "#CC4D4D"
                          : "",
                      color:
                        setSubMenuSelectedMapCod === item.menu.id
                          ? "#ffffff"
                          : "",
                      padding: "15px 10px",
                      fontSize: 15,
                    }}
                  >
                    {item.menu.name}
                    {setSubMenuSelectedMapCod === item.menu.id ? (
                      <blockquote
                        style={{
                          fontSize: 9,
                          position: "absolute",
                          margin: 0,
                          fontStyle: "italic",
                          color: "#131514e1",
                        }}
                      >
                        {setSubMenuSelected === setSubMenuSelected &&
                        setSubMenuSelectedMapCod !== 0 &&
                        setSubMenuSelectedMapCod !== 55
                          ? setSubMenuSelectedMapName
                          : ""}
                      </blockquote>
                    ) : (
                      ""
                    )}
                    <Ulson>
                      {item.submenu?.map((i) => {
                        return (
                          <li
                            key={i.id}
                            onClick={() => handleSubMenu(i.id, i.name, i.cod)}
                            style={{
                              backgroundColor:
                                setSubMenuSelected === i.id &&
                                setSubMenuSelectedMapCod !== 0 &&
                                setSubMenuSelectedMapCod !== 55
                                  ? "#CC4D4D"
                                  : "",
                              padding: "2px 25px 4px 2px",
                            }}
                          >
                            <Link href={i.href}>
                              <a>{i.name}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </Ulson>
                  </li>
                );
              })}

              <li
                onClick={() => handleMenu(55)}
                style={{
                  backgroundColor:
                    setSubMenuSelectedMapCod === 55 ? "#CC4D4D" : "",
                  color: setSubMenuSelectedMapCod === 55 ? "#ffffff" : "",
                  padding: "15px 10px",
                  fontSize: 15,
                }}
              >
                <Link href="/bd/Sobre">
                  <a
                    style={{
                      padding: "19px 10px",
                      margin: -10,
                      color:
                        setSubMenuSelectedMapCod === 55 ? "#ffffff" : "#212020",
                      textDecorationLine: "none",
                    }}
                  >
                    BD
                  </a>
                </Link>
              </li>
            </>
          </UlFather>
        </Box>

        <Box sx={{ paddingTop: 1, visibility: smDown ? "visible" : "hidden" }}>
          <SidebarMobile menuProp={setSubMenuSelectedMapCod} submenuProp={setSubMenuSelected} />
        </Box>
      </Box>

      <Box
        sx={{
          position: "fixed",
          right: -140,
          top: -2,
          transform: "rotate(48deg)",
          zIndex:3
        }}
      >
        <div
          style={{ width: 450, height: 150, backgroundColor: "#E5E5E5" }}
        ></div>
      </Box>
    </React.Fragment>
  );
}
