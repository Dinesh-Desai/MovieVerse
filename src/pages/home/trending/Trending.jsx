import React, {useState} from "react"

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";

import useFetch from "../../../hooks/useFetch"

const Trending = () => {

    const [endpoint, setEndpoint] = useState("day");
console.log
    const {data, loading} = useFetch(`/trending/all/${endpoint}`);
    // ("Trending", data);
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");

    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">
                    Trending
                </span>
                <SwitchTabs data={["Day", "Week"]} onTabChange = {onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
        </div>
    )
}

export default Trending;