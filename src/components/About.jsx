import React from "react";
import ConImg from "../assets/Rectangle 17.svg";

const About = () => {
  return (
    <>
      <div className="bg-[#FFF3E0]">
        <div
          className="h-[300px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${ConImg})` }}
        >
          <h2 className="absolute text-2xl text-[#FFF3E0] font-serif justify-self-center py-35">
            About Us
          </h2>
        </div>

        <div className="h-fit w-screen px-[100px] pt-[50px] pb-[100px]">
          <p className="text-[#4B2C20] font-serif text-xl tracking-[0.38px]">
            Ah, Espressio! Nestled in the heart of the bustling city, this
            coffee haven is a sanctuary for coffee aficionados and casual
            sippers alike. The moment you step through its inviting doors, the
            aroma of freshly brewed coffee beans envelops you, immediately
            setting the mood for a delightful experience. The interior is a
            blend of modern minimalism and cozy warmth. Soft lighting bathes the
            space, accentuating the rich, earthy tones of wooden tables and
            chairs arranged to encourage both solitary moments of reflection and
            animated conversations among friends. The walls are adorned with
            local art, infusing the space with a unique, vibrant charm. At
            Espressio, the baristas are artisans, meticulously crafting each cup
            of coffee with precision and care. Behind the sleek counter adorned
            with gleaming espresso machines, they create intricate latte art,
            transforming every cup into a canvas. The menu boasts a variety of
            blends sourced from around the world—ethically and sustainably, of
            course—allowing patrons to explore a spectrum of flavors, from
            robust and bold to velvety and smooth. Regulars appreciate the
            baristas' expertise, as they're always ready to recommend a new
            favorite or customize a drink to suit individual tastes. Whether
            it's a classic espresso, a frothy cappuccino, or a trendy seasonal
            specialty, each sip tells a story of passion for the perfect brew.
            Espressio isn't just about coffee; it's a hub of community
            engagement. From hosting local musicians during weekend jam sessions
            to organizing art exhibits and book clubs, this cafe fosters
            connections beyond caffeine. It's a place where strangers become
            friends over a shared appreciation for a great cup of joe. The
            atmosphere hums with the symphony of laughter, the clinking of cups,
            and the gentle hum of conversation. Students huddle over textbooks,
            creatives sketching in notebooks, professionals discussing ideas—all
            finding a common ground in this cozy haven. And let's not forget the
            delectable pastries and snacks displayed temptingly in glass cases.
            Freshly baked croissants, artisanal cookies, and savory sandwiches
            complement the coffee offerings, enticing visitors to indulge in a
            delightful culinary experience alongside their chosen brew.
            Espressio isn't just a coffee shop; it's a destination—a retreat
            where the love for coffee intertwines with the warmth of community,
            creating an inviting space that feels like a home away from home for
            its patrons.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
