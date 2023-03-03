import { Watch } from "../Watch";
import "./WatchContainer.css";

export function WatchContainer({ watchStore, deleteHandler }) {
  return (
    <div className="watch-container">
      {watchStore.map((watch) => {
        return <Watch title={watch.title} zone={watch.zone} key={Math.random()} deleteHandler={deleteHandler}/>;
      })}
    </div>
  );
}
