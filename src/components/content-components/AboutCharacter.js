import { useEffect } from "react";
import { useDataContext } from "../../contexts/DataContext";

const AboutCharacter = () => {
    const { characters,
        totalButtons,
        pageSelected,
        setPageSelected,
        setPrevStatus,
        setNextStatus,
        nextStatus,
        prevStatus,
        buttonFind,
        setButtonFind } = useDataContext();

    const nextPage = () => {
        setNextStatus(!nextStatus)
        setPageSelected(pageSelected + 1)
    }

    const prevPage = () => {
        setPrevStatus(!prevStatus)
        setPageSelected(pageSelected - 1)
    }

    const selectPage = (page) => {
        setButtonFind(!buttonFind)
        setPageSelected(page)
    }

    const reset = () => {
        setPageSelected(1)
    }

    useEffect(() => {
        console.log(totalButtons)
        console.log(totalButtons.length)
    }, [totalButtons])

    return (
        <div className="character-general-container">
            <div className="filters-container">
                <div>
                    <label>Name</label>
                    <input placeholder="Write name to filter" />
                </div>
                <div>
                    <div>
                        <label>Status</label>
                        <select>
                            <option>Dead</option>
                        </select>
                    </div>
                    <div>
                        <label>Specie</label>
                        <select>
                            <option>Human</option>
                        </select>
                    </div>
                    <div>
                        <label>Gender</label>
                        <select>
                            <option>Female</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container-recents">
                {characters.map((item, index) => {
                    return (
                        <div key={index} className="card-recent-character">
                            <div className="portal-resource">
                                <h4>{item.id}</h4>
                            </div>
                            <img alt="character" className="character-img" src={item.image} />
                            <div className="info-character">
                                <h3 className="name-character">{item.name}</h3>
                                <div className="footer-card">
                                    <div className="state-character" style={{
                                        backgroundColor: item.status === "Alive" ? "#97ce4c" : item.status === "Dead" ? "red" : item.status === "unknown" ? "gray" : ""
                                    }}>
                                        {item.status}</div>
                                    <h4>{item.gender}</h4>
                                    <h4>{item.species}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="button-container">
                <button className="button-paginate" disabled={pageSelected === 1} onClick={prevPage}>{'<'}</button>
                <button className="button-paginate" style={{ display: pageSelected > 4 ? 'inline' : 'none' }} onClick={reset}>{'1'}</button>
                {totalButtons.map((item, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => selectPage(item)}
                            className={item === pageSelected ? 'button-paginate active-button' : 'button-paginate'}
                        >
                            {item}
                        </button>
                    );
                })}
                <button className="button-paginate" disabled={totalButtons.length === 1} onClick={nextPage}>{'>'}</button>
            </div>
        </div>
    )
}

export default AboutCharacter