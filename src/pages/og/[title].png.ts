import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";

export const GET: APIRoute = async ({ params }) => {
  const { title } = params;
  const decodedTitle = decodeURIComponent(title || "Webkode");

  // Read fonts from local files to avoid build failures on Dokploy
  const fontsDir = path.resolve(process.cwd(), "public/fonts");
  const fontMedium = fs.readFileSync(
    path.join(fontsDir, "Satoshi-Medium.woff2")
  );
  const fontBold = fs.readFileSync(path.join(fontsDir, "Satoshi-Bold.woff2"));
  const fontBlack = fs.readFileSync(path.join(fontsDir, "Satoshi-Black.woff2"));

  const svg = await satori(
    {
      type: "div",
      props: {
        children: [
          {
            type: "div",
            props: {
              children: decodedTitle,
              style: {
                fontSize: 80,
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: 20,
              },
            },
          },
          {
            type: "div",
            props: {
              children: "WEBKODE.CL",
              style: {
                fontSize: 24,
                fontWeight: 500,
                color: "#D9FF00", // accent color
                letterSpacing: "0.4em",
              },
            },
          },
        ],
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #D9FF0010 0%, #000000 100%)",
          padding: "80px",
          textAlign: "center",
          border: "1px solid #ffffff10",
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Satoshi",
          data: fontMedium,
          weight: 500,
          style: "normal",
        },
        {
          name: "Satoshi",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Satoshi",
          data: fontBlack,
          weight: 900,
          style: "normal",
        },
      ],
    }
  );

  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(new Uint8Array(pngBuffer), {
    headers: {
      "Content-Type": "image/png",
    },
  });
};

export function getStaticPaths() {
  return [
    { params: { title: "Diseño y Desarrollo Web Premium" } },
    { params: { title: "Webkode" } },
  ];
}
