import React from "react";
import { Mail, Phone } from "lucide-react";
import Banner from "@/components/ui/Banner"; // keep your banner import

const images = [
  "https://static.flynas.com/media/5721/budget-grey.jpg",
  "https://content.jdmagicbox.com/v2/comp/mumbai/q6/022pxx22.xx22.100505123243.y9q6/catalogue/4-ways-tours-and-travel-mumbai-travel-agents-bze2tke2om.jpg",
  "https://images.squarespace-cdn.com/content/v1/64ba44348b6a05559a816bc1/1690282971608-B4BD48EE7DOGJDWKOL52/A+Guide+to+Travel+Photography-152.jpg",
];

const About = () => {
  return (
    <div>
      {/* Banner Section */}
      <section>
        <Banner images={images} />
      </section>

      {/* About Content */}
      <div className="max-w-2xl mx-auto text-center mt-10 space-y-6 p-4">
        <p className="text-gray-700 leading-relaxed">
          យើងខ្ញុំជាអ្នកស្រលាញ់ធម្មជាតិ និងការធ្វើដំណើរ ដោយសង្ឃឹមថា អាចធ្វើឲ្យអ្នកទស្សនាមានបទពិសោធន៍ថ្មីៗតាមរយៈការចែករំលែករូបភាពនិងវីដេអូពីដំណើរផ្សេងៗ។
        </p>

        <div className="flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1348728804/photo/young-hiker-man-taking-selfie-portrait-on-the-top-of-mountain-happy-guy-smiling-at-camera.jpg?s=612x612&w=0&k=20&c=oq10Nnu9UF5Zr1yAcUifyhsG7BW4MDU3H2S6lxS3cPc="
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
          />
        </div>

        <div className="space-y-3 mt-5">
          <div className="flex justify-center items-center gap-2 text-blue-600">
            <Mail className="w-5 h-5" />
            <span>travelgram@gmail.com</span>
          </div>

          <div className="flex justify-center items-center gap-2 text-blue-600">
            <Phone className="w-5 h-5" />
            <span>+855 968608206</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
