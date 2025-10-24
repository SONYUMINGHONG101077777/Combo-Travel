import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DialogDisplay({ data }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl shadow-md w-40">
          ព័ត៌មានលម្អិត
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-600 text-center">
            {data?.title || "Resort & Camping"}
          </DialogTitle>
          <DialogDescription className="text-gray-700 text-center">
            {data?.description1}
          </DialogDescription>
        </DialogHeader>

        <img
          src={data?.img1}
          alt={data?.title1}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
            <img
              src={data?.img2}
              alt={data?.title2}
              className="w-10 h-10 object-cover rounded-lg mb-4"
              />
               <p>{data?.description2}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.subItems?.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-3 shadow-sm bg-gray-50 text-center"
            >
              <img
                src={item.img}
                alt={item.type}
                className="w-full h-28 object-cover rounded-lg mb-2"
              />
              <h4 className="font-semibold">{item.type}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.text}</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}