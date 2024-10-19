function About() {
    return (
        <div>

            <div className="flex flex-col mt-10 md:flex-row p-20">
                <div className="flex relative justify-start mt-4 md:w-2/3 m-5">
                    <iframe
                        className="rounded-3xl w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.129204355897!2d77.16819717495993!3d28.717239080229945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01a417a826b9%3A0x6100c2c61c9c3924!2sPizza%20Galleria%20Adarsh%20Nagar!5e0!3m2!1sen!2sin!4v1729322682043!5m2!1sen!2sin"
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="flex flex-col m-5 md:px-8 md:w-1/3 text-black text-left">
                    <h1 className="mt-4 pb-3 font-bold text-transparent text-6xl bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text">About</h1>
                    <p className="md:mt-4 text-justify">
                        At Pizza App, we are passionate about crafting exceptional pizzas
                        that bring joy to every bite. 
                        Our journey began with a commitment to using the freshest,
                        high-quality ingredients, combined with authentic recipes
                        passed down through generations.
                        Whether you're craving a classic Margherita or
                        an adventurous specialty pizza,
                        each creation is made with care and attention to detail. 
                        Join us in celebrating the art of pizza-making
                        and indulge in flavors that will leave you wanting more.
                        Welcome to the world of Pizza App, where every pizza
                        tells a delicious story
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
