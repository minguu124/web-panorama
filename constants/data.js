export const BASE = "/web-panorama-static";

export const TONG_QUAN_THUMB = [
  {
    id: "view_chinh_du_an",
    imgThumb: "/thumb_view_chinh_du_an.webp",
  },
  {
    id: "view_phu_du_an",
    imgThumb: "/thumb_view_phu_du_an.webp",
  },
  {
    id: "view_biet_thu",
    label: "View biệt thự",
    imgThumb: "/thumb_view_biet_thu.webp",
  },
  {
    id: "cau_my_thuan",
    imgThumb: "/thumb_cau_my_thuan.webp",
  },
  {
    id: "trung_tam_vinh_long",
    imgThumb: "thumb_trung_tam_vinh_long.webp",
  },
];

export const TIEN_ICH_THUMB = [
  {
    id: "tien_ich_1",
    imgThumb: "/thumb_tien_ich_1.webp",
  },
  {
    id: "tien_ich_2",
    imgThumb: "/thumb_tien_ich_2.webp",
  },
  {
    id: "tien_ich_3",
    imgThumb: "/thumb_tien_ich_3.webp",
  },
  {
    id: "tien_ich_4",
    imgThumb: "/thumb_tien_ich_4.webp",
  },
  {
    id: "tien_ich_5",
    imgThumb: "/thumb_tien_ich_2.webp",
  },
];

export const MAP_LOCATION = [
  {
    id: "tien_ich_1",
    x: 16,
    y: 24,
  },
  {
    id: "tien_ich_2",
    x: 36,
    y: 28,
  },
  {
    id: "tien_ich_3",
    x: 88,
    y: 26,
  },
  {
    id: "tien_ich_4",
    x: 64,
    y: 64,
  },
  {
    id: "tien_ich_5",
    x: 64,
    y: 16,
  },
];

export const DEFAULT_LOCATION = {
  view_chinh_du_an: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 2,
  },
  view_phu_du_an: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 5,
  },
  view_biet_thu: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 4,
  },
  cau_my_thuan: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 2,
  },
  trung_tam_vinh_long: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 2,
  },
};

export const TIEN_ICH_NODE = [
  {
    id: "tien_ich_1",
    panorama: BASE + "/360_view_chinh_du_an.webp",
    markers: [],
    links: [],
  },
  {
    id: "tien_ich_2",
    panorama: BASE + "/360_view_phu_du_an.webp",
    links: [],
  },
  {
    id: "tien_ich_3",
    panorama: BASE + "/360_view_biet_thu.webp",
    links: [],
  },
  {
    id: "tien_ich_4",
    panorama: BASE + "/360_cau_my_thuan.webp",
    links: [],
  },
  {
    id: "tien_ich_5",
    panorama: BASE + "/360_view_phu_du_an.webp",
    links: [],
  },
];

