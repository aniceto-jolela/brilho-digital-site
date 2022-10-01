import { Home } from "pages/home/home";
import { Pages404 } from "pages/bd";
import { Branding } from "pages/designer/branding/branding";
import { Mockup } from "pages/designer/mockup/mockup";
import { Sobre } from "pages/info/sobre";
import { Template } from "pages/designer/template/template";
import { Flyer } from "pages/designer/flayer/flyer";
import { CartaoVisita } from "pages/designer/cartao-visita/cartao-visita";
import { Artistica } from "pages/fotos/artistica/artistica";
import { Retrato } from "pages/fotos/retrato/retrato";
import { DeRua } from "pages/fotos/de-rua/de-rua";
import { FPP } from "pages/fotos/fpp/fpp";
import { Ficcao } from "pages/animacao/ficcao/ficcao";
import { Dedicatoria } from "pages/animacao/dedicatoria/dedicatoria";
import { Gif } from "pages/fotos/gif/gif";
import { Romance } from "pages/animacao/romance/romance";
import { Whatsapp } from "pages/contacto/whatsapp/whatsapp";
import { Email } from "pages/contacto/e-mail/e-mail";
import { Facebook } from "pages/contacto/facebook/facebook";
import { Instagram } from "pages/contacto/instagram/instagram";
import { Telefone } from "pages/contacto/telefone/telefone";

export const urls: any = {
  Home: <Home />,
  Mockup: <Mockup />,
  Branding: <Branding/>,
  Template:<Template/>,
  Flyer: <Flyer />,
  CartaoVisita: <CartaoVisita />,
  Artistica: <Artistica />,
  Retrato: <Retrato />,
  DeRua: <DeRua />,
  FPP: <FPP />,
  Gif: <Gif />,
  Romance: <Romance />,
  Ficcao: <Ficcao />,
  Dedicatoria: <Dedicatoria />,
  Whatsapp: <Whatsapp />,
  Email: <Email />,
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  Telefone: <Telefone />,
  Sobre: <Sobre />,
  Pages404: <Pages404 />,
};
