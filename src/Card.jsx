import SingleCard from "./SingleCard";

function Card(){
    return(
        <>
            <section className="container mx-auto my-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    <SingleCard title='Computer' />
                    <SingleCard title='Laptop'/>
                    <SingleCard title='Mobile'/>
                    <SingleCard title='Iphone'/>
                    <SingleCard title='TV Monitor'/>
                    <SingleCard title='IPS Constructor'/>
                    <SingleCard title='CPU Unit'/>
                    <SingleCard title='Fan/Light'/>
                  
                </div>
            </section>
        </>
    )
}

export default Card;