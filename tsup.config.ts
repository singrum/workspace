import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/index.tsx"], // 진입점 설정
  format: ["cjs", "esm"], // CommonJS와 ESModule 모두 지원
  dts: true, // TypeScript 정의 파일(.d.ts) 생성
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "zustand"], // 빌드 결과물에 포함하지 않음
});