export const TONG_QUAN_NODE = [
  {
    id: "view_chinh_du_an",
    panorama: BASE + "/360_view_chinh_du_an.webp",
    markers: [
      {
        id: "nha_pho_lien_ke_1",
        longitude: "70deg",
        latitude: "-16deg",
        data: { compass: true },
        scale: [0.75, 2, 2],
        html: `
        <div class="marker">
          <div class="marker-stick">
            <div class="marker-static">
              NHÀ PHỐ LIỀN KỀ
            </div>
          </div>
        </div>
        `,
      },
      {
        id: "nha_pho_lien_ke_2",
        longitude: "84deg",
        latitude: "-19deg",
        data: { compass: true },
        scale: [0.75, 2, 2],
        html: `
        <div class="marker">
          <div class="marker-stick">
            <div class="marker-static">
              NHÀ PHỐ LIỀN KỀ
            </div>
          </div>
        </div>
        `,
      },
      {
        id: "nha_pho_lien_ke_3",
        longitude: "84deg",
        latitude: "-30deg",
        data: { compass: true },
        scale: [0.75, 2, 2],
        html: `
        <div class="marker">
          <div class="marker-stick">
            <div class="marker-static">
              NHÀ PHỐ LIỀN KỀ
            </div>
          </div>
        </div>
        `,
      },
      {
        id: "song_co_chien",
        longitude: "114deg",
        latitude: "-0.5deg",
        data: { compass: true },
        scale: [0.75, 2, 2],
        html: `
        <h1 class="marker-song-co-chien">
          Sông Cổ Chiên
        </h1>
        `,
      },
      {
        id: "duong_pho_co_dieu",
        longitude: "124deg",
        latitude: "-14deg",
        data: { compass: true },
        scale: [0.75, 2, 2],
        html: `
        <h1 class="marker-duong-pho-co-dieu">
          Đường Phó Cơ Điều
          <i class="material-icons md-36 arrow one">double_arrow</i>
          <i class="material-icons md-36 arrow two">double_arrow</i>
          <i class="material-icons md-36 arrow three">double_arrow</i>
          <i class="material-icons md-36 arrow four">double_arrow</i>
        </h1>
        `,
      },
    ],
    links: [
      {
        nodeId: "view_biet_thu",
        longitude: "60deg",
        latitude: "-10deg",
        markerStyle: {
          scale: [0.75, 2, 2],
          html: `
          <div class="marker">
            <div class="marker-stick">
              <div class="marker-bubble">
                <img class="marker-bubble-img" src="${BASE}/icon_view_biet_thu.webp"}/>
              </div>
              <div class="marker-bubble-label">View biệt thự</div>
            </div>
          </div>
          `,
        },
      },
      {
        nodeId: "view_phu_du_an",
        longitude: "56deg",
        latitude: "-30deg",
        markerStyle: {
          scale: [0.75, 2, 2],
          html: `
          <div class="marker">
            <div class="marker-stick">
              <div class="marker-bubble">
                <img class="marker-bubble-img" src="${BASE}/icon_view_phu_du_an.webp"}/>
              </div>
              <div class="marker-bubble-label">View phụ dự án</div>
            </div>
          </div>`,
        },
      },
      {
        nodeId: "trung_tam_vinh_long",
        longitude: "160deg",
        latitude: "-6deg",
        markerStyle: {
          scale: [0.75, 2, 2],
          html: `
          <div class="marker"><div class="marker-stick">
            <div class="marker-banner">
              <div class="marker-banner-icon">
                <i class="material-icons md-36">expand_circle_down</i>
              </div>
              <div class="marker-banner-label">Trung tâm Vĩnh Long</div>
              <div id="trung_tam_vinh_long_time" class="marker-banner-time active">15 phút</div>
              <div id="trung_tam_vinh_long_content" class="marker-banner-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
              minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
              quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
              fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
              consequuntur! Commodi minima excepturi repudiandae velit hic maxime
              doloremque. Quaerat provident commodi consectetur veniam similique ad 
              earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
              fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
              suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
              modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
              totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
              quasi aliquam eligendi, placeat qui corporis!</div>
            </div>
          </div>
          `,
        },
      },
      {
        nodeId: "cau_my_thuan",
        longitude: "80deg",
        latitude: "0deg",
        markerStyle: {
          scale: [0.75, 2, 2],
          html: `
            <div class="marker"><div class="marker-stick">
            <div class="marker-banner">
              <div class="marker-banner-icon">
                <i class="material-icons md-36">expand_circle_down</i>
              </div>
              <div class="marker-banner-label">Cầu Mỹ Thuận</div>
              <div id="cau_my_thuan_time" class="marker-banner-time active">15 phút</div>
              <div id="cau_my_thuan_content" class="marker-banner-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
              minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
              quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
              fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
              consequuntur! Commodi minima excepturi repudiandae velit hic maxime
              doloremque. Quaerat provident commodi consectetur veniam similique ad 
              earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
              fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
              suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
              modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
              totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
              quasi aliquam eligendi, placeat qui corporis!</div>
            </div>
          </div>
          `,
        },
      },
    ],
  },
  {
    id: "view_phu_du_an",
    panorama: BASE + "/360_view_phu_du_an.webp",
    links: [],
  },
  {
    id: "view_biet_thu",
    panorama: BASE + "/360_view_biet_thu.webp",
    links: [],
  },
  {
    id: "cau_my_thuan",
    panorama: BASE + "/360_cau_my_thuan.webp",
    links: [],
  },
  {
    id: "trung_tam_vinh_long",
    panorama: BASE + "/360_trung_tam_vinh_long.webp",
    links: [],
  },
];

export const THUMBS = {
  tong_quan: TONG_QUAN_THUMB,
  tien_ich: TIEN_ICH_THUMB,
  can_ho_mau: TONG_QUAN_THUMB,
};

export const NODES = {
  tong_quan: TONG_QUAN_NODE,
  tien_ich: TIEN_ICH_NODE,
  can_ho_mau: [],
};

export const HEADER_LABEL = {
  tong_quan: "TỔNG QUAN DỰ ÁN",
  tien_ich: "KHU NHÀ LIỀN KỀ",
};
