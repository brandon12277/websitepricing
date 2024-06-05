
import { useMediaQuery } from 'react-responsive';
import "../css/fonts.css"
const SalesBlock = () =>{

    const isMobile = useMediaQuery({ maxWidth: 940 });

    const portofoliofeaturesList = [
        "Dedicated Account Manager",
        "Fully Functional Backend/Frontend",
        "Mobile/Desktop Responsive Design",
        "Professional Website Design",
        "Premium Theme",
        "Fast Speed",
        "Smooth Integration",
        "Server Setup",
        "DNS Management",
        "Email Setup",
        "Graphic Design Upload",
        "Graphic Design Creation",
        "Contact Form",
        "Social media Link Integration",
        "1 Hour Training Post Delivery",
        "Mobile/Desktop Responsive Design",
        "Professional Email and Integration",
        "Content Upload",
        "Content Creation",
        "SEO Tool Implementation",
        "Pages - 3-4",
        "YouTube Video Imbed (Provided by client)",
        "Chatbot integration",
        "Wireframing",
        "Multiple Page Design Concept",
        "Rotating Banner on Home Page",
        "CMS (Self Manageable Site)",
        "Manage Page/Image/Content",
        "Website Search",
        "Blog",
        "SSL Implementation",
        "Enquiry Form Submission",
        "Full Google Admin Configuration",
        "Development Rev - 2",
        "Testimonials",
        "Inquiries on Backend Panel"
      ];

      const ecommfeaturesList = [
        "Product Listing - Upto 30",
        "Fully Functional Backend/Frontend",
        "Mobile/Desktop Responsive Design",
        "Professional Website Design",
        "Premium Theme",
        "Fast Speed",
        "Smooth Integration",
        "Server Setup",
        "DNS Management",
        "Email Setup",
        "Graphic Design Creation",
        "Contact Form",
        "Social media Link Integration",
        "1 Hour Training Post Delivery",
        "Professional Email and Integration",
        "Content Creation",
        "SEO Tool Implementation",
        "Pages - 4-5",
        "Dev Revision - 2",
        "YouTube Video Imbed (Provided by client)",
        "Chatbot integration",
        "Multiple Page Design Concept",
        "Rotating Banner on Home Page",
        "CMS (Self Manageable Site)",
        "Manage Page/Image/Content",
        "Blog",
        "SSL Implementation",
        "Enquiry Form Submission",
        "Full Google Admin Configuration",
        "Testimonials",
        "Inquiries on Emails",
        "Site Map Creations",
        "Dedicated Account Manager",
        "Catalog Management",
        "Product Search",
        "Discount Management",
        "Shopping Cart",
        "Bulk upload of Products",
        "Woocommerce and tax set up",
        "Sale/Account Report"
      ];



    return(
        <>

          <div className={ `w-full flex ${isMobile ? "flex-col p-2" : " "} mt-10 justify-center gap-20 `}>
            

          <div className=" relative text-left border shadow px-16 py-10">
          <h1 className="absolute top-0  left-0 p-2 m-0 transform rotate-90 bg-red-500 text-white">SALE</h1>
      <h1 className="text-3xl font-bold py-4 roboto-thin">Portfolio | Service Website</h1>
      <h2 className="text-4xl font-bold roboto-thin">Rs 7999/- </h2>
      <h2 className="text-lg font-bold roboto-thin mb-4">(Exclusive GST)</h2>
      <h3 className="text-lg  roboto-thin mb-4">Features</h3>
      <ul className='roboto-thin'>
        {portofoliofeaturesList.map((feature, index) => (
          <li key={index}>
            <span style={{marginRight: '8px' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button class="bg-yellow-300 border border-black rounded-full p-4 mt-10 text-black">SUBSCRIBE</button>

    </div>

    <div className=" relative text-left border shadow px-20 py-10">
    <h1 className="absolute top-0 left-0 p-2 m-0 transform rotate-90 bg-red-500 text-white">SALE</h1>
    <h1 className="text-3xl font-bold py-4 roboto-thin">E-commerce Website</h1>
    <h2 className="text-4xl font-bold roboto-thin">Rs 10999/- </h2>
    <h2 className="text-lg font-bold roboto-thin mb-4">(Exclusive GST)</h2>
    <h3 className="text-lg  roboto-thin mb-4">Features</h3>
    <ul className='roboto-thin'>
        {ecommfeaturesList.map((feature, index) => (
          <li key={index}>
            <span style={{ marginRight: '8px' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button class="bg-yellow-300 border border-black rounded-full p-4 mt-10 text-black">SUBSCRIBE</button>

    </div>

          </div>

        </>
    )
}

export default SalesBlock