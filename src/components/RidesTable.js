import useFetch from "../useFetch";


const RidesTable = () => {
    const { data: events } = useFetch(
        "https://api.chucknorris.io/jokes/categories"
      );

    return ( <>
    {events}
    </> );
}
 
export default RidesTable;