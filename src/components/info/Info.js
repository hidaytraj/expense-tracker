import { observer } from "mobx-react-lite";
import { useStores } from "../../stores";

const Info = () => {
    const { infoStore } = useStores();

    return (
        <section className="info-wrapper">
            <h3 className="highlight">{infoStore.month}</h3>
        </section>
    )
}

export default observer(Info);