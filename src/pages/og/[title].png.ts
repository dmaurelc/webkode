import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  const { title } = params;
  const decodedTitle = decodeURIComponent(title || "Webkode");

  // Fetch a font from a CDN
  const fontFile = await fetch(
    "https://api.fontshare.com/v2/fonts/download/satoshi@900"
  ).then((res) => res.arrayBuffer());

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
                fontWeight: 400,
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
          data: fontFile,
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
