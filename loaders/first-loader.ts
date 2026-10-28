export default function (source: string) {
  console.log('执行 first-loader');
  return source + '\nconsole.log("first-loader");';
}