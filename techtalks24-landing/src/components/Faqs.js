// Faqs.js
import React from "react";
import FaqItem from "./faqItem"; // Adjust the path to match your folder structure

const Faqs = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] relative z-10" id="faqs">
      <div
        id="proxima"
        className="uppercase text-[16px] md:text-[10px] mx-[13%] md:mx-[10%] text-[#B7AB98] mt-32 mb-10 tracking-[7px]"
      >
        FAQs
      </div>
      <FaqItem
        question="Is the event online or offline?"
        answer="It is an offline event."
      />
      <FaqItem
        question="What is the location and time of the event?"
        answer="The event will be held on the 20th of September, in the Mahatma Gandhi Block Auditorium (near PRP) at 2pm"
      />
      <FaqItem
        question="How long is the event?"
        answer="The event is 5 hours long."
      />
      <FaqItem
        question="Is there a registration fee?"
        answer="It is ₹295 (incl. GST)"
      />
      <FaqItem
        question="What will I get out of the session?"
        answer="You will get to explore various domains of tech and how each one of them impacts real life scenarios. You will be introduced to tech from some of the best in the industry."
      />
      <FaqItem
        question="Do I need anything for the event?"
        answer="All you need is to show up, and be ready to absorb all the technical knowledge endowed by our esteemed speakers."
      />
      <FaqItem
        question="Will I get to interact with the speaker?"
        answer="We will open the floor for questions where you can ask your doubts to the speakers directly."
      />
      <FaqItem
        question="If I still have some doubts, how can I get them resolved?"
        answer="You can contact us using any of our social media handles"
      />
    </div>
  );
};

export default Faqs;
