import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogDisplay({ data }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl shadow-md">
          ព័ត៌មានលម្អិត
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white rounded-2xl shadow-xl border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-orange-600">
            {data?.name || "Resort & Camping"}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
           ប្រាសាទអង្គរវត្តគឺជាកន្លែងមើលថ្ងៃរះដ៏ល្បីល្បាញបំផុតនៅក្នុងពិភពលោក។ ទេសភាពពេលព្រឹកនៅទីនេះគឺស្រស់ស្អាត និងស្ងប់ស្ងាត់។ អ្នកអាចជ្រើសរើសច្រកចូលខាងកើត ឬស្រះស្រង់សម្រាប់ទទួលទេសភាពនេះ។
          </DialogDescription>
        </DialogHeader>

        {/* រូបភាព */}
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <img
            src={
              data?.image ||
              "https://www.siemreap.net/wp-content/uploads/2019/03/Phnom-Bakeng-siem-reap-cambodia.jpg"
            }
            alt="Location"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          {
            t
          }
        </div>

        {/* GRID 2 ITEMS (Resort & Camping) */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Resort Card */}
          <div className="border rounded-xl shadow-sm overflow-hidden">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/421849064.jpg?k=2a3b97c84e7520a14973fb069168d9698d537c96554438ebf23ae6f7f016744b&o=&hp=1"
              alt="resort"
              className="w-full h-28 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-gray-800">Resort</h3>
              <p className="text-sm text-gray-600">
                កន្លែងស្នាក់នៅបែបសណ្ឋាគារទំនើប
              </p>
              <Button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg">
                Book Now
              </Button>
            </div>
          </div>

          {/* Camping Card */}
          <div className="border rounded-xl shadow-sm overflow-hidden">
            <img
              src="https://media.glampinghub.com/CACHE/images/accommodations/eco-friendly-luxury-tents-in-cambodia-1562055584508/01c2f4192c5936c5ed7ccebc5ec5d02c.jpg"
              alt="camping"
              className="w-full h-28 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-gray-800">Camping</h3>
              <p className="text-sm text-gray-600">
                សម្រាប់អ្នកចូលចិត្តធម្មជាតិពិតប្រាកដ
              </p>
              <Button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* ប៊ូតុង */}
        <DialogFooter className="mt-5">
          <DialogClose asChild>
            <Button variant="outline" className="w-full rounded-xl border-gray-400">
              បិទ
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
