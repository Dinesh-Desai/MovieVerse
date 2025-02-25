import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

     if (loading || data?.results.length)
       return (
         <Carousel
           title="Recommendations"
           data={data?.results}
           loading={loading}
           endpoint={mediaType}
         />
       );
};

export default Recommendation;