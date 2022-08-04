export const BASE = "/web-panorama-static";

export const TONG_QUAN_THUMB = [
  {
    id: "view_chinh_du_an",
    imgThumb: "/thumb_view_chinh_du_an.jpg",
  },
  {
    id: "view_phu_du_an",
    imgThumb: "/thumb_view_phu_du_an.jpg",
  },
  {
    id: "view_biet_thu",
    label: "View biệt thự",
    imgThumb: "/thumb_view_biet_thu.jpg",
  },
  {
    id: "cau_my_thuan",
    imgThumb: "/thumb_cau_my_thuan.jpg",
  },
  {
    id: "trung_tam_vinh_long",
    imgThumb: "thumb_trung_tam_vinh_long.jpg",
  },
];

export const DEFAULT_LOCATION = {
  view_chinh_du_an: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 2,
  },
  view_phu_du_an: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 2,
  },
  view_biet_thu: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 4,
  },
  cau_my_thuan: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 5,
  },
  trung_tam_vinh_long: {
    latitude: -Math.PI / 8,
    longitude: Math.PI / 2,
  },
};

export const TONG_QUAN_NODE = [
  {
    id: "view_chinh_du_an",
    panorama: BASE + "/360_view_chinh_du_an.webp",
    markers: [
      {
        id: "nha_pho_lien_ke_1",
        longitude: "70deg",
        latitude: "-16deg",
        scale: [1, 1.5, 2],
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
        latitude: "-30deg",
        scale: [1, 1.5, 2],
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
        latitude: "-19deg",
        scale: [1, 1.5, 2],
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
        scale: [1, 1.5, 2],
        html: `
        <h1 class="marker-text-only">
          Sông Cổ Chiên
        </h1>
        `,
      },
      {
        id: "duong_pho_co_dieu",
        longitude: "124deg",
        latitude: "-14deg",
        scale: [1, 1.5, 2],
        html: `
        <h1 class="marker-text-with-icon">
          Đường Phó Cơ Điều
          <i class="material-icons md-36 arrow">double_arrow</i>
          <i class="material-icons md-36 arrow yellow">double_arrow</i>
          <i class="material-icons md-36 arrow">double_arrow</i>
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
          scale: [1, 1.5, 2],
          html: `
          <div class="marker">
            <div class="marker-stick">
              <div class="marker-bubble">
                <img class="marker-bubble-img" src="${BASE}/icon_view_biet_thu.jpg"}/>
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
          scale: [1, 1.5, 2],
          html: `
          <div class="marker">
            <div class="marker-stick">
              <div class="marker-bubble">
                <img class="marker-bubble-img" src="${BASE}/icon_view_phu_du_an.jpg"}/>
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
          scale: [1, 1.5, 2],
          html: `
          <div class="marker"><div class="marker-stick">
            <div class="marker-banner">
              <div class="marker-banner-icon">
                <i class="material-icons md-36">expand_circle_down</i>
              </div>
              <div class="marker-banner-label">Trung tâm Vĩnh Long</div>
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
          scale: [1, 1.5, 2],
          html: `
            <div class="marker"><div class="marker-stick">
            <div class="marker-banner">
              <div class="marker-banner-icon">
                <i class="material-icons md-36">expand_circle_down</i>
              </div>
              <div class="marker-banner-label">Cầu Mỹ Thuận</div>
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
  tien_ich: TONG_QUAN_THUMB,
  can_ho_mau: TONG_QUAN_THUMB,
};

export const NODES = {
  tong_quan: TONG_QUAN_NODE,
  tien_ich: TONG_QUAN_NODE,
  can_ho_mau: [],
};
