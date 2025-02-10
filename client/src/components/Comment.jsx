import Image  from "./Image"
const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image src ="public/userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-600">2 days ago</span> 
      </div>
      <div className="mt-4">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere unde dolorem quaerat, accusantium reiciendis impedit blanditiis expedita enim illum temporibus alias in dolorum tempora mollitia ipsa minima dicta et iure.alias in dolorum tempora mollitia ipsa minima dicta et iure?
        </p>
      </div>
    </div>
  )
}

export default Comment
