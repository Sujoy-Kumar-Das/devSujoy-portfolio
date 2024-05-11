export type TWork = {
  id: number;
  title: string;
};

export type TMyInfo = {
  title: string;
  subTitle: string;
  name: string;
  work: TWork[];
  image: string;
  resumeViewLink: string;
  resumeDownloadLink: string;
  description: string;
};
