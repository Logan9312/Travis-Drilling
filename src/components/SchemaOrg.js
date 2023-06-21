// components/SchemaOrg.js

const SchemaOrg = () => (
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "Travis Drilling LTD.",
        "image": "https://www.travisdrilling.ca/logo.png",
        "@id": "",
        "url": "https://www.travisdrilling.ca/",
        "telephone": "7809743184",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Onoway",
          "addressRegion": "AB",
          "postalCode": "T0E1V0",
          "addressCountry": "CA"
        }  
      }
      `}
  </script>
);

export default SchemaOrg;
