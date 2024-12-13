import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import OrderSuccessImage from "../../assets/images/succ.png"
import { useSearchParams } from "react-router-dom";
function OrderSuccess() {
    const navigate = useNavigate();
    const params = useSearchParams();

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center py-28">

                <img 
                    width={400}
                    height={400}
                    src={OrderSuccessImage}
                />

                <p className="text-lg font-semibold">
                    Your order has been placed successfully
                </p>
                {params[0].get('reference') ? (
                    <>
                        <h3>Reference Number</h3>
                        <p>{params[0].get('reference')}</p>
                    </>
                ) : (
                    <></>
                )}

                <button
                    onClick={() => navigate('/')}
                    className="bg-yellow-500 text-white px-4 py-2 rounded mt-4"
                >
                    Go Back Home
                </button>

            </div>
        </Layout>
    )
}
export default OrderSuccess;