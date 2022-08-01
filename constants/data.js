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

export const TONG_QUAN_NODE = [
  {
    id: "view_chinh_du_an",
    panorama: "/360_view_chinh_du_an.webp",
    links: [
      {
        nodeId: "view_biet_thu",
        longitude: "56deg",
        latitude: "-12deg",
        markerStyle: {
          scale: [1, 1.5, 2],
          html: `
          <div class="marker">
            <div class="marker-stick">
              <div class="marker-bubble">
                <img class="marker-bubble-img" src="/icon_view_biet_thu.jpg"}/>
              </div>
              <div class="marker-label">View biệt thự</div>
            </div>
          </div>
          `,
        },
      },
      {
        nodeId: "view_phu_du_an",
        longitude: "54deg",
        latitude: "-33.5deg",
        markerStyle: {
          scale: [1, 1.5, 2],
          html: `
          <div class="marker">
            <div class="marker-stick">
              <div class="marker-bubble">
                <img class="marker-bubble-img" src="/icon_view_phu_du_an.jpg"}/>
              </div>
              <div class="marker-label">View phụ dự án</div>
            </div>
          </div>`,
        },
      },
      {
        nodeId: "trung_tam_vinh_long",
        longitude: "100deg",
        latitude: "-33.5deg",
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
        longitude: "0deg",
        latitude: "-33.5deg",
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
    panorama: "/360_view_phu_du_an.webp",
    links: [
      {
        nodeId: "view_chinh_du_an",
        x: 1500,
        y: 780,
      },
    ],
  },
  {
    id: "view_biet_thu",
    panorama: "/360_view_biet_thu.webp",
    links: [
      {
        nodeId: "view_chinh_du_an",
        x: 1500,
        y: 780,
      },
    ],
  },
  {
    id: "cau_my_thuan",
    panorama: "/360_cau_my_thuan.webp",
    links: [
      {
        nodeId: "view_chinh_du_an",
        x: 1500,
        y: 780,
      },
    ],
  },
  {
    id: "trung_tam_vinh_long",
    panorama: "/360_trung_tam_vinh_long.webp",
    links: [
      {
        nodeId: "view_chinh_du_an",
        x: 1500,
        y: 780,
      },
    ],
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
