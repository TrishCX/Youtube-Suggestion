export default function parser(content: any) {
  const formattedText = JSON.parse(JSON.stringify(content).replace(`)]}'`, ""));
  const json = JSON.parse(formattedText) as any[];
  const queries: string[] = [];
  let index: number = 1;
  json[index].map((item: any, _: number) => {
    const _q: string = item[0] as string;
    return queries.push(_q);
  });
  return queries;
}
