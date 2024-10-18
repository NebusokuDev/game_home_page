import {Button} from '@mantine/core';

interface DownloadButtonProps {
  url: string;
}

export const DownloadButton = ({url}: DownloadButtonProps) => {
  return (
    <a href={url}>
      <Button>ゲームをダウンロード</Button>
    </a>
  );
};
