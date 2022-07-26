const JsonLd = ({ json }: { json: string; }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
  />
)

export default JsonLd;
