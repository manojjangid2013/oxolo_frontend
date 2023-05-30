import { useQuery } from '@tanstack/react-query';
import Header from '../../component/Header.component';
import PageBody from '../../component/PageBody.component';
import PageLayout from '../../component/PageLayout.component';
import { IServiceResult, IVisulInfo } from '../../general/interface';
import { PlayerContent } from '../../component/PlayerContent.component';

export default function Player() {
  // const { data: serviceResult } = useQuery<IServiceResult<IVisulInfo>>({
  //   queryKey: ['getCurrent'],
  //   queryFn: () => fetch(GetCurrentVisualInfoAddress).then((res) => res.json()),
  // });
  return (
    <PageLayout>
      <Header text='Video Player' />
      <PageBody>
        <PlayerContent serviceResult={ defaultValue} />
      </PageBody>
    </PageLayout>
  );
}

const defaultValue = {
  text: 'new text',
  position: { x: 0, y: 0 },
  timeStamp: '',
};
