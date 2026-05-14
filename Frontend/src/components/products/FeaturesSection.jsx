/*
 * Copyright (c) - All Rights Reserved.
 *
 * See the LICENSE file for more information.
 */
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
const FeaturesSection = () => {
  return (
    <section className=" py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
          </div>
          <h4 className="tracking-tighter  mb-2">
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders over $100.00
          </p>
        </div>
        {/* feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="h-6 w-6 text-gray-700" />
          </div>
          <h4 className="tracking-tighter  mb-2">45 DAYS RETURN POLICY</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Money back guarantee
          </p>
        </div>
        {/* feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="h-6 w-6 text-gray-700" />
          </div>
          <h4 className="tracking-tighter  mb-2">SECURE CHECKOUT</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secure payment processing
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
