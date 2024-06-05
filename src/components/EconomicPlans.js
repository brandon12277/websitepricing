

  
  
    
    import { useMediaQuery } from 'react-responsive';
    import ToggleBlock from './toggleBlock';

const EconomicPlans = () =>{
    const isMobile = useMediaQuery({ maxWidth: 940 });

    const features = [
        "Basic Logo Creation",
        "Fully Functional Backend/Frontend",
        "Mobile/Desktop Responsive Design",
        "Professional Website Design",
        "Premium Theme",
        "Fast Speed",
        "Smooth Integration",
        "Server Setup",
        "DNS Management",
        "Email Setup",
        "Stock Images Upload",
        "Graphic Design Creation",
        "Google Analytics",
        "Google Submission",
        "Basic Meta Creation",
        "Contact Form",
        "Social Media Link Integration",
        "1 Hour Training Post Delivery",
        "Professional Email and Integration",
        "Basic Content",
        "Content Upload",
        "Content Creation",
        "SEO Tool Implementation",
        "Pages",
        "Pop-up Notification",
        "Multi channel Chatbot integration",
        "Sitemap Creation",
        "Wireframing",
        "Multiple Page Design Concept",
        "Rotating Banner on Home Page",
        "CMS (Self Manageable Site)",
        "Manage Page/Image/Content",
        "Website Search",
        "Blog",
        "YouTube Video Imbed (Provided by client)",
        "SSL Implementation",
        "Enquiry Form Submission",
        "Full Google Admin Configuration",
        "Newsletter Subscription",
        "Multi Language",
        "User Registration and Management",
        "Development Rev",
        "Testimonials",
        "Dedicated Account Manager",
        "Sale/Account Report",
        "Inquiries on Email",
        "Website Transfer to Live Environment",
        "Up-sells and cross-sells",			
"Catalog Management",		
"Product Search",				
"Product Filtering",				
"Category Manager",				
"Discount Management",				
"Shopping Cart",				
"Multi Currency",				
"Bulk upload of Products",				
"Level Category",				
"Product Listing",	
"Woocommerce and tax set up",				
"Sale/Account Report"				
      ];
      
      const startup = [
        "✗", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓","✓" , "✗", "✗", "✗", "✗", "✓", "✓", "✓", "✓", "✓", "✗", "✗", "✗", "2-3", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✗", "✓", "✓", "✗", "✗", "✗", "✓", "1", "✓", "✓", "✗","✓" ,
        "✗", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓","1-10", "✓","✓"];
      
      const business = [
        "✗", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✗", "✗", "✗", "✓", "✓", "✓", "3", "✓", "✓", "✓", "✓", "2-3", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "1", "✓", "✓", "✗", "✓", "✗","✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "20-30","✓", "✓"
      ];
      
      const enterprise = [
        "✗", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "4-5", "✓", "✓", "✓", "✓", "4-5", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "2", "✓", "✓", "✓", "✓", "✓","✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "30-50","✓", "✓"
      ];
      
      const corporate = [
        "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "5-7", "✓", "✓", "✓", "✓", "6-7", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "4", "✓", "✓", "✓", "✓", "✓","✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "50-80","✓", "✓"
      ];
      
      const pricing = {
        startup: "₨7999/-",
        business: "₨9999/-",
        enterprise: "₨15999/-",
        corporate: "₨21999/-"
      };
  
    return(
        <>
         { !isMobile ? 
            
            <div className="flex flex-col gap-4 w-full items-center justify-center roboto-thin">
                <h1 className="text-4xl font-bold mt-20">Ecommerce Plans and Pricing</h1>

                <div className="packages-table">
        
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th className="border border-black">Features</th>
              <th className="border border-black">Startup ({pricing.startup})</th>
              <th className="border border-black">Business ({pricing.business})</th>
              <th className="border border-black">Enterprise ({pricing.enterprise})</th>
              <th className="border border-black">Corporate ({pricing.corporate})</th>
            </tr>
          </thead>
          <tbody className="border border-black">
            {features.map((feature, index) => (
              <tr key={index} className={` ${index%2 === 0 ? "bg-white-500" : "bg-gray-100"} `}>
                <td className="border-r border-black">{feature}</td>
                <td className="border-r border-black" style={{ color: startup[index] === '✗' ?   'red' : startup[index] === "✓" ? 'green' : "" }}>{startup[index]}</td>
<td className="border-r border-black" style={{ color: business[index] === '✗' ? 'red' : business[index] === "✓"? 'green' : "" }}>{business[index]}</td>
<td className="border-r border-black" style={{ color: enterprise[index] === '✗' ? 'red' : enterprise[index] === "✓" ? 'green' : "" }}>{enterprise[index]}</td>
<td className="border-r border-black" style={{ color: corporate[index] === '✗' ? 'red' : corporate[index] === "✓" ? 'green' : "" }}>{corporate[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            </div>
           :
           <div className="flex flex-col  w-full items-center justify-center">

<h1 className="text-4xl font-bold mt-20 mb-10">Ecommerce Plans and Pricing</h1>
                         <ToggleBlock
             packageName="Startup"
             price="Rs. 7,999"
             packageDetails={[
             {
             heading: "",
             points: [
               "Fully Functional Backend/Frontend",
               "Mobile/Desktop Responsive Design",
               "Professional Website Design",
               "Premium Theme",
               "Fast Speed",
               "Smooth Integration",
               "Server Setup",
               "DNS Management",
               "Email Setup",
               "Stock Images Upload",
               "Contact Form",
               "Social Media Link Integration",
               "1 Hour Training Post Delivery",
               "Professional Email and Integration",
               "Basic Content",
               "Pop-up Notification",
               "Multi channel Chatbot integration",
               "Sitemap Creation",
               "Wireframing",
               "Multiple Page Design Concept",
               "Rotating Banner on Home Page",
               "CMS (Self Manageable Site)",
               "Manage Page/Image/Content",
               "Website Search",
               "Blog",
               "SSL Implementation",
               "Enquiry Form Submission",
               "User Registration and Management",
               "Testimonials",
               "Dedicated Account Manager",
               "Inquiries on Email"
             ]
             },
             ]}
           />
           
           
           <ToggleBlock
             packageName="Business"
             price="Rs. 9,999"
             packageDetails={[
             {
             heading: "",
             points: [
               "Fully Functional Backend/Frontend",
               "Mobile/Desktop Responsive Design",
               "Professional Website Design",
               "Premium Theme",
               "Fast Speed",
               "Smooth Integration",
               "Server Setup",
               "DNS Management",
               "Email Setup",
               "Stock Images Upload",
               "Contact Form",
               "Social Media Link Integration",
               "1 Hour Training Post Delivery",
               "Professional Email and Integration",
               "Basic Content",
               "Graphic Design Creation",
               "Pop-up Notification",
               "Multi channel Chatbot integration",
               "Sitemap Creation",
               "Wireframing",
               "Multiple Page Design Concept",
               "Rotating Banner on Home Page",
               "CMS (Self Manageable Site)",
               "Manage Page/Image/Content",
               "Website Search",
               "Content Upload",
               "Content Creation",
               "SEO Tool Implementation",
               "Pages",
               "Blog",
               "SSL Implementation",
               "Enquiry Form Submission",
               "User Registration and Management",
               "Testimonials",
               "YouTube Video Imbed (Provided by client)",
               "Full Google Admin Configuration",
               "Newsletter Subscription",
               "Multi Language",
               "Development Rev",
               "Dedicated Account Manager",
               "Inquiries on Email"
             ]
             },
             ]}
           />
           
           
           <ToggleBlock
             packageName="Enterprise"
             price="Rs. 15,999"
             packageDetails={[
             {
             heading: "",
             points: [
               "Fully Functional Backend/Frontend",
               "Basic Logo Creation", 
               "Mobile/Desktop Responsive Design",
               "Professional Website Design",
               "Premium Theme",
               "Fast Speed",
               "Smooth Integration",
               "Server Setup",
               "DNS Management",
               "Email Setup",
               "Stock Images Upload",
               "Contact Form",
               "Google Analytics",
               "Google Submission",
               "Basic Meta Creation",
               "Social Media Link Integration",
               "1 Hour Training Post Delivery",
               "Professional Email and Integration",
               "Basic Content",
               "Graphic Design Creation",
               "Pop-up Notification",
               "Multi channel Chatbot integration",
               "Sitemap Creation",
               "Wireframing",
               "Multiple Page Design Concept",
               "Rotating Banner on Home Page",
               "CMS (Self Manageable Site)",
               "Manage Page/Image/Content",
               "Website Search",
               "Content Upload",
               "Content Creation",
               "SEO Tool Implementation",
               "Pages",
               "Blog",
               "SSL Implementation",
               "Enquiry Form Submission",
               "User Registration and Management",
               "Testimonials",
               "YouTube Video Imbed (Provided by client)",
               "Full Google Admin Configuration",
               "Newsletter Subscription",
               "Multi Language",
               "Development Rev",
               "Dedicated Account Manager",
               "Website Transfer to Live Environment",
               "Inquiries on Email" 
             ]
             },
             ]}
           />
           
           
           <ToggleBlock
             packageName="Corporate"
             price="Rs. 21,999"
             packageDetails={[
             {
             heading: "",
             points: [
               "Fully Functional Backend/Frontend",
               "Basic Logo Creation", 
               "Mobile/Desktop Responsive Design",
               "Professional Website Design",
               "Premium Theme",
               "Fast Speed",
               "Smooth Integration",
               "Server Setup",
               "DNS Management",
               "Email Setup",
               "Stock Images Upload",
               "Contact Form",
               "Google Analytics",
               "Google Submission",
               "Basic Meta Creation",
               "Social Media Link Integration",
               "1 Hour Training Post Delivery",
               "Professional Email and Integration",
               "Basic Content",
               "Graphic Design Creation",
               "Pop-up Notification",
               "Multi channel Chatbot integration",
               "Sitemap Creation",
               "Wireframing",
               "Multiple Page Design Concept",
               "Rotating Banner on Home Page",
               "CMS (Self Manageable Site)",
               "Manage Page/Image/Content",
               "Website Search",
               "Content Upload",
               "Content Creation",
               "SEO Tool Implementation",
               "Pages",
               "Blog",
               "SSL Implementation",
               "Enquiry Form Submission",
               "User Registration and Management",
               "Testimonials",
               "YouTube Video Imbed (Provided by client)",
               "Full Google Admin Configuration",
               "Newsletter Subscription",
               "Multi Language",
               "Development Rev",
               "Dedicated Account Manager",
               "Website Transfer to Live Environment",
               "Inquiries on Email" 
             ]
             },
             ]}
           />
                             
                            </div>
        }
         
        </>
    )


}

export default EconomicPlans;