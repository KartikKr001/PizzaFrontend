import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { placeOfflineOrder, placeOnlineOrder } from "../../Redux/Slices/OrderSlice";

function Order() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cartsData } = useSelector((state) => state.cart);
    const [amount, setAmount] = useState(0); // Total amount

    const [details, setDetails] = useState({
        paymentMethod: "offline",
        address: "",
    });

    // Calculate the total amount whenever `cartsData` changes
    useEffect(() => {
        if (cartsData?.items?.length > 0) {
            const totalAmount = cartsData.items.reduce((acc, item) => {
                return acc + (item?.quantity * item?.product?.price || 0);
            }, 0);
            setAmount(totalAmount);
        } else {
            setAmount(0); // Reset amount if the cart is empty
        }
    }, [cartsData]);

    function handleUserInput(e) {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value,
        });
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        // Validation
        if (!details.paymentMethod || !details.address) {
            toast.error("Please fill all the fields");
            return;
        }

        try {
            if (details.paymentMethod === "offline") {
                const response = await dispatch(placeOfflineOrder(details));
                if (response?.payload?.data?.success) {
                    navigate("/order/success");
                }
            } else {
                const onlineDetails = {
                    ...details,
                    amount: amount, // Include the total amount for online orders
                };

                const createOrder = await dispatch(placeOnlineOrder(onlineDetails));
                console.log(createOrder)
                const options = {
                    key: 'rzp_live_4PmCSlWSTIfrBI',
                    amount: amount * 100, // Convert to subunits
                    currency: "INR",
                    name: "Pizza App",
                    description: "Order Payment",
                    order_id: createOrder.payload.data.order.id,
                    callback_url: "http://localhost/5500/payment/paymentverification",
                    prefill: {
                        name: "Kartik Kumar",
                        email: "kartikepic99@gmail.com",
                        contact: "9000090000",
                    },
                    theme: {
                        color: "#ffb74d",
                    },
                };
                console.log(options)
                const razor = new window.Razorpay(options);
                
                razor.open();
                    razor.on("payment.success", (response) => {
                        toast.success("Payment successful!");
                    });

                    razor.on("payment.failed", (response) => {
                        console.error("Payment failed:", response.error);
                        toast.error("Payment failed. Please try again.");
                    });
                }
        } catch (error) {
            console.error("Error placing order:", error);
            toast.error("Something went wrong. Please try again.");
        }
    }

    return (
        <Layout>
            <section className="text-gray-600 body-font min-h-56">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Thanks for Choosing Us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Total Price -{" "}
                            <span className="font-bold text-red-900">₹ {amount}</span>
                        </p>
                    </div>

                    <form onSubmit={handleFormSubmit}>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="paymentMethod" className="text-2xl leading-7 text-gray-600">
                                Payment Method
                            </label>
                            <select
                                name="paymentMethod"
                                required
                                onChange={handleUserInput}
                                className="p-2 border rounded-md focus:outline-none focus:border-primary-500 bg-white text-gray-700 w-full"
                            >
                                <option value="offline">Offline</option>
                                <option value="online">Online</option>
                            </select>
                        </div>

                        <div className="relative flex-grow w-full my-5">
                            <label htmlFor="address" className="leading-7 text-2xl text-gray-600">
                                Address
                            </label>
                            <textarea
                                name="address"
                                placeholder="Enter your address here..."
                                onChange={handleUserInput}
                                className="w-full p-2 border rounded-md focus:outline-none focus:border-primary-500 bg-white text-gray-700"
                                required
                            ></textarea>
                        </div>

                        <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded text-lg">
                            Place Order
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    );
}

export default Order;
