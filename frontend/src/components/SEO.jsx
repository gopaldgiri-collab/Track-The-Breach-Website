import { useEffect } from "react";

// Lightweight per-page SEO helper that updates the document title and
// meta description tags without adding a runtime dependency on react-helmet.
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);

      // Update OG description too
      let og = document.querySelector('meta[property="og:description"]');
      if (!og) {
        og = document.createElement("meta");
        og.setAttribute("property", "og:description");
        document.head.appendChild(og);
      }
      og.setAttribute("content", description);
    }
    if (title) {
      let ogt = document.querySelector('meta[property="og:title"]');
      if (!ogt) {
        ogt = document.createElement("meta");
        ogt.setAttribute("property", "og:title");
        document.head.appendChild(ogt);
      }
      ogt.setAttribute("content", title);
    }
  }, [title, description]);
  return null;
}
