// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: ["@emotion/babel-plugin"],
//       },
//       jsxImportSource: "@emotion/react",
//     }),
//   ],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
      jsxImportSource: "@emotion/react",
    }),
  ],
  server: {
    host: "127.0.0.1", // IPv4 주소로 강제 설정
    port: 3000, // 포트를 3000번으로 변경 (원하는 다른 포트 번호로도 변경 가능)
  },
});
