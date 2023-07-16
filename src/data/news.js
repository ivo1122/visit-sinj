import React from "react";
import { BiTimeFive } from "react-icons/bi";


const News = () => {
  const news = [
    {
      title: "Sinjska Alka",
      url: "https://www.alka.hr/storage/upload/web_struktura/povijest-sinjska-alka_161410.jpg",
      caption:
      "U čast svoje nebeske zaštitnice, Gospe Sinjske, koja je prema predaji, i otjerala Osmanlije, kao vječni zavjet odanosti i poštovanja, Sinjani će utemeljiti vitešku igru Alku, i tako svake godine, prve nedjelje u kolovozu, oživjeti slavnu pobjedu.",
      time: "06.08.2023.",
    },
    {
        title: "Velika Gospa",
        url: "https://static.slobodnadalmacija.hr/Archive/Images/2019/08/15/vela_gospa12-150819.jpg",
        caption:
          "U Sinju, jednom od najvećih hrvatskih marijanskih svetišta, blagdan Uznesenja Blažene Djevice Marije, 15. kolovoza, slavi se posebno svečano. Nepregledno mnoštvo hodočasnika dolazi u Sinj sa samo jednim ciljem – kleknuti i sklopiti ruke pred Čudotvornom Gospom Sinjskom.",
        time: "15.08.2023.",
      },


    {
      title: "S.A.R.S. festival",
      url: "https://sinj-news.hr/wp-content/uploads/2023/06/350612474_6336436567917_8601444687951466646_n.jpg",
      caption:
            "Sinjski Amaterski Rock Susret (S.A.R.S.) je festival alternativne kulture koji udruga S.K.U.P. (Sinjski kulturni urbani pokret) u Sinju organizira svake godine krajem srpnja, a traje već više od deset godina. Sve je započelo 2003.g. s ciljem promoviranja amaterskih rock sastava s područja cijele Hrvatske..",
      time: "21.-22.07.2023.",
    },
    {
        title: "Utrka Cetina adventure Race",
        url: "https://total-croatia-news.com/wp-content/uploads/2019/05/Milan_S%CC%8Cabic%CC%81_159.jpg",
        caption:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        time: "03.06.2023.",
      },

    {
      title: "Predstava opsada Sinja 1715.",
      url: "https://gospa-sinjska.hr/images/krunjenje/opsada_sinja.jpg",
      caption:
      "Na lokacijama Staroga grada i sinjskog varoša, pod okriljem kolovoške noći, već nekoliko godina uprizoruju se događaji koji su prethodili slavnoj pobjedi nad Osmanlijama 15. kolovoza 1715. godine.",      time: "03.06.2023.",
      time: "15.08.2023.",
    },

    {
      title: "Utakmica Delmata i Rimljana",
      url: "https://sinjskarera.hr/wp-content/uploads/2021/07/m_IMG-20210725-WA0020.jpg",
      caption:
        "evijalna utakmica između Delmata i Rimljana osmišljena je oslanjanjem na povijesne činjenice povezane s nadgrobnim spomenikom Gaja Laberija",
      time: "30.07.2023.",
    },
    {
      title: "Festival klape Gospi Sinjskoj",
      url: "https://www.visitsinj.hr/media/k2/items/cache/37a06e4a72d6cb27621f1ed829bbee81_XL.jpg",
      caption:
        "Festival Klape Gospi Sinjskoj održava se u Sinju od 2009. godine, početkom kolovoza u vrijeme Dana Alke i Velike Gospe. Festival je humanitarne naravi: sav prihod od ulaznica i prodaje nosača zvuka ide humanitarnom Fondu Gospe Sinjske koji pomaže studentima slabijeg materijalnog stanja.",
      time: "03.08.2023.",
    },
    {
      title: "Gljevstock festival",
      url: "https://www.visitsinj.hr/images/k2-gallery/annual-events/gljevstock-festival/Gljevstok---Jelena-Katavic-10.jpg",
      caption:
        "Gljevstock je zamišljen kao neformalna svirka uz druženje članova sinjskih bendova i njihovih prijatelja.Glavni cilj festivala je druženje i sloboda, te kao takav nikad nema ogradu, bendovi uvijek sviraju prezentacijski, a ne natjecateljski, kampiranje i ulaz su besplatni. ",
      time: "22.-23.06.2023.",
    },
    {
      title: "Kamičak Etno festival 2023.",
      url: "https://sinjskarera.hr/wp-content/uploads/2020/07/m_69131647_740981746341862_6557312800585154560_o.jpg",
      caption:
        "Kamičak Etno Festival  osmišljen je s ciljem njegovanja, reproduciranja i suvremene interpretacije tradicijske glazbe kao neizostavnog dijela kulturnog identiteta zajednice. Radi se o Festivali koji prezentira kulturnu raznolikost putem etno glazbenog izričaja.",
      time: "12.08.2023.",
    },

  ];
  return (
    <div className="card w-[1400px] h-[400px] flex items-center justify-center my-5  ">
      <div id="scroller" className="top flex items-center justify-start gap-12 px-5 overflow-x-auto relative scrollbar-hide scroll-smooth">
        {news.map((news) => (
          <div className="my-5 cursor-pointer border hover:scale-105 ease-in-out duration-500">
            <img
              className="flex gap-10 w-[300px] h-[200px] object-cover"
              src={news.url}
            />
            <div className="flex items-center font-semibold py-2 px-2.5">{news.title}</div>
            <div className="flex items-center justify-start px-2">
              <BiTimeFive className="mr-1" />
              {news.time}
            </div>

            <div className="text-s w-[300px] h-[200px] px-2">{news.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
