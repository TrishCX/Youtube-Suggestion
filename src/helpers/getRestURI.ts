export function getRestURL(query: string, hl?: string, gl?: string): string {
  return `/complete/search?client=youtube&${hl}=en&gl=${gl}&gs_rn=64&gs_ri=youtube&ds=yt&cp=1&gs_id=8&q=${query}&xhr=t&xssi=t`;
}
