export default function (source: string) {
  console.log('执行 second-loader');
  return source + '\nconsole.log("second-loader");';
}