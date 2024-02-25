// d.ts에 모듈 정의하여 다른 ts 파일에서 사용한다.
interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;

  function exit(code: number): number;
}
