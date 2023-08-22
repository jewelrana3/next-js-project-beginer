"use client"

import { useParams, useSearchParams } from "next/navigation";

const SingleBlos = ({params,searchParams}) => {
   const [year,id] = params.segments || [];
   const params2 = useParams();
   const searchParams2 = useSearchParams();

   console.log(params2.segments,searchParams2.get('title'))
    return (
        <div>
            Single Bols
            {year || new Date().getFullYear()} for {id}
            <br />
            {searchParams.title}
        </div>
    );
};

export default SingleBlos;