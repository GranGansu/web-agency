export default async function Sheets() {
  const content = await fetchSheetData();
  return (
    <div className="h-56">
      <h1>Sheets</h1>
      <h2>{content.home}</h2>
      <h2>{content.subhome}</h2>
    </div>
  );
}
// utils/fetchSheetData.ts
export async function fetchSheetData() {
  const sheetId = '1RRSi6GGgf5sBX0udNq5gsWBMzmoMinN_pXc2IkdkNnM';
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

  const res = await fetch(url);
  const text = await res.text();
  // Clean up weird Google response
  const jsonprev = text.replace('/*O_o*/','')
  const json = JSON.parse(jsonprev.replace(/.*google\.visualization\.Query\.setResponse\(/, '').slice(0, -2));

  const rows = json.table.rows;
  const data = {};

  rows.forEach((row) => {
    const key = row.c[0]?.v;
    const value = row.c[1]?.v;
    if (key && value) data[key] = value;
  });

  return data;
}
