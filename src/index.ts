import { API_URL } from "./constants/api";
import { request } from "./request";
import { getRestURL } from "./helpers/getRestURI";
import { Options } from "./typings/Options";
import parser from "./parser/parser";

export class SearchClient {
  private query?: string;
  private hl?: string;
  private gl?: string;
  private header?: string;

  constructor(options?: Options) {
    this.hl = options?.hl || "en";
    this.gl = options?.gl || "us";
    this.header =
      options?.header ||
      `Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0`;
  }
  public async suggestion(query: string) {
    this.query = query;
    const url: string = `${API_URL}${getRestURL(this.query, this.hl, this.gl)}`;
    const response = await request.get(url);
    return parser(response);
  }
}
