export const RoomList = ({ list }: { list: any[] }) => {
  const renderedList =
    list &&
    list.map((room) => {
      return (
        <div key={room.id}>
          <div>
            <div>{room.name}</div>
            <div>
              <div>🕖{room.startEnd}</div>
              <div>{room.memberCount}명 참여 중</div>
            </div>
          </div>
          <div>{room.goal}</div>
          <div>진행상황 ({room.taskProgress}%)</div>
        </div>
      );
    });

  return <>{renderedList}</>;
};
